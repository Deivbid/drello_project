import { auth } from "@clerk/nextjs/server";
import { OrgControl } from "./_components/OrgControl";
import { startCase } from "lodash";

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "Organization"),
  };
}

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationLayout;
