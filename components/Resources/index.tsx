import * as React from "react";
import { ResourceGroup } from "../../data/resources";
import { useTheme } from "../../hooks/Theme";

type Props = {
  resourceGroups: ResourceGroup[];
};

export function Resources({ resourceGroups }: Props) {
  const { bp } = useTheme();

  return (
    <section>
      {resourceGroups.map((resourceGroup) => (
        <React.Fragment key={resourceGroup.title}>
          {resourceGroup.title && (
            <h2
              css={{
                fontSize: "2.5rem",
                [bp.fromMobile]: {
                  fontSize: "2.25rem",
                },
                [bp.fromTablet]: {
                  fontSize: "2rem",
                },
              }}
            >
              {resourceGroup.title}
            </h2>
          )}
          <ul css={{ listStyleType: "none", marginLeft: 0 }}>
            {resourceGroup.children.map((resource) => {
              switch (resource.type) {
                case "LINK":
                  return (
                    <li key={resource.title} css={{ margin: "0.75rem 0" }}>
                      <div>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={resource.href}
                          css={{ fontSize: "1.25rem" }}
                        >
                          {resource.title}
                        </a>
                        <p css={{ marginTop: "0.5rem" }}>
                          {resource.description}
                        </p>
                      </div>
                    </li>
                  );
                default:
                  return null;
              }
            })}
          </ul>
        </React.Fragment>
      ))}
    </section>
  );
}
