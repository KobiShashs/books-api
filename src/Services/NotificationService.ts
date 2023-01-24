import { Notyf } from "notyf";

class NotificationService{

    private notyf = new Notyf({duration:4000, position:{x:"left",y:"top"}});

    public success(msg:string) {
        this.notyf.success(msg);
    }

    public error(msg: string) {
        this.notyf.error(msg);
    }
}

const notify = new NotificationService();
export default notify;