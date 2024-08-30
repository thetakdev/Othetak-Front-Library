import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useTheme } from "@emotion/react";

export const ToggleSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 36,
  height: 20,
  border: "0px !important",
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: "1px 1px",
    transitionDuration: "300ms",
    border: "0px !important",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      border: "0px !important",
      "& + .MuiSwitch-track": {
        backgroundColor: useTheme().colors.mainColor.main,
        opacity: 1,
        border: "0px !important",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 18,
    height: 18,
    border: "0px !important",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
  "& .Mui-disabled + .MuiSwitch-track": {
    background: "#D0D5DD !important",
    opacity: "0.9 !important",
  },
}));

export default function Toggle({ ...rest }: any) {
  return (
    <FormControlLabel
      sx={{ margin: 0 }}
      control={<ToggleSwitch sx={{ m: 1 }} {...rest} />}
      label=""
    />
  );
}
