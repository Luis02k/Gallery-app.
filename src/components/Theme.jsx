import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { IconSun, IconMoonStars } from "@tabler/icons";

const Theme = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const handleSwitchChange = (e) => {
    e.stopPropagation();
    setTheme(e.target.checked ? "dark" : "light");
  };
  return (
    <div
      // style={{ backgroundColor: "white" }}
      onClick={(e) => e.stopPropagation()}
    >
      <Switch
        style={{
          width: "40 px",
          height: "35px",
        }}
        size={"lg"}
        margin={5}
        checked={isDark}
        onChange={handleSwitchChange}
        iconOn={<IconSun filled />}
        iconOff={<IconMoonStars filled />}
      />
    </div>
  );
};

export default Theme;
