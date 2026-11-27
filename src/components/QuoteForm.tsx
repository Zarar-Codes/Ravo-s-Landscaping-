import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Paperclip,
  Phone,
  Trash2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  JOB_FREQUENCY_OPTIONS,
  QUOTE_SERVICE_OPTIONS,
} from '../data/businessData';

interface QuoteFormProps {
  preselectedService: string;
}

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  frequency: string;
  details: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

export function QuoteForm({ preselectedService }: QuoteFormProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    service: preselectedService || '',
    frequency: 'One-off job',
    details: '',
  });

  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'prepared'>('idle');
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (preselectedService) {
      setValues((prev) => ({ ...prev, service: preselectedService }));
      setErrors((prev) => ({ ...prev, service: undefined }));
      if (status === 'prepared') setStatus('idle');
    }
  }, [preselectedService]);

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!data.fullName.trim() || data.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailPattern.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const cleanedPhone = data.phone.replace(/[\s\-()]/g, '');
    if (!cleanedPhone || cleanedPhone.length < 8 || !/^\+?\d+$/.test(cleanedPhone)) {
      nextErrors.phone = 'Please enter a valid Australian phone or mobile number.';
    }
    if (!data.location.trim()) {
      nextErrors.location = 'Please enter your suburb or property location.';
    }
    if (!data.service) {
      nextErrors.service = 'Please select the service you need.';
    }
    return nextErrors;
  };

  const handleChange = (
    field: keyof FormValues,
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    if (!selected.length) return;
    setFiles((prev) => [...prev, ...selected].slice(0, 4));
    e.target.value = '';
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    // Brief client-side validation & formatting transition;
    // transparently reports that a backend email/booking endpoint is required for live dispatch.
    window.setTimeout(() => {
      setStatus('prepared');
    }, 450);
  };

  const buildSummaryText = () => {
    const lines = [
      `Quote Enquiry — ${BUSINESS_INFO.name}`,
      `Name: ${values.fullName.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim()}`,
      `Property Location: ${values.location.trim()}`,
      `Service Needed: ${values.service}`,
      `Job Frequency: ${values.frequency || 'Not specified'}`,
      values.details.trim() ? `Project Details: ${values.details.trim()}` : '',
      files.length > 0
        ? `Attached Photos (${files.length}): ${files.map((f) => f.name).join(', ')}`
        : '',
    ].filter(Boolean);
    return lines.join('\n');
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(buildSummaryText());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setValues({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      service: '',
      frequency: 'One-off job',
      details: '',
    });
    setFiles([]);
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="bg-[#F3F0E8] text-[#20251F] py-20 sm:py-28 lg:py-36 scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Business Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#78866B] mb-4">
                Let&apos;s Talk About Your Property
              </p>
              <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.03] text-[clamp(2rem,4.2vw,3.75rem)] text-[#20251F]">
                Tell Us What You Have In{' '}
                <span className="font-editorial italic font-medium text-[#263B2E]">
                  Mind.
                </span>
              </h2>
              <p className="mt-5 text-base text-[#525B51] leading-relaxed">
                Share a few details about your garden, outdoor build or property upkeep needs, or call our Trafalgar team directly.
              </p>
            </div>

            <div className="pt-7 border-t border-[#20251F]/15 space-y-6">
              <div>
                <p className="text-xs tracking-[0.16em] uppercase font-semibold text-[#78866B]">
                  Business
                </p>
                <p className="mt-1.5 font-display text-lg font-bold text-[#20251F]">
                  {BUSINESS_INFO.name}
                </p>
                <p className="mt-1 text-sm text-[#525B51]">
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.suburb}{' '}
                  {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postcode},{' '}
                  {BUSINESS_INFO.address.country}
                </p>
              </div>

              <div>
                <p className="text-xs tracking-[0.16em] uppercase font-semibold text-[#78866B]">
                  Phone Numbers
                </p>
                <div className="mt-2 flex flex-col gap-2">
                  {BUSINESS_INFO.phones.map((phone, idx) => (
                    <a
                      key={phone.display}
                      href={phone.href}
                      className="inline-flex items-center gap-2.5 font-display text-xl sm:text-2xl font-bold text-[#263B2E] hover:text-[#B77A52] transition-colors tabular-nums w-fit"
                    >
                      <Phone className="w-4 h-4 text-[#B77A52]" aria-hidden="true" />
                      <span>{phone.display}</span>
                      {idx === 1 && (
                        <span className="font-sans-body text-xs font-medium text-[#525B51]">
                          (Additional)
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-[#20251F]/12 space-y-2.5">
                <p className="text-xs tracking-[0.16em] uppercase font-semibold text-[#78866B]">
                  Official Channels
                </p>
                <div className="flex flex-col gap-2 text-sm font-medium">
                  <a
                    href={BUSINESS_INFO.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#20251F] hover:text-[#B77A52] transition-colors w-fit"
                  >
                    <span>ravosmaintenance.com.au (Online Job Booking)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={BUSINESS_INFO.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#20251F] hover:text-[#B77A52] transition-colors w-fit"
                  >
                    <span>Instagram · @ravos_landscaping</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={BUSINESS_INFO.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#20251F] hover:text-[#B77A52] transition-colors w-fit"
                  >
                    <span>Facebook · Ravo&apos;s Landscaping &amp; Property Maintenance</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Quote Request Form */}
          <div
            id="quote-form"
            className="lg:col-span-7 bg-[#FFFFFF] border border-[#20251F]/12 p-6 sm:p-10 lg:p-12 scroll-mt-24"
          >
            {status === 'prepared' ? (
              <div className="space-y-6" role="status" aria-live="polite">
                <div className="flex items-start gap-3.5 pb-6 border-b border-[#20251F]/12">
                  <div className="w-10 h-10 bg-[#263B2E] text-[#F3F0E8] flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-[#20251F]">
                      Quote Request Validated &amp; Prepared
                    </h3>
                    <p className="mt-1.5 text-sm text-[#525B51] leading-relaxed">
                      Your project details are formatted and ready. Because a live email or booking backend is not yet connected in this preview, your enquiry has <strong>not been automatically dispatched</strong>. Connect this form to a backend endpoint (or call Ravo&apos;s directly below) to send your request.
                    </p>
                  </div>
                </div>

                {/* Prepared Summary Block */}
                <div className="bg-[#F3F0E8] p-5 border border-[#20251F]/10 text-sm space-y-2 text-[#20251F]">
                  <p>
                    <span className="font-semibold">Name:</span> {values.fullName}
                  </p>
                  <p>
                    <span className="font-semibold">Contact:</span> {values.phone} · {values.email}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span> {values.location}
                  </p>
                  <p>
                    <span className="font-semibold">Service:</span> {values.service} ({values.frequency})
                  </p>
                  {values.details.trim() && (
                    <p>
                      <span className="font-semibold">Details:</span> {values.details}
                    </p>
                  )}
                  {files.length > 0 && (
                    <p>
                      <span className="font-semibold">Selected Photos:</span>{' '}
                      {files.map((f) => f.name).join(', ')}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-2 bg-[#263B2E] text-[#F3F0E8] px-6 py-3.5 text-sm font-semibold hover:bg-[#1A2A20] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" aria-hidden="true" />
                        <span>Summary Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" aria-hidden="true" />
                        <span>Copy Enquiry Details</span>
                      </>
                    )}
                  </button>

                  <a
                    href={BUSINESS_INFO.phones[0].href}
                    className="inline-flex items-center gap-2 bg-[#B77A52] text-white px-6 py-3.5 text-sm font-semibold hover:bg-[#9E6540] transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Call {BUSINESS_INFO.phones[0].display}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-sm font-semibold text-[#525B51] hover:text-[#20251F] px-3 py-2 transition-colors cursor-pointer"
                  >
                    Edit or start new enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="pb-5 border-b border-[#20251F]/12 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-[#20251F]">
                    Request a Free Quote
                  </h3>
                  <span className="text-xs text-[#525B51]">
                    Fields marked * are required
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="quote-full-name"
                      className="block text-xs tracking-[0.12em] uppercase font-semibold text-[#20251F] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="quote-full-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      value={values.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'err-full-name' : undefined}
                      className={`w-full px-4 py-3.5 bg-[#F3F0E8]/60 border text-sm text-[#20251F] placeholder:text-[#525B51]/60 focus:outline-none focus:bg-white transition-colors ${
                        errors.fullName
                          ? 'border-[#B42318]'
                          : 'border-[#20251F]/20 focus:border-[#263B2E]'
                      }`}
                    />
                    {errors.fullName && (
                      <p
                        id="err-full-name"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B42318] font-medium"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="quote-email"
                      className="block text-xs tracking-[0.12em] uppercase font-semibold text-[#20251F] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={values.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      className={`w-full px-4 py-3.5 bg-[#F3F0E8]/60 border text-sm text-[#20251F] placeholder:text-[#525B51]/60 focus:outline-none focus:bg-white transition-colors ${
                        errors.email
                          ? 'border-[#B42318]'
                          : 'border-[#20251F]/20 focus:border-[#263B2E]'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="err-email"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B42318] font-medium"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="block text-xs tracking-[0.12em] uppercase font-semibold text-[#20251F] mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={values.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="04XX XXX XXX"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'err-phone' : undefined}
                      className={`w-full px-4 py-3.5 bg-[#F3F0E8]/60 border text-sm text-[#20251F] placeholder:text-[#525B51]/60 focus:outline-none focus:bg-white transition-colors ${
                        errors.phone
                          ? 'border-[#B42318]'
                          : 'border-[#20251F]/20 focus:border-[#263B2E]'
                      }`}
                    />
                    {errors.phone && (
                      <p
                        id="err-phone"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B42318] font-medium"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Property Location */}
                  <div>
                    <label
                      htmlFor="quote-location"
                      className="block text-xs tracking-[0.12em] uppercase font-semibold text-[#20251F] mb-2"
                    >
                      Property Location *
                    </label>
                    <input
                      id="quote-location"
                      name="location"
                      type="text"
                      required
                      value={values.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      placeholder="e.g. Trafalgar, Warragul, Moe"
                      aria-invalid={Boolean(errors.location)}
                      aria-describedby={errors.location ? 'err-location' : undefined}
                      className={`w-full px-4 py-3.5 bg-[#F3F0E8]/60 border text-sm text-[#20251F] placeholder:text-[#525B51]/60 focus:outline-none focus:bg-white transition-colors ${
                        errors.location
                          ? 'border-[#B42318]'
                          : 'border-[#20251F]/20 focus:border-[#263B2E]'
                      }`}
                    />
                    {errors.location && (
                      <p
                        id="err-location"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B42318] font-medium"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.location}</span>
                      </p>
                    )}
                  </div>

                  {/* What Do You Need? */}
                  <div>
                    <label
                      htmlFor="quote-service"
                      className="block text-xs tracking-[0.12em] uppercase font-semibold text-[#20251F] mb-2"
                    >
                      What Do You Need? *
                    </label>
                    <select
                      id="quote-service"
                      name="service"
                      required
                      value={values.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? 'err-service' : undefined}
                      className={`w-full px-4 py-3.5 bg-[#F3F0E8]/60 border text-sm text-[#20251F] focus:outline-none focus:bg-white transition-colors ${
                        errors.service
                          ? 'border-[#B42318]'
                          : 'border-[#20251F]/20 focus:border-[#263B2E]'
                      }`}
                    >
                      <option value="">Select a service...</option>
                      {QUOTE_SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p
                        id="err-service"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B42318] font-medium"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* Job Frequency */}
                  <div>
                    <label
                      htmlFor="quote-frequency"
                      className="block text-xs tracking-[0.12em] uppercase font-semibold text-[#20251F] mb-2"
                    >
                      Job Frequency
                    </label>
                    <select
                      id="quote-frequency"
                      name="frequency"
                      value={values.frequency}
                      onChange={(e) => handleChange('frequency', e.target.value)}
                      className="w-full px-4 py-3.5 bg-[#F3F0E8]/60 border border-[#20251F]/20 text-sm text-[#20251F] focus:outline-none focus:bg-white focus:border-[#263B2E] transition-colors"
                    >
                      {JOB_FREQUENCY_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Tell Us About Your Project */}
                <div>
                  <label
                    htmlFor="quote-details"
                    className="block text-xs tracking-[0.12em] uppercase font-semibold text-[#20251F] mb-2"
                  >
                    Tell Us About Your Project (Optional)
                  </label>
                  <textarea
                    id="quote-details"
                    name="details"
                    rows={4}
                    value={values.details}
                    onChange={(e) => handleChange('details', e.target.value)}
                    placeholder="Briefly describe the outdoor area, the type of work you're considering, or any site access notes."
                    className="w-full px-4 py-3.5 bg-[#F3F0E8]/60 border border-[#20251F]/20 text-sm text-[#20251F] placeholder:text-[#525B51]/60 focus:outline-none focus:bg-white focus:border-[#263B2E] transition-colors resize-y"
                  />
                </div>

                {/* Optional Photo Attachments */}
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <label
                      htmlFor="quote-photos"
                      className="block text-xs tracking-[0.12em] uppercase font-semibold text-[#20251F]"
                    >
                      Property Photos (Optional · Up to 4)
                    </label>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#263B2E] hover:text-[#B77A52] transition-colors cursor-pointer"
                    >
                      <Paperclip className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Attach photos</span>
                    </button>
                  </div>
                  <input
                    ref={fileInputRef}
                    id="quote-photos"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileAdd}
                    className="sr-only"
                  />

                  {files.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {files.map((file, idx) => (
                        <li
                          key={`${file.name}-${idx}`}
                          className="flex items-center justify-between gap-3 px-3.5 py-2 bg-[#F3F0E8] border border-[#20251F]/10 text-xs text-[#20251F]"
                        >
                          <span className="truncate">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(idx)}
                            aria-label={`Remove ${file.name}`}
                            className="text-[#525B51] hover:text-[#B42318] transition-colors cursor-pointer shrink-0"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Submit Row */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 bg-[#263B2E] text-[#F3F0E8] px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#1A2A20] disabled:opacity-65 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        <span>Validating Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Prepare Quote Enquiry</span>
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#525B51] max-w-xs leading-relaxed">
                    Frontend validation active. Connect a backend email/CRM handler for direct online dispatch, or call{' '}
                    <a
                      href={BUSINESS_INFO.phones[0].href}
                      className="font-semibold text-[#263B2E] underline underline-offset-2"
                    >
                      {BUSINESS_INFO.phones[0].display}
                    </a>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
