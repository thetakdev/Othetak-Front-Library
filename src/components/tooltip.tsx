import { Tooltip as MuiTooltip } from '@mui/material';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { COLORS } from '@/styles/common';

export const TooltipBlack = styled(({ className, ...props }: TooltipProps & { type?: string }) => {
  return <MuiTooltip {...props} title={(props.title as any).props?.children ?? ''} classes={{ popper: className }} />;
})(() => ({
  height: 'auto',
  [`& .${tooltipClasses.tooltip}`]: {
    width: '100%',
    minWidth: 100,
    minHeight: 40,
    height: 'auto',
    borderRadius: 4,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '4px 8px',
    background: COLORS.grayScale.black,
    fontSize: 12,
    maxWidth: '300px',
    color: 'white',
    whiteSpace: 'wrap',
    lineHeight: 1.2,
  },

  [`& .${tooltipClasses.arrow}`]: {
    display: 'none',
    color: 'white',
  },
}));

export const Tooltip = styled(({ className, ...props }: TooltipProps) => <MuiTooltip {...props} classes={{ popper: className }} />)(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: COLORS.grayScale.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: COLORS.grayScale.black,
    fontSize: 12,
    fontWeight: 400,
    padding: '4px 8px 4px 8px',
    lineHeight: '16px',
    borderRadius: '4px',
  },
}));
