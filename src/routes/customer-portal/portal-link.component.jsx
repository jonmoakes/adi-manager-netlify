import { PortalButton } from "../../styles/buttons/buttons.styles";

const PortalLink = ({ portalUrl }) => (
  <div>
    <a href={portalUrl}>
      <PortalButton>Open Customer Portal</PortalButton>
    </a>
  </div>
);

export default PortalLink;
