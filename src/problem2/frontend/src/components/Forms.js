import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
    Button,
    InputGroup,
    InputLeftElement,
    Spinner,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    CloseButton,
} from '@chakra-ui/react'

const Forms = () => {
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");
    const [amount, setAmount] = useState("");
    const [amountError, setAmountError] = useState("");
    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [prevAddress, setPrevAddress] = useState("")
    const [prevAmount, setPrevAmount] = useState("")

    const handleAddressChange = (event) => {
        const input = event.target.value;
        setAddress(input);
        setAddressError(isAddressValid(input) ? "" : "Invalid Ethereum address");
    }

    const handleAmountChange = (event) => {
        const input = event.target.value;
        setAmount(input);
        setAmountError(isAmountValid(input)  ? "" :  "Invalid Amount");
    }

    const handleOtpChange = (event) => {
        const input = event.target.value;
        setOtp(input);
        setOtpError(isOtpValid(input)  ? "" :  "Invalid OTP");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check if form is valid
        if (isFormValid()) {
            // Show loading animation
            setLoading(true);
            // Simulate server request with sleep
            await sleep(3000);
            // Hide loading animation and show success modal
            setLoading(false);
            setShowModal(true);
            // Clear form inputs
            setPrevAddress(address);
            setPrevAmount(amount);
            setAddress("");
            setAmount("");
            setOtp("");
        }
    }

    const isAddressValid = (address) => {
        // Ethereum addresses are 40 characters long and start with "0x"
        const regex = /^0x[a-fA-F0-9]{40}$/;
        return regex.test(address);
    }

    const isAmountValid = (amount) => {
        // Ethereum addresses are 40 characters long and start with "0x"
        return !(isNaN(parseFloat(amount)) || /\s/.test(amount))
    }

    const isOtpValid = (amount) => {
        // Ethereum addresses are 40 characters long and start with "0x"
        return !(isNaN(parseFloat(amount)) || /\s/.test(amount))
    }

    const isFormValid = () => {
        return isAddressValid(address) && isAmountValid(amount) && isOtpValid(otp);
    }

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <form onSubmit={handleSubmit}>
            <VStack>
                <FormControl isRequired isInvalid={addressError}>
                    <FormLabel>ETH Address</FormLabel>
                    <Input placeholder='E.g. 0xb794f5ea0ba39494ce839613fffba74279579268'
                        value={address} onChange={handleAddressChange} />
                    <FormErrorMessage>{addressError}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={amountError}>
                    <FormLabel>Amount to Send</FormLabel>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children='$'
                        />
                        <Input placeholder='Enter amount'
                            value={amount} onChange={handleAmountChange}
                        />
                    </InputGroup>
                    <FormErrorMessage>{amountError}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={otpError}>
                    <FormLabel>OTP Authentication</FormLabel>
                    <Input placeholder='Enter OTP'
                            value={otp} onChange={handleOtpChange}
                        />
                    <FormErrorMessage>{otpError}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme='blue' variant='outline' disabled={loading}>
                    {loading ? <Spinner size="sm" mr="2" /> : null}
                    Send Tokens
                </Button>
                {showModal ? <Alert status='success'>
                <AlertIcon />
                <Box maxWidth="sm">
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>
                    {prevAmount} $SWTH has been transferred to {prevAddress}
                    </AlertDescription>
                </Box>
                <CloseButton
                    alignSelf='flex-start'
                    position='relative'
                    right={-1}
                    top={-1}
                    onClick={() => setShowModal(false)}
                />
                </Alert> : <></>}
            </VStack>
            
        </form>
    )
}

export default Forms
