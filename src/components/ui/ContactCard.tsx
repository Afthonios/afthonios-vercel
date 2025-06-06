'use client';

import React, { useState } from 'react';

interface ContactCardProps {
  locale: 'en' | 'fr';
  onSubmit: (data: any) => void;
}

export default function ContactCard({ locale, onSubmit }: ContactCardProps) {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    organisation: '',
    message: '',
  });

  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.prenom && form.nom && form.email && form.organisation && form.message) {
      setError(false);
      onSubmit(form);
    } else {
      setError(true);
    }
  };

  const t = {
    fr: {
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Adresse e-mail',
      org: 'Organisation',
      msg: 'Message',
      send: 'Envoyer',
      missing: 'Veuillez remplir tous les champs.',
      orWriteUs: 'ou écrivez-nous directement sur',
    },
    en: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email address',
      org: 'Organization',
      msg: 'Message',
      send: 'Send',
      missing: 'Please fill out all fields.',
      orWriteUs: 'or write to us directly at',
    },
  }[locale];

  return (
    <div className="text-gray-900 dark:text-white p-8 w-full max-w-5xl mx-auto transition-colors duration-300">
      <form
        className="space-y-6 text-left"
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium mb-1">
            {t.firstName}
          </label>
          <input
            id="prenom"
            name="given-name"
            type="text"
            required
            value={form.prenom}
            onChange={handleChange}
            placeholder={t.firstName}
            autoComplete="given-name"
            className="w-full rounded px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="nom" className="block text-sm font-medium mb-1">
            {t.lastName}
          </label>
          <input
            id="nom"
            name="family-name"
            type="text"
            required
            value={form.nom}
            onChange={handleChange}
            placeholder={t.lastName}
            autoComplete="family-name"
            className="w-full rounded px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            {t.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
            className="w-full rounded px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="organisation" className="block text-sm font-medium mb-1">
            {t.org}
          </label>
          <input
            id="organisation"
            name="organization"
            type="text"
            required
            value={form.organisation}
            onChange={handleChange}
            placeholder={t.org}
            autoComplete="organization"
            className="w-full rounded px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            {t.msg}
          </label>
          <textarea
            id="message"
            required
            value={form.message}
            onChange={handleChange}
            placeholder={t.msg}
            rows={4}
            className="w-full rounded px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <div className="hidden">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            autoComplete="off"
            value=""
            onChange={() => {}}
            tabIndex={-1}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded shadow-sm"
          >
            {t.send}
          </button>
          {error && (
            <p className="text-sm text-red-600 mt-2">{t.missing}</p>
          )}
        </div>
        <div className="text-center text-sm mt-4">
          <p>
            {t.orWriteUs}<br />
            <a href="mailto:connect@afthonios.com" className="text-orange-700 hover:underline dark:text-orange-300">
              connect@afthonios.com
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}