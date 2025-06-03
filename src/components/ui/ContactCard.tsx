'use client';

import React, { useState } from 'react';

export default function ContactCard({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    organisation: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.prenom && form.nom && form.email && form.organisation && form.message) {
      onSubmit(form);
    }
  };

  return (
    <div className="text-gray-900 dark:text-white p-8 w-full max-w-5xl mx-auto transition-colors duration-300">
      <form
        className="space-y-6 text-left"
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium mb-1">
            Prénom
          </label>
          <input
            id="prenom"
            name="given-name"
            type="text"
            required
            value={form.prenom}
            onChange={handleChange}
            placeholder="Prénom"
            autoComplete="given-name"
            className="w-full rounded px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="nom" className="block text-sm font-medium mb-1">
            Nom
          </label>
          <input
            id="nom"
            name="family-name"
            type="text"
            required
            value={form.nom}
            onChange={handleChange}
            placeholder="Nom"
            autoComplete="family-name"
            className="w-full rounded px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Adresse e-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="vous@example.com"
            autoComplete="email"
            className="w-full rounded px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="organisation" className="block text-sm font-medium mb-1">
            Organisation
          </label>
          <input
            id="organisation"
            name="organization"
            type="text"
            required
            value={form.organisation}
            onChange={handleChange}
            placeholder="Organisation"
            autoComplete="organization"
            className="w-full rounded px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Votre message"
            rows={4}
            className="w-full rounded px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        {/* Honeypot anti-spam field */}
        <div className="hidden">
          <label htmlFor="website">Site Web</label>
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
            Envoyer
          </button>
        </div>
        <div className="text-center text-sm mt-4">
          <p>
            ou écrivez-nous directement sur<br />
            <a href="mailto:connect@afthonios.com" className="text-orange-700 hover:underline dark:text-orange-300">
              connect@afthonios.com
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}