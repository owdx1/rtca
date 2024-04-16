"use client"

import SendIcon from '@mui/icons-material/Send';
import { Button } from "@nextui-org/react";
export const SendButton = () => {
  return (
    <Button className="px-4 gap-2" variant="light" type="submit" endContent={<SendIcon />}>
        Send
    </Button>
  )
}