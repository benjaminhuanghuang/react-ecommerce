import { resolve } from "url";

class MUtil {
    request_old(param) {
        $.ajax({
            type: para.type || 'get',
            url: param.url || '',
            dataType: param.dataType || 'json',
            data: param.data || null,
            success: res => {

            },
            error: err => {

            }
        });
    }

    request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success: res => {
                    if (0 === res.status) {
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    }
                    else if (10 === res.status) {
                        this.doLogin();
                    }
                    else {
                        typeof reject === 'function' && reject(res.data, res.msg);
                    }
                },
                error: err => {
                    typeof reject === 'function' && reject(err.statusText);
                }
            });
        });
    }

    doLogin() {
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }
}

export default MUtil;
