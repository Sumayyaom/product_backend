const joi = require("joi");
const SignUpJoi = Joi.object(

    {
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),

        password: Joi.String()
            .required(),
            

    }

)
module.exports= SignUpJoi;