import { Link, useLocation } from "react-router-dom";

interface BreadcrumbProps {
  title?: string;
  backgroundImage?: string;
}

const formatLabel = (text: string) =>
  text
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

const Breadcrumb = ({ title, backgroundImage }: BreadcrumbProps) => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div
      className="relative h-[220px] bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "linear-gradient(to right, #111827, #1f2937)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container text-white text-center">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">
          {title || formatLabel(paths[paths.length - 1] || "Home")}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-300 flex justify-center flex-wrap">
          <Link to="/" className="hover:text-white">
            Home
          </Link>

          {paths.map((path, index) => {
            const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
            const isLast = index === paths.length - 1;

            return (
              <span key={index} className="flex items-center">
                <span className="mx-2">›</span>
                {isLast ? (
                  <span className="text-gray-400">
                    {title || formatLabel(path)}
                  </span>
                ) : (
                  <Link to={routeTo} className="hover:text-white">
                    {formatLabel(path)}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
