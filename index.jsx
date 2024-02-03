import Stack from '@mui/material/Stack';
import { Typography,Box } from "@mui/material";


export function ImagePanel_fixedContent({imgLink,name}) {
    return (
        <Stack direction="column" spacing={2}>
            <Box sx={{ width: "200px", height: "100%" }}>
                <img src={imgLink}
                    alt="image" width="100%" height="100%" />
            </Box>
            <Typography variant="h6">
            {name} 教授
            </Typography>
        </Stack>
    )
}

export function InfoPanel({officeHour, email, phone, office}) {
    return (
        <>
            <Stack direction="column" spacing={2}>
                <InfoPanel_variableContent title="Office Hours" content={officeHour} />
                <InfoPanel_variableContent title="Email" content={email} />
                <InfoPanel_variableContent title="Phone" content={phone} />
                <InfoPanel_variableContent title="Office" content={office} />
            </Stack>
        </>
    )
}



export function InfoOnDoor_All(){
    return (
        <Stack direction="column" spacing={2}>
            <InfoPanel_variableContent title="Office Hours" content="Thu. 12:00 - 14:00" />
            <InfoPanel_variableContent title="Email" content="guowc@gm.ntpu.edu.tw" />
            <InfoPanel_variableContent title="Phone" content="886-2-86741111#66100" />  
            <InfoPanel_variableContent title="Office" content="社科院 3F16" />
        </Stack>
    )
}

export function InfoPanel_variableContent({title, content}) {
    return (
        <Stack direction="column" spacing={2}>
            <Typography variant="h6">
                {title}
            </Typography>
            <Typography variant="body1">
                {content}
            </Typography>
        </Stack>
    )
}


