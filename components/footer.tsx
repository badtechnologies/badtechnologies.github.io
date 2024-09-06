import { Link } from "@nextui-org/link";

const links = {
  "What's New": ["BadBook Pro:#", "CellReceiver SUPER:#"],
  Computers: ["BadBook:#", "BadTower:#"],
  "Phones & Tablets": ["BadTouch", "BadTab", "CellReceiver"],
  "Operating Systems": ["BadOS 2", "BadOS Online", "BadOS for Servers"],
  Software: ["Sentinel Pro", "Badware Antivirus", "BadLink"],
  Accessories: ["Fusion Touchpad", "Fusion Keyboard", "BadTech Headphones", "BadButton"]

};

export const Footer = () => {
  return (
    <footer className="w-full py-5 bg-slate-200 dark:bg-slate-800">
      <div className="container mx-auto flex items-center justify-between text-sm p-5">
        {Object.keys(links).map((category, i) => {
          return (
            <div key={i} className="flex flex-col gap-2">
              <h4 className="text-medium font-semibold">{category}</h4>
              {Object.values(links)[i].map((name, j) => {
                const parts = name.split(":");
                return (
                  <Link
                    href={parts[1] || "#"}
                    className="text-sm text-foreground-800 hover:text-foreground transition-colors"
                    color="foreground"
                    key={j}
                  >
                    {parts[0]}
                  </Link>
                );
              })}
            </div>
          );
        })}
        <div></div>
      </div>
      <div className="container mx-auto flex items-center justify-between text-sm p-5">
        <p>&copy; {new Date().getFullYear()} Bad Technologies</p>
        <Link color="foreground" href="#" size="sm">Legal Centre</Link>
      </div>
    </footer>
  );
};
