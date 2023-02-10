import { Global } from "@mantine/core";

import PoppinsRegular from "@/assets/fonts/Poppins-Regular.ttf";

export const CustomFonts = (): JSX.Element => (
    <Global
        styles={[
            {
                "@font-face": {
                    fontFamily: "'Poppins', sans-serif",
                    src: `url('${PoppinsRegular}') format("ttf")`,
                    fontWeight: 400,
                    fontStyle: "normal"
                }
            }
        ]}
    />
);
