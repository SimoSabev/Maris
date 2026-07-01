"use client";

import { useState, useCallback, useId } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

type ServiceOption = {
  value: string;
  label: string;
};

const SERVICE_OPTIONS: ServiceOption[] = [
  { value: "", label: "Select an area of interest" },
  { value: "properties-for-sale", label: "Properties for Sale" },
  { value: "properties-for-rent", label: "Properties for Rent" },
  { value: "yachts-for-sale", label: "Yachts for Sale" },
  { value: "yachts-for-charter", label: "Yachts for Charter" },
  { value: "interior-design", label: "Interior Design & Staging" },
];

type FormFields = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const EMPTY_FIELDS: FormFields = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

// ─── Validation helpers ────────────────────────────────────────────────────

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validateField(field: keyof FormFields, value: string): string {
  switch (field) {
    case "name":
      return value.trim().length < 2 ? "Please enter your full name." : "";
    case "email":
      if (!value.trim()) return "Email address is required.";
      if (!validateEmail(value)) return "Please enter a valid email address.";
      return "";
    case "interest":
      return !value ? "Please select an area of interest." : "";
    case "message":
      return value.trim().length < 10
        ? "Please provide a brief message (at least 10 characters)."
        : "";
    default:
      return "";
  }
}

function validateAll(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(fields) as (keyof FormFields)[]).forEach((key) => {
    const msg = validateField(key, fields[key]);
    if (msg) errors[key] = msg;
  });
  return errors;
}

// ─── Shared input style tokens ─────────────────────────────────────────────

const INPUT_BASE =
  "w-full bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] font-sans font-light placeholder:text-[var(--muted-fg)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-colors duration-200 min-h-[44px] px-4";

const LABEL_CLASS =
  "block nav-label text-[var(--muted-fg)] text-[0.6rem] mb-2";

const ERROR_CLASS = "block nav-label text-[#b91c1c] text-[0.58rem] mt-1.5";

// ─── Field components ──────────────────────────────────────────────────────

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
};

type InputFieldProps = FieldProps & React.InputHTMLAttributes<HTMLInputElement>;
type TextareaFieldProps = FieldProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type SelectFieldProps = FieldProps &
  React.SelectHTMLAttributes<HTMLSelectElement>;

function FormField({
  id,
  label,
  required,
  error,
  children,
}: FieldProps & { children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
        {required && (
          <span className="ml-1 text-[var(--accent)]" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <span id={`${id}-error`} className={ERROR_CLASS} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

function InputField({ id, label, required, error, ...rest }: InputFieldProps) {
  return (
    <FormField id={id} label={label} required={required} error={error}>
      <input
        id={id}
        required={required}
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        className={[INPUT_BASE, "py-3 text-sm"].join(" ")}
        {...rest}
      />
    </FormField>
  );
}

function SelectField({
  id,
  label,
  required,
  error,
  children,
  ...rest
}: SelectFieldProps) {
  return (
    <FormField id={id} label={label} required={required} error={error}>
      <select
        id={id}
        required={required}
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        className={[
          INPUT_BASE,
          "py-3 text-sm appearance-none cursor-pointer",
          "bg-[image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239C8C78' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1rem_1rem] pr-9",
        ].join(" ")}
        {...rest}
      >
        {children}
      </select>
    </FormField>
  );
}

function TextareaField({
  id,
  label,
  required,
  error,
  ...rest
}: TextareaFieldProps) {
  return (
    <FormField id={id} label={label} required={required} error={error}>
      <textarea
        id={id}
        required={required}
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        className={[INPUT_BASE, "py-3 text-sm resize-y min-h-[140px]"].join(
          " "
        )}
        {...rest}
      />
    </FormField>
  );
}

// ─── EnquiryForm ───────────────────────────────────────────────────────────

export function EnquiryForm() {
  const uid = useId();
  const id = (field: string) => `${uid}-${field}`;

  const [fields, setFields] = useState<FormFields>(EMPTY_FIELDS);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  // Update a single field value
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFields((prev) => ({ ...prev, [name]: value }));
      // Clear error as user types (if field was already touched)
      if (touched[name as keyof FormFields]) {
        const msg = validateField(name as keyof FormFields, value);
        setErrors((prev) => ({ ...prev, [name]: msg || undefined }));
      }
    },
    [touched]
  );

  // Validate on blur
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      const msg = validateField(name as keyof FormFields, value);
      setErrors((prev) => ({ ...prev, [name]: msg || undefined }));
    },
    []
  );

  // Submit handler — no real backend; simulate with a timeout
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Mark all as touched and validate
      const allTouched = Object.fromEntries(
        Object.keys(fields).map((k) => [k, true])
      ) as Record<keyof FormFields, boolean>;
      setTouched(allTouched);

      const allErrors = validateAll(fields);
      setErrors(allErrors);

      if (Object.keys(allErrors).length > 0) return;

      setStatus("submitting");

      // Simulate a network delay, then show success
      setTimeout(() => {
        setStatus("success");
      }, 1200);
    },
    [fields]
  );

  // ── Success state ──
  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="py-16 text-center"
      >
        {/* Thin accent line */}
        <div
          className="w-12 h-px bg-[var(--accent)] mx-auto mb-8"
          aria-hidden="true"
        />

        <p className="nav-label text-[var(--accent)] text-[0.6rem] mb-6">
          Enquiry Received
        </p>

        <h3
          className="font-display text-[var(--foreground)] leading-tight mb-6"
          style={{
            fontSize: "clamp(1.6rem, 2.4vw, 2.6rem)",
            fontWeight: 400,
            letterSpacing: "-0.015em",
          }}
        >
          Thank you for reaching out.
        </h3>

        <p
          className="text-[var(--muted-fg)] font-light leading-relaxed mx-auto"
          style={{ fontSize: "clamp(0.875rem, 0.95vw, 0.975rem)", maxWidth: "440px" }}
        >
          A member of our team will be in touch shortly. All communications are
          handled with the utmost discretion.
        </p>

        <div
          className="w-12 h-px bg-[var(--border)] mx-auto mt-10"
          aria-hidden="true"
        />
      </div>
    );
  }

  // ── Form ──
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Private enquiry form"
      className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7"
    >
      {/* Full name */}
      <InputField
        id={id("name")}
        label="Full Name"
        required
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Your full name"
        value={fields.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name}
      />

      {/* Email */}
      <InputField
        id={id("email")}
        label="Email Address"
        required
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        value={fields.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
      />

      {/* Phone — optional */}
      <InputField
        id={id("phone")}
        label="Phone (optional)"
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder="+1 212 555 0100"
        value={fields.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.phone}
      />

      {/* Interest select */}
      <SelectField
        id={id("interest")}
        label="Area of Interest"
        required
        name="interest"
        value={fields.interest}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.interest}
      >
        {SERVICE_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
            {opt.label}
          </option>
        ))}
      </SelectField>

      {/* Message — full width */}
      <div className="md:col-span-2">
        <TextareaField
          id={id("message")}
          label="Message"
          required
          name="message"
          placeholder="Please describe what you are looking for, your preferred timeline, and any other details you would like to share."
          value={fields.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.message}
        />
      </div>

      {/* Required fields note + submit */}
      <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-2">
        <p className="nav-label text-[var(--muted-fg)] text-[0.58rem]">
          <span className="text-[var(--accent)]">*</span> Required fields. All
          enquiries are handled with complete discretion.
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className={[
            "inline-flex items-center justify-center gap-3",
            "nav-label text-[0.6rem]",
            "bg-[var(--foreground)] text-[var(--background)]",
            "px-10 py-4 min-h-[44px]",
            "hover:bg-[var(--accent-ink)] transition-colors duration-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2",
            "disabled:opacity-60 disabled:cursor-not-allowed",
            "cursor-pointer whitespace-nowrap",
          ].join(" ")}
        >
          {status === "submitting" ? (
            <>
              <span
                className="inline-block w-3 h-3 border border-[var(--background)]/40 border-t-[var(--background)] rounded-full animate-spin"
                aria-hidden="true"
              />
              Sending
            </>
          ) : (
            "Send Enquiry"
          )}
        </button>
      </div>

      {/* aria-live region for submission status (idle / submitting) */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        role="status"
      >
        {status === "submitting" ? "Sending your enquiry, please wait." : ""}
      </div>
    </form>
  );
}
