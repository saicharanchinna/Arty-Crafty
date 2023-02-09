import { toast, ToastOptions, TypeOptions } from "react-toastify";

const showToast = (message: string, type: TypeOptions = 'info', options: ToastOptions = {}) => {
    switch (type) {
        case 'info':
            toast.info(message, options);
            break;
        case 'success':
            toast.success(message, options);
            break;
        case 'error':
            toast.error(message, options);
            break;
        case 'warning':
            toast.warning(message, options);
            break;
        default:
            toast.dark(message, options);
            break;
    }
}

const AlertService = {
    showToast
}

export default AlertService;
