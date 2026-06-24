import { useState, useEffect } from 'react';

const useCurrency = () => {
  const [currency, setCurrency] = useState('BRL');

  useEffect(() => {
    fetch('/api/geo')
      .then((res) => res.json())
      .then((data) => {
        if (data.country !== 'BR') setCurrency('EUR');
      })
      .catch(() => {});
  }, []);

  const isBRL = currency === 'BRL';

  return {
    loading: false,
    isBRL,
    price: isBRL ? 'R$ 149,90' : '€26',
    period: '/mês',
    ctaLink: isBRL
      ? 'https://pages.mfitpersonal.com.br/p/x61?checkout=true'
      : 'https://wa.me/351915608154?text=Ol%C3%A1!+Tenho+interesse+na+consultoria+fitness.',
    ctaLabel: isBRL
      ? 'Quero começar meu acompanhamento'
      : 'Falar com Rubem no WhatsApp',
  };
};

export default useCurrency;
