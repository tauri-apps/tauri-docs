import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';

const useLogo = () => {
  const {
    siteConfig: {themeConfig: {navbar: {logo = {}} = {}} = {}} = {},
  } = useDocusaurusContext();
  const logoLink = useBaseUrl(logo.href || '/');
  let logoLinkProps = {};

  if (logo.target) {
    logoLinkProps = {target: logo.target};
  } else if (!isInternalUrl(logoLink)) {
    logoLinkProps = {
      rel: 'noopener noreferrer',
      target: '_blank',
    };
  }
  const logoImageUrl = useBaseUrl(logo.src);

  return {
    logoLink,
    logoLinkProps,
    logoImageUrl,
    logoAlt: logo.alt,
  };
};

export default useLogo;