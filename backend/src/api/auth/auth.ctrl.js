const { ADMIN_PASS: adminPass } = process.env;

exports.login = (ctx) => {
    const { password } = ctx.request.body;
    console.log(adminPass);
    if(adminPass === password) {
        ctx.body = {
            success: true
        };
        ctx.session.logged = true;
    } else {
        console.log(password);
        ctx.body = {
            success: false
        };
        ctx.status = 401;
    }
};

exports.check = (ctx) => {
    ctx.body = {
        logged: !!ctx.session.logged
    };
};

exports.logout = (ctx) => {
    ctx.session = null;
    ctx.status = 204;
};