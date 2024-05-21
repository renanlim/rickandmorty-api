import { useEffect, useState } from "react";


type AlertMessageProps = {
    message: string;
    variant: 'error' | 'success';
    setMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const AlertMessage = ({ message, variant, setMessage }: AlertMessageProps) => {
    const variantStyles = {
        error: 'bg-red-100 border-red-400 text-red-700',
        success: 'bg-green-100 border-green-400 text-green-700'
    };

    const [open, setOpen] = useState(!!message);

    useEffect(() => {
        if (message) {
            setOpen(true);
            const timer = setTimeout(() => {
                setOpen(false);
                setMessage('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message, setMessage]);

    const handleClose = () => {
        setOpen(false);
        setMessage('');
    };

    return (
        <>
        {open && (
            <div className={`${variantStyles[variant]} px-4 py-3 rounded relative mt-4`} role="alert">
                <span className="block sm:inline">{message}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={handleClose}></span>
            </div>
        )}
    </>
    );
};