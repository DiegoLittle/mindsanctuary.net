"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAdapter = void 0;
function PrismaAdapter(p) {
    return {
        createUser: (data) => {
            // console.log({data})
            // console.log(data.email)
            // console.log("Test")
            var confirmationCode = Math.floor(Math.random() * 899999 + 100000)
            p.user.create({
                data: {
                    email:data.email,
                    confirmationCode:confirmationCode
                }
            }
            )
        },
        getUser: (id) => p.user.findUnique({ where: { id } }),
        getUserByEmail: (email) => p.user.findUnique({ where: { email } }),
        async getUserByAccount(provider_providerAccountId) {
            var _a;
            const account = await p.account.findUnique({
                where: { provider_providerAccountId },
                select: { user: true },
            });
            return (_a = account === null || account === void 0 ? void 0 : account.user) !== null && _a !== void 0 ? _a : null;
        },
        updateUser: (data) => p.user.update({ where: { id: data.id }, data }),
        deleteUser: (id) => p.user.delete({ where: { id } }),
        linkAccount: (data) => p.account.create({ data }),
        unlinkAccount: (provider_providerAccountId) => p.account.delete({ where: { provider_providerAccountId } }),
        async getSessionAndUser(sessionToken) {
            const userAndSession = await p.session.findUnique({
                where: { sessionToken },
                include: { user: true },
            });
            if (!userAndSession)
                return null;
            const { user, ...session } = userAndSession;
            return { user, session };
        },
        createSession: (data) => p.session.create({ data }),
        updateSession: (data) => p.session.update({ data, where: { sessionToken: data.sessionToken } }),
        deleteSession: (sessionToken) => p.session.delete({ where: { sessionToken } }),
        createVerificationToken: (data) => p.verificationToken.create({ data }),
        async useVerificationToken(identifier_token) {
            try {
                return await p.verificationToken.delete({ where: { identifier_token } });
            }
            catch (error) {
                // If token already used/deleted, just return null
                // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
                if (error.code === "P2025")
                    return null;
                throw error;
            }
        },
    };
}
exports.PrismaAdapter = PrismaAdapter;
