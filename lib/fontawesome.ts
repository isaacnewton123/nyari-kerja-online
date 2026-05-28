// Font Awesome library configuration
// Import once in layout.tsx, then use <FontAwesomeIcon> anywhere
import { library } from '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent FA from adding its CSS since we import it manually above
config.autoAddCss = false;

import {
  faMagnifyingGlass,
  faBars,
  faXmark,
  faArrowRight,
  faArrowLeft,
  faChevronRight,
  faLocationDot,
  faCalendarDays,
  faBuilding,
  faBriefcase,
  faGraduationCap,
  faUsers,
  faDesktop,
  faHandshake,
  faCertificate,
  faCircleCheck,
  faPaperPlane,
  faEnvelope,
  faUpRightFromSquare,
  faShareNodes,
  faHeart,
  faCircleExclamation,
  faArrowsRotate,
  faHouse,
  faMagnifyingGlassMinus,
  faTag,
  faTags,
  faArrowTrendUp,
  faChartLine,
  faLayerGroup,
  faGlobe,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faMagnifyingGlass,
  faBars,
  faXmark,
  faArrowRight,
  faArrowLeft,
  faChevronRight,
  faLocationDot,
  faCalendarDays,
  faBuilding,
  faBriefcase,
  faGraduationCap,
  faUsers,
  faDesktop,
  faHandshake,
  faCertificate,
  faCircleCheck,
  faPaperPlane,
  faEnvelope,
  faUpRightFromSquare,
  faShareNodes,
  faHeart,
  faCircleExclamation,
  faArrowsRotate,
  faHouse,
  faMagnifyingGlassMinus,
  faTag,
  faTags,
  faArrowTrendUp,
  faChartLine,
  faLayerGroup,
  faGlobe,
  faShieldHalved,
  // Brands
  faTwitter,
  faLinkedinIn,
  faGithub,
  faWhatsapp,
);
