import bcrypt from 'bcrypt'

const saltRounds = 11;

const salt = bcrypt.genSaltSync(saltRounds);

export async function hashPassword(password) {
    const hashedPW = bcrypt.hashSync(password, salt);
    return hashedPW
}

export async function comparePassword(loginPassword, encrypedPassword) {
    return await bcrypt.compare(loginPassword, encrypedPassword);
}