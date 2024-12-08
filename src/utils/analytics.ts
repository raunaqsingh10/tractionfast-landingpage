import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-97TW0W4PP1');
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};