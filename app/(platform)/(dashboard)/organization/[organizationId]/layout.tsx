import { OrgControl } from "./_components/OrgControl";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationLayout;
