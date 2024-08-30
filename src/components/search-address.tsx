import { Box, IconButton, Modal } from "@mui/material";
import Image from "next/image";
import DaumPostcodeEmbed from "react-daum-postcode";

interface KAKAO_ADDRESS_PROPS {
  open: boolean;
  onClose: (visible: boolean) => void;
  onSelect: (rest: any) => void;
}

const SearchAddress = ({ open, onClose, onSelect }: KAKAO_ADDRESS_PROPS) => {
  const handleComplete = (data: {
    address: any;
    addressType: string;
    bname: string;
    buildingName: string;
  }) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    onClose(false);
    onSelect(data);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          width: 500,
        }}
      >
        <IconButton onClick={onClose as any} size="small">
          <Image
            src={`https://image.thetak.net/asset/product/images/x_close_gray_2.svg`}
            width={28}
            height={28}
            alt="close"
          />
        </IconButton>

        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Box>
    </Modal>
  );
};

export default SearchAddress;
