/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadSwagger = void 0;
const swagger_1 = __webpack_require__(3);
const loadSwagger = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('crosspublic Swagger file')
        .setDescription('API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
};
exports.loadSwagger = loadSwagger;


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const database_module_1 = __webpack_require__(8);
const api_module_1 = __webpack_require__(131);
const core_1 = __webpack_require__(6);
const permissions_guard_1 = __webpack_require__(165);
const bull_mq_module_1 = __webpack_require__(234);
const plugin_module_1 = __webpack_require__(235);
const public_api_module_1 = __webpack_require__(237);
const throttler_provider_1 = __webpack_require__(240);
const throttler_1 = __webpack_require__(241);
const agent_module_1 = __webpack_require__(242);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            bull_mq_module_1.BullMqModule,
            database_module_1.DatabaseModule,
            api_module_1.ApiModule,
            plugin_module_1.PluginModule,
            public_api_module_1.PublicApiModule,
            agent_module_1.AgentModule,
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 3600000,
                    limit: 30,
                },
            ]),
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_provider_1.ThrottlerBehindProxyGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: permissions_guard_1.PoliciesGuard,
            },
        ],
        get exports() {
            return [...this.imports];
        },
    })
], AppModule);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const prisma_service_1 = __webpack_require__(9);
const organization_repository_1 = __webpack_require__(11);
const organization_service_1 = __webpack_require__(17);
const users_service_1 = __webpack_require__(33);
const users_repository_1 = __webpack_require__(34);
const stars_service_1 = __webpack_require__(36);
const stars_repository_1 = __webpack_require__(37);
const subscription_service_1 = __webpack_require__(40);
const subscription_repository_1 = __webpack_require__(42);
const notification_service_1 = __webpack_require__(18);
const integration_service_1 = __webpack_require__(43);
const integration_repository_1 = __webpack_require__(44);
const posts_service_1 = __webpack_require__(99);
const posts_repository_1 = __webpack_require__(100);
const integration_manager_1 = __webpack_require__(55);
const media_service_1 = __webpack_require__(111);
const media_repository_1 = __webpack_require__(112);
const notifications_repository_1 = __webpack_require__(19);
const email_service_1 = __webpack_require__(20);
const item_user_repository_1 = __webpack_require__(123);
const item_user_service_1 = __webpack_require__(124);
const messages_service_1 = __webpack_require__(104);
const messages_repository_1 = __webpack_require__(105);
const stripe_service_1 = __webpack_require__(106);
const extract_content_service_1 = __webpack_require__(125);
const openai_service_1 = __webpack_require__(113);
const agencies_service_1 = __webpack_require__(127);
const agencies_repository_1 = __webpack_require__(128);
const track_service_1 = __webpack_require__(108);
const short_link_service_1 = __webpack_require__(117);
const webhooks_repository_1 = __webpack_require__(122);
const webhooks_service_1 = __webpack_require__(121);
const signature_repository_1 = __webpack_require__(129);
const signature_service_1 = __webpack_require__(130);
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers: [
            prisma_service_1.PrismaService,
            prisma_service_1.PrismaRepository,
            users_service_1.UsersService,
            users_repository_1.UsersRepository,
            organization_service_1.OrganizationService,
            organization_repository_1.OrganizationRepository,
            stars_service_1.StarsService,
            stars_repository_1.StarsRepository,
            subscription_service_1.SubscriptionService,
            subscription_repository_1.SubscriptionRepository,
            notification_service_1.NotificationService,
            notifications_repository_1.NotificationsRepository,
            webhooks_repository_1.WebhooksRepository,
            webhooks_service_1.WebhooksService,
            integration_service_1.IntegrationService,
            integration_repository_1.IntegrationRepository,
            posts_service_1.PostsService,
            posts_repository_1.PostsRepository,
            stripe_service_1.StripeService,
            messages_repository_1.MessagesRepository,
            signature_repository_1.SignatureRepository,
            signature_service_1.SignatureService,
            media_service_1.MediaService,
            media_repository_1.MediaRepository,
            item_user_repository_1.ItemUserRepository,
            agencies_service_1.AgenciesService,
            agencies_repository_1.AgenciesRepository,
            item_user_service_1.ItemUserService,
            messages_service_1.MessagesService,
            integration_manager_1.IntegrationManager,
            extract_content_service_1.ExtractContentService,
            openai_service_1.OpenaiService,
            email_service_1.EmailService,
            track_service_1.TrackService,
            short_link_service_1.ShortLinkService,
        ],
        get exports() {
            return this.providers;
        },
    })
], DatabaseModule);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaRepository = exports.PrismaService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const client_1 = __webpack_require__(10);
let PrismaService = class PrismaService extends client_1.PrismaClient {
    constructor() {
        super({
            log: [
                {
                    emit: 'event',
                    level: 'query',
                },
            ],
        });
    }
    async onModuleInit() {
        await this.$connect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], PrismaService);
let PrismaRepository = class PrismaRepository {
    constructor(_prismaService) {
        this._prismaService = _prismaService;
        this.model = this._prismaService;
    }
};
exports.PrismaRepository = PrismaRepository;
exports.PrismaRepository = PrismaRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [PrismaService])
], PrismaRepository);


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrganizationRepository = void 0;
const tslib_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
const client_1 = __webpack_require__(10);
const common_1 = __webpack_require__(5);
const auth_service_1 = __webpack_require__(12);
const make_is_1 = __webpack_require__(16);
let OrganizationRepository = class OrganizationRepository {
    constructor(_organization, _userOrg, _user) {
        this._organization = _organization;
        this._userOrg = _userOrg;
        this._user = _user;
    }
    getOrgByApiKey(api) {
        return this._organization.model.organization.findFirst({
            where: {
                apiKey: api,
            },
            include: {
                subscription: {
                    select: {
                        subscriptionTier: true,
                        totalChannels: true,
                        isLifetime: true,
                    },
                },
            },
        });
    }
    getCount() {
        return this._organization.model.organization.count();
    }
    getUserOrg(id) {
        return this._userOrg.model.userOrganization.findFirst({
            where: {
                id,
            },
            select: {
                user: true,
                organization: {
                    include: {
                        users: {
                            select: {
                                id: true,
                                disabled: true,
                                role: true,
                                userId: true,
                            },
                        },
                        subscription: {
                            select: {
                                subscriptionTier: true,
                                totalChannels: true,
                                isLifetime: true,
                            },
                        },
                    },
                },
            },
        });
    }
    getImpersonateUser(name) {
        return this._userOrg.model.userOrganization.findMany({
            where: {
                user: {
                    OR: [
                        {
                            name: {
                                contains: name,
                            },
                        },
                        {
                            email: {
                                contains: name,
                            },
                        },
                        {
                            id: {
                                contains: name,
                            },
                        },
                    ],
                },
            },
            select: {
                id: true,
                organization: {
                    select: {
                        id: true,
                    },
                },
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        });
    }
    updateApiKey(orgId) {
        return this._organization.model.organization.update({
            where: {
                id: orgId,
            },
            data: {
                apiKey: auth_service_1.AuthService.fixedEncryption((0, make_is_1.makeId)(20)),
            },
        });
    }
    async getOrgsByUserId(userId) {
        return this._organization.model.organization.findMany({
            where: {
                users: {
                    some: {
                        userId,
                    },
                },
            },
            include: {
                users: {
                    where: {
                        userId,
                    },
                    select: {
                        disabled: true,
                        role: true,
                    },
                },
                subscription: {
                    select: {
                        subscriptionTier: true,
                        totalChannels: true,
                        isLifetime: true,
                        createdAt: true,
                    },
                },
            },
        });
    }
    async getOrgById(id) {
        return this._organization.model.organization.findUnique({
            where: {
                id,
            },
        });
    }
    async addUserToOrg(userId, id, orgId, role) {
        const checkIfInviteExists = await this._user.model.user.findFirst({
            where: {
                inviteId: id,
            },
        });
        if (checkIfInviteExists) {
            return false;
        }
        const checkForSubscription = await this._organization.model.organization.findFirst({
            where: {
                id: orgId,
            },
            select: {
                subscription: true,
            },
        });
        if (process.env.STRIPE_PUBLISHABLE_KEY &&
            checkForSubscription?.subscription?.subscriptionTier ===
                client_1.SubscriptionTier.STANDARD) {
            return false;
        }
        const create = await this._userOrg.model.userOrganization.create({
            data: {
                role,
                userId,
                organizationId: orgId,
            },
        });
        await this._user.model.user.update({
            where: {
                id: userId,
            },
            data: {
                inviteId: id,
            },
        });
        return create;
    }
    async createOrgAndUser(body, hasEmail, ip, userAgent) {
        return this._organization.model.organization.create({
            data: {
                name: body.company,
                apiKey: auth_service_1.AuthService.fixedEncryption((0, make_is_1.makeId)(20)),
                allowTrial: true,
                users: {
                    create: {
                        role: client_1.Role.SUPERADMIN,
                        user: {
                            create: {
                                activated: body.provider !== 'LOCAL' || !hasEmail,
                                email: body.email,
                                password: body.password
                                    ? auth_service_1.AuthService.hashPassword(body.password)
                                    : '',
                                providerName: body.provider,
                                providerId: body.providerId || '',
                                timezone: 0,
                                ip,
                                agent: userAgent,
                            },
                        },
                    },
                },
            },
            select: {
                id: true,
                users: {
                    select: {
                        user: true,
                    },
                },
            },
        });
    }
    getOrgByCustomerId(customerId) {
        return this._organization.model.organization.findFirst({
            where: {
                paymentId: customerId,
            },
        });
    }
    async getTeam(orgId) {
        return this._organization.model.organization.findUnique({
            where: {
                id: orgId,
            },
            select: {
                users: {
                    select: {
                        role: true,
                        user: {
                            select: {
                                email: true,
                                id: true,
                            },
                        },
                    },
                },
            },
        });
    }
    getAllUsersOrgs(orgId) {
        return this._organization.model.organization.findUnique({
            where: {
                id: orgId,
            },
            select: {
                users: {
                    select: {
                        user: {
                            select: {
                                email: true,
                                id: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async deleteTeamMember(orgId, userId) {
        return this._userOrg.model.userOrganization.delete({
            where: {
                userId_organizationId: {
                    userId,
                    organizationId: orgId,
                },
            },
        });
    }
    disableOrEnableNonSuperAdminUsers(orgId, disable) {
        return this._userOrg.model.userOrganization.updateMany({
            where: {
                organizationId: orgId,
                role: {
                    not: client_1.Role.SUPERADMIN,
                },
            },
            data: {
                disabled: disable,
            },
        });
    }
};
exports.OrganizationRepository = OrganizationRepository;
exports.OrganizationRepository = OrganizationRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository])
], OrganizationRepository);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(1);
const jsonwebtoken_1 = __webpack_require__(13);
const bcrypt_1 = __webpack_require__(14);
const crypto_1 = tslib_1.__importDefault(__webpack_require__(15));
class AuthService {
    static hashPassword(password) {
        return (0, bcrypt_1.hashSync)(password, 10);
    }
    static comparePassword(password, hash) {
        return (0, bcrypt_1.compareSync)(password, hash);
    }
    static signJWT(value) {
        return (0, jsonwebtoken_1.sign)(value, process.env.JWT_SECRET);
    }
    static verifyJWT(token) {
        return (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
    }
    static fixedEncryption(value) {
        // encryption algorithm
        const algorithm = 'aes-256-cbc';
        // create a cipher object
        const cipher = crypto_1.default.createCipher(algorithm, process.env.JWT_SECRET);
        // encrypt the plain text
        let encrypted = cipher.update(value, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }
    static fixedDecryption(hash) {
        const algorithm = 'aes-256-cbc';
        const decipher = crypto_1.default.createDecipher(algorithm, process.env.JWT_SECRET);
        // decrypt the encrypted text
        let decrypted = decipher.update(hash, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}
exports.AuthService = AuthService;


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeId = void 0;
const makeId = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
exports.makeId = makeId;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrganizationService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const organization_repository_1 = __webpack_require__(11);
const notification_service_1 = __webpack_require__(18);
const auth_service_1 = __webpack_require__(12);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const make_is_1 = __webpack_require__(16);
let OrganizationService = class OrganizationService {
    constructor(_organizationRepository, _notificationsService) {
        this._organizationRepository = _organizationRepository;
        this._notificationsService = _notificationsService;
    }
    async createOrgAndUser(body, ip, userAgent) {
        return this._organizationRepository.createOrgAndUser(body, this._notificationsService.hasEmailProvider(), ip, userAgent);
    }
    async getCount() {
        return this._organizationRepository.getCount();
    }
    addUserToOrg(userId, id, orgId, role) {
        return this._organizationRepository.addUserToOrg(userId, id, orgId, role);
    }
    getOrgById(id) {
        return this._organizationRepository.getOrgById(id);
    }
    getOrgByApiKey(api) {
        return this._organizationRepository.getOrgByApiKey(api);
    }
    getUserOrg(id) {
        return this._organizationRepository.getUserOrg(id);
    }
    getOrgsByUserId(userId) {
        return this._organizationRepository.getOrgsByUserId(userId);
    }
    updateApiKey(orgId) {
        return this._organizationRepository.updateApiKey(orgId);
    }
    getTeam(orgId) {
        return this._organizationRepository.getTeam(orgId);
    }
    getOrgByCustomerId(customerId) {
        return this._organizationRepository.getOrgByCustomerId(customerId);
    }
    async inviteTeamMember(orgId, body) {
        const timeLimit = (0, dayjs_1.default)().add(1, 'hour').format('YYYY-MM-DD HH:mm:ss');
        const id = (0, make_is_1.makeId)(5);
        const url = process.env.FRONTEND_URL +
            `/?org=${auth_service_1.AuthService.signJWT({ ...body, orgId, timeLimit, id })}`;
        if (body.sendEmail) {
            await this._notificationsService.sendEmail(body.email, 'You have been invited to join an organization', `You have been invited to join an organization. Click <a href="${url}">here</a> to join.<br />The link will expire in 1 hour.`);
        }
        return { url };
    }
    async deleteTeamMember(org, userId) {
        const userOrgs = await this._organizationRepository.getOrgsByUserId(userId);
        const findOrgToDelete = userOrgs.find((orgUser) => orgUser.id === org.id);
        if (!findOrgToDelete) {
            throw new Error('User is not part of this organization');
        }
        // @ts-ignore
        const myRole = org.users[0].role;
        const userRole = findOrgToDelete.users[0].role;
        const myLevel = myRole === 'USER' ? 0 : myRole === 'ADMIN' ? 1 : 2;
        const userLevel = userRole === 'USER' ? 0 : userRole === 'ADMIN' ? 1 : 2;
        if (myLevel < userLevel) {
            throw new Error('You do not have permission to delete this user');
        }
        return this._organizationRepository.deleteTeamMember(org.id, userId);
    }
    disableOrEnableNonSuperAdminUsers(orgId, disable) {
        return this._organizationRepository.disableOrEnableNonSuperAdminUsers(orgId, disable);
    }
};
exports.OrganizationService = OrganizationService;
exports.OrganizationService = OrganizationService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [organization_repository_1.OrganizationRepository,
        notification_service_1.NotificationService])
], OrganizationService);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const notifications_repository_1 = __webpack_require__(19);
const email_service_1 = __webpack_require__(20);
const organization_repository_1 = __webpack_require__(11);
const client_1 = __webpack_require__(26);
const redis_service_1 = __webpack_require__(29);
let NotificationService = class NotificationService {
    constructor(_notificationRepository, _emailService, _organizationRepository, _workerServiceProducer) {
        this._notificationRepository = _notificationRepository;
        this._emailService = _emailService;
        this._organizationRepository = _organizationRepository;
        this._workerServiceProducer = _workerServiceProducer;
    }
    getMainPageCount(organizationId, userId) {
        return this._notificationRepository.getMainPageCount(organizationId, userId);
    }
    getNotifications(organizationId, userId) {
        return this._notificationRepository.getNotifications(organizationId, userId);
    }
    getNotificationsSince(organizationId, since) {
        return this._notificationRepository.getNotificationsSince(organizationId, since);
    }
    async inAppNotification(orgId, subject, message, sendEmail = false, digest = false) {
        const date = new Date().toISOString();
        await this._notificationRepository.createNotification(orgId, message);
        if (!sendEmail) {
            return;
        }
        if (digest) {
            await redis_service_1.ioRedis.watch('digest_' + orgId);
            const value = await redis_service_1.ioRedis.get('digest_' + orgId);
            if (value) {
                return;
            }
            await redis_service_1.ioRedis
                .multi()
                .set('digest_' + orgId, date)
                .expire('digest_' + orgId, 60)
                .exec();
            this._workerServiceProducer.emit('sendDigestEmail', {
                id: 'digest_' + orgId,
                options: {
                    delay: 60000,
                },
                payload: {
                    subject,
                    org: orgId,
                    since: date,
                },
            });
            return;
        }
        await this.sendEmailsToOrg(orgId, subject, message);
    }
    async sendEmailsToOrg(orgId, subject, message) {
        const userOrg = await this._organizationRepository.getAllUsersOrgs(orgId);
        for (const user of userOrg?.users || []) {
            await this.sendEmail(user.user.email, subject, message);
        }
    }
    async sendEmail(to, subject, html, replyTo) {
        await this._emailService.sendEmail(to, subject, html, replyTo);
    }
    hasEmailProvider() {
        return this._emailService.hasProvider();
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [notifications_repository_1.NotificationsRepository,
        email_service_1.EmailService,
        organization_repository_1.OrganizationRepository,
        client_1.BullMqClient])
], NotificationService);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationsRepository = void 0;
const tslib_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(5);
let NotificationsRepository = class NotificationsRepository {
    constructor(_notifications, _user) {
        this._notifications = _notifications;
        this._user = _user;
    }
    getLastReadNotification(userId) {
        return this._user.model.user.findFirst({
            where: {
                id: userId,
            },
            select: {
                lastReadNotifications: true,
            },
        });
    }
    async getMainPageCount(organizationId, userId) {
        const { lastReadNotifications } = (await this.getLastReadNotification(userId));
        return {
            total: await this._notifications.model.notifications.count({
                where: {
                    organizationId,
                    createdAt: {
                        gt: lastReadNotifications,
                    },
                },
            }),
        };
    }
    async createNotification(organizationId, content) {
        await this._notifications.model.notifications.create({
            data: {
                organizationId,
                content,
            },
        });
    }
    async getNotificationsSince(organizationId, since) {
        return this._notifications.model.notifications.findMany({
            where: {
                organizationId,
                createdAt: {
                    gte: new Date(since),
                },
            },
        });
    }
    async getNotifications(organizationId, userId) {
        const { lastReadNotifications } = (await this.getLastReadNotification(userId));
        await this._user.model.user.update({
            where: {
                id: userId,
            },
            data: {
                lastReadNotifications: new Date(),
            },
        });
        return {
            lastReadNotifications,
            notifications: await this._notifications.model.notifications.findMany({
                orderBy: {
                    createdAt: 'desc',
                },
                take: 10,
                where: {
                    organizationId,
                },
                select: {
                    createdAt: true,
                    content: true,
                },
            }),
        };
    }
};
exports.NotificationsRepository = NotificationsRepository;
exports.NotificationsRepository = NotificationsRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository])
], NotificationsRepository);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const resend_provider_1 = __webpack_require__(21);
const empty_provider_1 = __webpack_require__(23);
const node_mailer_provider_1 = __webpack_require__(24);
let EmailService = class EmailService {
    constructor() {
        this.emailService = this.selectProvider(process.env.EMAIL_PROVIDER);
        console.log('Email service provider:', this.emailService.name);
        for (const key of this.emailService.validateEnvKeys) {
            if (!process.env[key]) {
                console.error(`Missing environment variable: ${key}`);
            }
        }
    }
    hasProvider() {
        return !(this.emailService instanceof empty_provider_1.EmptyProvider);
    }
    selectProvider(provider) {
        switch (provider) {
            case 'resend':
                return new resend_provider_1.ResendProvider();
            case 'nodemailer':
                return new node_mailer_provider_1.NodeMailerProvider();
            default:
                return new empty_provider_1.EmptyProvider();
        }
    }
    async sendEmail(to, subject, html, replyTo) {
        if (to.indexOf('@') === -1) {
            return;
        }
        if (!process.env.EMAIL_FROM_ADDRESS || !process.env.EMAIL_FROM_NAME) {
            console.log('Email sender information not found in environment variables');
            return;
        }
        const modifiedHtml = `
    <div style="
        background: linear-gradient(to bottom right, #e6f2ff, #f0e6ff);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    ">
        <div style="
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(4px);
            border-radius: 0.5rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            max-width: 48rem;
            width: 100%;
            padding: 2rem;
        ">
            <h1 style="
                font-size: 1.875rem;
                font-weight: bold;
                margin-bottom: 1.5rem;
                text-align: left;
                color: #1f2937;
            ">${subject}</h1>
            
            <div style="
                margin-bottom: 2rem;
                color: #374151;
            ">
                ${html}
            </div>
            
            <div style="
                display: flex;
                align-items: center;
                border-top: 1px solid #e5e7eb;
                padding-top: 1.5rem;
            ">
                <div>
                    <h2 style="
                        font-size: 1.25rem;
                        font-weight: 600;
                        color: #1f2937;
                        margin: 0;
                    ">${process.env.EMAIL_FROM_NAME}</h2>
                </div>
            </div>
        </div>
    </div>
    `;
        const sends = await this.emailService.sendEmail(to, subject, modifiedHtml, process.env.EMAIL_FROM_NAME, process.env.EMAIL_FROM_ADDRESS, replyTo);
        console.log(sends);
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], EmailService);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResendProvider = void 0;
const resend_1 = __webpack_require__(22);
const resend = new resend_1.Resend(process.env.RESEND_API_KEY || 're_132');
class ResendProvider {
    constructor() {
        this.name = 'resend';
        this.validateEnvKeys = ['RESEND_API_KEY'];
    }
    async sendEmail(to, subject, html, emailFromName, emailFromAddress, replyTo) {
        const sends = await resend.emails.send({
            from: `${emailFromName} <${emailFromAddress}>`,
            to,
            subject,
            html,
            ...(replyTo && { reply_to: replyTo }),
        });
        return sends;
    }
}
exports.ResendProvider = ResendProvider;


/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("resend");

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmptyProvider = void 0;
class EmptyProvider {
    constructor() {
        this.name = 'no provider';
        this.validateEnvKeys = [];
    }
    async sendEmail(to, subject, html) {
        return `No email provider found, email was supposed to be sent to ${to} with subject: ${subject} and ${html}, html`;
    }
}
exports.EmptyProvider = EmptyProvider;


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeMailerProvider = void 0;
const tslib_1 = __webpack_require__(1);
const nodemailer_1 = tslib_1.__importDefault(__webpack_require__(25));
const transporter = nodemailer_1.default.createTransport({
    host: process.env.EMAIL_HOST,
    port: +process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
class NodeMailerProvider {
    constructor() {
        this.name = 'nodemailer';
        this.validateEnvKeys = [
            'EMAIL_HOST',
            'EMAIL_PORT',
            'EMAIL_SECURE',
            'EMAIL_USER',
            'EMAIL_PASS',
        ];
    }
    async sendEmail(to, subject, html, emailFromName, emailFromAddress) {
        const sends = await transporter.sendMail({
            from: `${emailFromName} <${emailFromAddress}>`, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: html, // plain text body
            html: html, // html body
        });
        return sends;
    }
}
exports.NodeMailerProvider = NodeMailerProvider;


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BullMqClient = void 0;
const tslib_1 = __webpack_require__(1);
const microservices_1 = __webpack_require__(27);
const bullmq_1 = __webpack_require__(28);
const redis_service_1 = __webpack_require__(29);
const uuid_1 = __webpack_require__(31);
const common_1 = __webpack_require__(5);
let BullMqClient = class BullMqClient extends microservices_1.ClientProxy {
    constructor() {
        super(...arguments);
        this.queues = new Map();
        this.queueEvents = new Map();
    }
    async connect() {
        return;
    }
    async close() {
        return;
    }
    publish(packet, callback) {
        // console.log('hello');
        // this.publishAsync(packet, callback);
        return () => console.log('sent');
    }
    delete(pattern, jobId) {
        const queue = this.getQueue(pattern);
        return queue.remove(jobId);
    }
    async publishAsync(packet, callback) {
        const queue = this.getQueue(packet.pattern);
        const queueEvents = this.getQueueEvents(packet.pattern);
        const job = await queue.add(packet.pattern, packet.data, {
            jobId: packet.data.id ?? (0, uuid_1.v4)(),
            ...packet.data.options,
            removeOnComplete: !packet.data.options.attempts,
            removeOnFail: !packet.data.options.attempts,
        });
        try {
            await job.waitUntilFinished(queueEvents);
            console.log('success');
            callback({ response: job.returnvalue, isDisposed: true });
        }
        catch (err) {
            console.log('err');
            callback({ err, isDisposed: true });
        }
    }
    getQueueEvents(pattern) {
        return (this.queueEvents.get(pattern) ||
            new bullmq_1.QueueEvents(pattern, {
                connection: redis_service_1.ioRedis,
            }));
    }
    getQueue(pattern) {
        return (this.queues.get(pattern) ||
            new bullmq_1.Queue(pattern, {
                connection: redis_service_1.ioRedis,
            }));
    }
    async dispatchEvent(packet) {
        console.log('event to dispatch: ', packet);
        const queue = this.getQueue(packet.pattern);
        await queue.add(packet.pattern, packet.data, {
            jobId: packet.data.id ?? (0, uuid_1.v4)(),
            ...packet.data.options,
            removeOnComplete: true,
            removeOnFail: true,
        });
    }
};
exports.BullMqClient = BullMqClient;
exports.BullMqClient = BullMqClient = tslib_1.__decorate([
    (0, common_1.Injectable)()
], BullMqClient);


/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 28 */
/***/ ((module) => {

module.exports = require("bullmq");

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ioRedis = void 0;
const ioredis_1 = __webpack_require__(30);
exports.ioRedis = new ioredis_1.Redis(process.env.REDIS_URL, {
    maxRetriesPerRequest: null,
    connectTimeout: 10000
});


/***/ }),
/* 30 */
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 32 */
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const users_repository_1 = __webpack_require__(34);
const organization_repository_1 = __webpack_require__(11);
let UsersService = class UsersService {
    constructor(_usersRepository, _organizationRepository) {
        this._usersRepository = _usersRepository;
        this._organizationRepository = _organizationRepository;
    }
    getUserByEmail(email) {
        return this._usersRepository.getUserByEmail(email);
    }
    getUserById(id) {
        return this._usersRepository.getUserById(id);
    }
    getImpersonateUser(name) {
        return this._organizationRepository.getImpersonateUser(name);
    }
    getUserByProvider(providerId, provider) {
        return this._usersRepository.getUserByProvider(providerId, provider);
    }
    activateUser(id) {
        return this._usersRepository.activateUser(id);
    }
    updatePassword(id, password) {
        return this._usersRepository.updatePassword(id, password);
    }
    changeAudienceSize(userId, audience) {
        return this._usersRepository.changeAudienceSize(userId, audience);
    }
    changeMarketplaceActive(userId, active) {
        return this._usersRepository.changeMarketplaceActive(userId, active);
    }
    getMarketplacePeople(orgId, userId, body) {
        return this._usersRepository.getMarketplacePeople(orgId, userId, body);
    }
    getPersonal(userId) {
        return this._usersRepository.getPersonal(userId);
    }
    changePersonal(userId, body) {
        return this._usersRepository.changePersonal(userId, body);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [users_repository_1.UsersRepository,
        organization_repository_1.OrganizationRepository])
], UsersService);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRepository = void 0;
const tslib_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(5);
const client_1 = __webpack_require__(10);
const auth_service_1 = __webpack_require__(12);
const tags_list_1 = __webpack_require__(35);
let UsersRepository = class UsersRepository {
    constructor(_user) {
        this._user = _user;
    }
    getImpersonateUser(name) {
        return this._user.model.user.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: name,
                        },
                    },
                    {
                        email: {
                            contains: name,
                        },
                    },
                    {
                        id: {
                            contains: name,
                        },
                    },
                ],
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
            take: 10,
        });
    }
    getUserById(id) {
        return this._user.model.user.findFirst({
            where: {
                id,
            },
        });
    }
    getUserByEmail(email) {
        return this._user.model.user.findFirst({
            where: {
                email,
                providerName: client_1.Provider.LOCAL,
            },
            include: {
                picture: {
                    select: {
                        id: true,
                        path: true,
                    },
                },
            },
        });
    }
    activateUser(id) {
        return this._user.model.user.update({
            where: {
                id,
            },
            data: {
                activated: true,
            },
        });
    }
    getUserByProvider(providerId, provider) {
        return this._user.model.user.findFirst({
            where: {
                providerId,
                providerName: provider,
            },
        });
    }
    updatePassword(id, password) {
        return this._user.model.user.update({
            where: {
                id,
                providerName: client_1.Provider.LOCAL,
            },
            data: {
                password: auth_service_1.AuthService.hashPassword(password),
            },
        });
    }
    changeAudienceSize(userId, audience) {
        return this._user.model.user.update({
            where: {
                id: userId,
            },
            data: {
                audience,
            },
        });
    }
    changeMarketplaceActive(userId, active) {
        return this._user.model.user.update({
            where: {
                id: userId,
            },
            data: {
                marketplace: active,
            },
        });
    }
    async getPersonal(userId) {
        const user = await this._user.model.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                name: true,
                bio: true,
                picture: {
                    select: {
                        id: true,
                        path: true,
                    },
                },
            },
        });
        return user;
    }
    async changePersonal(userId, body) {
        await this._user.model.user.update({
            where: {
                id: userId,
            },
            data: {
                name: body.fullname,
                bio: body.bio,
                picture: body.picture
                    ? {
                        connect: {
                            id: body.picture.id,
                        },
                    }
                    : {
                        disconnect: true,
                    },
            },
        });
    }
    async getMarketplacePeople(orgId, userId, items) {
        const info = {
            id: {
                not: userId,
            },
            account: {
                not: null,
            },
            connectedAccount: true,
            marketplace: true,
            items: {
                ...(items.items.length
                    ? {
                        some: {
                            OR: items.items.map((key) => ({ key })),
                        },
                    }
                    : {
                        some: {
                            OR: tags_list_1.allTagsOptions.map((p) => ({ key: p.key })),
                        },
                    }),
            },
        };
        const list = await this._user.model.user.findMany({
            where: {
                ...info,
            },
            select: {
                id: true,
                name: true,
                bio: true,
                audience: true,
                picture: {
                    select: {
                        id: true,
                        path: true,
                    },
                },
                organizations: {
                    select: {
                        organization: {
                            select: {
                                Integration: {
                                    where: {
                                        disabled: false,
                                        deletedAt: null,
                                    },
                                    select: {
                                        providerIdentifier: true,
                                    },
                                },
                            },
                        },
                    },
                },
                items: {
                    select: {
                        key: true,
                    },
                },
            },
            skip: (items.page - 1) * 8,
            take: 8,
        });
        const count = await this._user.model.user.count({
            where: {
                ...info,
            },
        });
        return {
            list,
            count,
        };
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaRepository])
], UsersRepository);


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.allTagsOptions = exports.tagsList = void 0;
exports.tagsList = process.env.isGeneral === 'true'
    ? [
        {
            key: 'services',
            name: 'Niches',
            options: [
                { key: 'real-estate', value: 'Real Estate' },
                { key: 'fashion', value: 'Fashion' },
                { key: 'health-and-fitness', value: 'Health and Fitness' },
                { key: 'beauty', value: 'Beauty' },
                { key: 'travel', value: 'Travel' },
                { key: 'food', value: 'Food' },
                { key: 'tech', value: 'Tech' },
                { key: 'gaming', value: 'Gaming' },
                { key: 'parenting', value: 'Parenting' },
                { key: 'education', value: 'Education' },
                { key: 'business', value: 'Business' },
                { key: 'finance', value: 'Finance' },
                { key: 'diy', value: 'DIY' },
                { key: 'pets', value: 'Pets' },
                { key: 'lifestyle', value: 'Lifestyle' },
                { key: 'sports', value: 'Sports' },
                { key: 'entertainment', value: 'Entertainment' },
                { key: 'art', value: 'Art' },
                { key: 'photography', value: 'Photography' },
                { key: 'sustainability', value: 'Sustainability' },
            ],
        },
    ]
    : [
        {
            key: 'services',
            name: 'Services',
            options: [
                {
                    key: 'content-writer',
                    value: 'Content Writer',
                },
                {
                    key: 'influencers',
                    value: 'Influencers',
                },
            ],
        },
        {
            key: 'niches',
            name: 'Niches',
            options: [
                {
                    key: 'kubernetes',
                    value: 'Kubernetes',
                },
                {
                    key: 'fullstack',
                    value: 'Fullstack',
                },
                {
                    key: 'security',
                    value: 'Security',
                },
                {
                    key: 'infrastructure',
                    value: 'Infrastructure',
                },
                {
                    key: 'productivity',
                    value: 'Productivity',
                },
                {
                    key: 'web3',
                    value: 'Web3',
                },
                {
                    key: 'cloud-native',
                    value: 'Cloud Native',
                },
                {
                    key: 'ml',
                    value: 'ML',
                },
            ],
        },
        {
            key: 'technologies',
            name: 'Technologies',
            options: [
                {
                    key: 'html',
                    value: 'HTML',
                },
                {
                    key: 'css',
                    value: 'CSS',
                },
                {
                    key: 'javascript',
                    value: 'JavaScript',
                },
                {
                    key: 'typescript',
                    value: 'TypeScript',
                },
                {
                    key: 'rust',
                    value: 'Rust',
                },
                {
                    key: 'go',
                    value: 'Go',
                },
                {
                    key: 'python',
                    value: 'Python',
                },
                {
                    key: 'java',
                    value: 'Java',
                },
                {
                    key: 'php',
                    value: 'PHP',
                },
                {
                    key: 'ruby',
                    value: 'Ruby',
                },
                {
                    key: 'c',
                    value: 'C/C++',
                },
            ],
        },
    ];
exports.allTagsOptions = exports.tagsList.reduce((acc, tag) => {
    return [...acc, ...tag.options];
}, []);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StarsService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const stars_repository_1 = __webpack_require__(37);
const lodash_1 = __webpack_require__(38);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const notification_service_1 = __webpack_require__(18);
const simple_statistics_1 = __webpack_require__(39);
const client_1 = __webpack_require__(26);
var Inform;
(function (Inform) {
    Inform[Inform["Removed"] = 0] = "Removed";
    Inform[Inform["New"] = 1] = "New";
    Inform[Inform["Changed"] = 2] = "Changed";
})(Inform || (Inform = {}));
let StarsService = class StarsService {
    constructor(_starsRepository, _notificationsService, _workerServiceProducer) {
        this._starsRepository = _starsRepository;
        this._notificationsService = _notificationsService;
        this._workerServiceProducer = _workerServiceProducer;
    }
    getGitHubRepositoriesByOrgId(org) {
        return this._starsRepository.getGitHubRepositoriesByOrgId(org);
    }
    getAllGitHubRepositories() {
        return this._starsRepository.getAllGitHubRepositories();
    }
    getStarsByLogin(login) {
        return this._starsRepository.getStarsByLogin(login);
    }
    getLastStarsByLogin(login) {
        return this._starsRepository.getLastStarsByLogin(login);
    }
    createStars(login, totalNewsStars, totalStars, totalNewForks, totalForks, date) {
        return this._starsRepository.createStars(login, totalNewsStars, totalStars, totalNewForks, totalForks, date);
    }
    async sync(login, token) {
        const loadAllStars = await this.syncProcess(login, token);
        const loadAllForks = await this.syncForksProcess(login, token);
        const allDates = [
            ...new Set([...Object.keys(loadAllStars), ...Object.keys(loadAllForks)]),
        ];
        const sortedArray = allDates.sort((a, b) => (0, dayjs_1.default)(a).unix() - (0, dayjs_1.default)(b).unix());
        let addPreviousStars = 0;
        let addPreviousForks = 0;
        for (const date of sortedArray) {
            const dateObject = (0, dayjs_1.default)(date).toDate();
            addPreviousStars += loadAllStars[date] || 0;
            addPreviousForks += loadAllForks[date] || 0;
            await this._starsRepository.createStars(login, loadAllStars[date] || 0, addPreviousStars, loadAllForks[date] || 0, addPreviousForks, dateObject);
        }
    }
    async findValidToken(login) {
        return this._starsRepository.findValidToken(login);
    }
    async fetchWillFallback(url, userToken) {
        if (userToken) {
            const response = await fetch(url, {
                headers: {
                    Accept: 'application/vnd.github.v3.star+json',
                    Authorization: `Bearer ${userToken}`,
                },
            });
            if (response.status === 200) {
                return response;
            }
        }
        const response2 = await fetch(url, {
            headers: {
                Accept: 'application/vnd.github.v3.star+json',
                ...(process.env.GITHUB_AUTH
                    ? { Authorization: `token ${process.env.GITHUB_AUTH}` }
                    : {}),
            },
        });
        const totalRemaining = +(response2.headers.get('x-ratelimit-remaining') ||
            response2.headers.get('X-RateLimit-Remaining') ||
            0);
        const resetTime = +(response2.headers.get('x-ratelimit-reset') ||
            response2.headers.get('X-RateLimit-Reset') ||
            0);
        if (totalRemaining < 10) {
            console.log('waiting for the rate limit');
            const delay = resetTime * 1000 - Date.now() + 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
            return this.fetchWillFallback(url, userToken);
        }
        return response2;
    }
    async syncForksProcess(login, userToken, page = 1) {
        console.log('processing forks');
        const starsRequest = await this.fetchWillFallback(`https://api.github.com/repos/${login}/forks?page=${page}&per_page=100`, userToken);
        const data = await starsRequest.json();
        const mapDataToDate = (0, lodash_1.groupBy)(data, (p) => (0, dayjs_1.default)(p.created_at).format('YYYY-MM-DD'));
        // take all the forks from the page
        const aggForks = Object.values(mapDataToDate).reduce((acc, value) => ({
            ...acc,
            [(0, dayjs_1.default)(value[0].created_at).format('YYYY-MM-DD')]: value.length,
        }), {});
        // if we have 100 stars, we need to fetch the next page and merge the results (recursively)
        const nextOne = data.length === 100
            ? await this.syncForksProcess(login, userToken, page + 1)
            : {};
        // merge the results
        const allKeys = [
            ...new Set([...Object.keys(aggForks), ...Object.keys(nextOne)]),
        ];
        return {
            ...allKeys.reduce((acc, key) => ({
                ...acc,
                [key]: (aggForks[key] || 0) + (nextOne[key] || 0),
            }), {}),
        };
    }
    async syncProcess(login, userToken, page = 1) {
        console.log('processing stars');
        const starsRequest = await this.fetchWillFallback(`https://api.github.com/repos/${login}/stargazers?page=${page}&per_page=100`, userToken);
        const data = await starsRequest.json();
        const mapDataToDate = (0, lodash_1.groupBy)(data, (p) => (0, dayjs_1.default)(p.starred_at).format('YYYY-MM-DD'));
        // take all the stars from the page
        const aggStars = Object.values(mapDataToDate).reduce((acc, value) => ({
            ...acc,
            [(0, dayjs_1.default)(value[0].starred_at).format('YYYY-MM-DD')]: value.length,
        }), {});
        // if we have 100 stars, we need to fetch the next page and merge the results (recursively)
        const nextOne = data.length === 100
            ? await this.syncProcess(login, userToken, page + 1)
            : {};
        // merge the results
        const allKeys = [
            ...new Set([...Object.keys(aggStars), ...Object.keys(nextOne)]),
        ];
        return {
            ...allKeys.reduce((acc, key) => ({
                ...acc,
                [key]: (aggStars[key] || 0) + (nextOne[key] || 0),
            }), {}),
        };
    }
    async updateTrending(language, hash, arr) {
        const currentTrending = await this._starsRepository.getTrendingByLanguage(language);
        if (currentTrending?.hash === hash) {
            return;
        }
        if (currentTrending) {
            const list = JSON.parse(currentTrending.trendingList);
            const removedFromTrending = list.filter((p) => !arr.find((a) => a.name === p.name));
            const changedPosition = arr.filter((p) => {
                const current = list.find((a) => a.name === p.name);
                return current && current.position !== p.position;
            });
            if (removedFromTrending.length) {
                // let people know they are not trending anymore
                await this.inform(Inform.Removed, removedFromTrending, language);
            }
            if (changedPosition.length) {
                // let people know they changed position
                await this.inform(Inform.Changed, changedPosition, language);
            }
        }
        const informNewPeople = arr.filter((p) => !currentTrending?.trendingList ||
            currentTrending?.trendingList?.indexOf(p.name) === -1);
        // let people know they are trending
        await this.inform(Inform.New, informNewPeople, language);
        await this.replaceOrAddTrending(language, hash, arr);
    }
    async inform(type, removedFromTrending, language) {
        const names = await this._starsRepository.getGitHubsByNames(removedFromTrending.map((p) => p.name));
        const mapDbNamesToList = names.map((n) => removedFromTrending.find((p) => p.name === n.login));
        for (const person of mapDbNamesToList) {
            const getOrganizationsByGitHubLogin = await this._starsRepository.getOrganizationsByGitHubLogin(person.name);
            for (const org of getOrganizationsByGitHubLogin) {
                switch (type) {
                    case Inform.Removed:
                        return this._notificationsService.inAppNotification(org.organizationId, `${person.name} is not trending on GitHub anymore`, `${person.name} is not trending anymore in ${language}`, true);
                    case Inform.New:
                        return this._notificationsService.inAppNotification(org.organizationId, `${person.name} is trending on GitHub`, `${person.name} is trending in ${language || 'On the main feed'} position #${person.position}`, true);
                    case Inform.Changed:
                        return this._notificationsService.inAppNotification(org.organizationId, `${person.name} changed trending position on GitHub`, `${person.name} changed position in ${language || 'on the main feed to position'} position #${person.position}`, true);
                }
            }
        }
    }
    async replaceOrAddTrending(language, hash, arr) {
        return this._starsRepository.replaceOrAddTrending(language, hash, arr);
    }
    async getStars(org) {
        const getGitHubs = await this.getGitHubRepositoriesByOrgId(org);
        const list = [];
        for (const gitHub of getGitHubs) {
            if (!gitHub.login) {
                continue;
            }
            const getAllByLogin = await this.getStarsByLogin(gitHub.login);
            const stars = getAllByLogin.filter((f) => f.stars);
            const graphSize = stars.length < 10 ? stars.length : stars.length / 10;
            const forks = getAllByLogin.filter((f) => f.forks);
            const graphForkSize = forks.length < 10 ? forks.length : forks.length / 10;
            list.push({
                login: gitHub.login,
                stars: (0, lodash_1.chunk)(stars, graphSize).reduce((acc, chunkedStars) => {
                    return [
                        ...acc,
                        {
                            totalStars: chunkedStars[chunkedStars.length - 1].totalStars,
                            date: chunkedStars[chunkedStars.length - 1].date,
                        },
                    ];
                }, []),
                forks: (0, lodash_1.chunk)(forks, graphForkSize).reduce((acc, chunkedForks) => {
                    return [
                        ...acc,
                        {
                            totalForks: chunkedForks[chunkedForks.length - 1].totalForks,
                            date: chunkedForks[chunkedForks.length - 1].date,
                        },
                    ];
                }, []),
            });
        }
        return list;
    }
    async getStarsFilter(orgId, starsFilter) {
        const getGitHubs = await this.getGitHubRepositoriesByOrgId(orgId);
        if (getGitHubs.filter((f) => f.login).length === 0) {
            return [];
        }
        return this._starsRepository.getStarsFilter(getGitHubs.map((p) => p.login), starsFilter);
    }
    async addGitHub(orgId, code) {
        const { access_token } = await (await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
                redirect_uri: `${process.env.FRONTEND_URL}/settings`,
            }),
        })).json();
        return this._starsRepository.addGitHub(orgId, access_token);
    }
    async getOrganizations(orgId, id) {
        const getGitHub = await this._starsRepository.getGitHubById(orgId, id);
        return (await fetch(`https://api.github.com/user/orgs`, {
            headers: {
                Authorization: `token ${getGitHub?.token}`,
            },
        })).json();
    }
    async getRepositoriesOfOrganization(orgId, id, github) {
        const getGitHub = await this._starsRepository.getGitHubById(orgId, id);
        return (await fetch(`https://api.github.com/orgs/${github}/repos`, {
            headers: {
                Authorization: `token ${getGitHub?.token}`,
            },
        })).json();
    }
    async updateGitHubLogin(orgId, id, login) {
        const check = await fetch(`https://github.com/${login}`);
        if (check.status === 404) {
            throw new common_1.HttpException('GitHub repository not found!', 404);
        }
        this._workerServiceProducer
            .emit('sync_all_stars', { payload: { login } })
            .subscribe();
        return this._starsRepository.updateGitHubLogin(orgId, id, login);
    }
    async deleteRepository(orgId, id) {
        return this._starsRepository.deleteRepository(orgId, id);
    }
    async predictTrending(max = 500) {
        const firstDate = (0, dayjs_1.default)().subtract(1, 'day');
        return [
            firstDate.format('YYYY-MM-DDT12:00:00'),
            ...[...new Array(max)].map((p, index) => {
                return firstDate.add(index, 'day').format('YYYY-MM-DDT12:00:00');
            })
        ];
    }
    async predictTrendingLoop(trendings, current = 0, max = 500) {
        const dates = trendings.map((result) => (0, dayjs_1.default)(result.date).toDate());
        const intervals = dates
            .slice(1)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            .map((date, i) => (date - dates[i]) / (1000 * 60 * 60 * 24));
        const nextInterval = intervals.length === 0 ? null : (0, simple_statistics_1.mean)(intervals);
        const lastTrendingDate = dates[dates.length - 1];
        const nextTrendingDate = !nextInterval
            ? false
            : (0, dayjs_1.default)(new Date(lastTrendingDate.getTime() + nextInterval * 24 * 60 * 60 * 1000)).toDate();
        if (!nextTrendingDate) {
            return [];
        }
        return [
            nextTrendingDate,
            ...(current < max
                ? await this.predictTrendingLoop([...trendings, { date: nextTrendingDate }], current + 1, max)
                : []),
        ];
    }
};
exports.StarsService = StarsService;
exports.StarsService = StarsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [stars_repository_1.StarsRepository,
        notification_service_1.NotificationService,
        client_1.BullMqClient])
], StarsService);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StarsRepository = void 0;
const tslib_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(5);
let StarsRepository = class StarsRepository {
    constructor(_github, _stars, _trending) {
        this._github = _github;
        this._stars = _stars;
        this._trending = _trending;
    }
    getGitHubRepositoriesByOrgId(org) {
        return this._github.model.gitHub.findMany({
            where: {
                organizationId: org,
            },
        });
    }
    replaceOrAddTrending(language, hashedNames, arr) {
        return this._trending.model.trending.upsert({
            create: {
                language,
                hash: hashedNames,
                trendingList: JSON.stringify(arr),
                date: new Date(),
            },
            update: {
                language,
                hash: hashedNames,
                trendingList: JSON.stringify(arr),
                date: new Date(),
            },
            where: {
                language,
            },
        });
    }
    getAllGitHubRepositories() {
        return this._github.model.gitHub.findMany({
            distinct: ['login'],
        });
    }
    async getLastStarsByLogin(login) {
        return (await this._stars.model.star.findMany({
            where: {
                login,
            },
            orderBy: {
                date: 'desc',
            },
            take: 1,
        }))?.[0];
    }
    async getStarsByLogin(login) {
        return this._stars.model.star.findMany({
            where: {
                login,
            },
            orderBy: {
                date: 'asc',
            },
        });
    }
    async getGitHubsByNames(names) {
        return this._github.model.gitHub.findMany({
            where: {
                login: {
                    in: names,
                },
            },
        });
    }
    findValidToken(login) {
        return this._github.model.gitHub.findFirst({
            where: {
                login,
            },
        });
    }
    createStars(login, totalNewsStars, totalStars, totalNewForks, totalForks, date) {
        return this._stars.model.star.upsert({
            create: {
                login,
                stars: totalNewsStars,
                forks: totalNewForks,
                totalForks,
                totalStars,
                date,
            },
            update: {
                stars: totalNewsStars,
                totalStars,
                forks: totalNewForks,
                totalForks,
            },
            where: {
                login_date: {
                    date,
                    login,
                },
            },
        });
    }
    getTrendingByLanguage(language) {
        return this._trending.model.trending.findUnique({
            where: {
                language,
            },
        });
    }
    getStarsFilter(githubs, starsFilter) {
        return this._stars.model.star.findMany({
            orderBy: {
                [starsFilter.key || 'date']: starsFilter.state || 'desc',
            },
            where: {
                login: {
                    in: githubs.filter((f) => f),
                },
            },
            take: 20,
            skip: (starsFilter.page - 1) * 10,
        });
    }
    addGitHub(orgId, accessToken) {
        return this._github.model.gitHub.create({
            data: {
                token: accessToken,
                organizationId: orgId,
                jobId: '',
            },
        });
    }
    getGitHubById(orgId, id) {
        return this._github.model.gitHub.findUnique({
            where: {
                organizationId: orgId,
                id,
            },
        });
    }
    updateGitHubLogin(orgId, id, login) {
        return this._github.model.gitHub.update({
            where: {
                organizationId: orgId,
                id,
            },
            data: {
                login,
            },
        });
    }
    deleteRepository(orgId, id) {
        return this._github.model.gitHub.delete({
            where: {
                organizationId: orgId,
                id,
            },
        });
    }
    getOrganizationsByGitHubLogin(login) {
        return this._github.model.gitHub.findMany({
            select: {
                organizationId: true,
            },
            where: {
                login,
            },
            distinct: ['organizationId'],
        });
    }
};
exports.StarsRepository = StarsRepository;
exports.StarsRepository = StarsRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository])
], StarsRepository);


/***/ }),
/* 38 */
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),
/* 39 */
/***/ ((module) => {

module.exports = require("simple-statistics");

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const pricing_1 = __webpack_require__(41);
const subscription_repository_1 = __webpack_require__(42);
const integration_service_1 = __webpack_require__(43);
const organization_service_1 = __webpack_require__(17);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const make_is_1 = __webpack_require__(16);
let SubscriptionService = class SubscriptionService {
    constructor(_subscriptionRepository, _integrationService, _organizationService) {
        this._subscriptionRepository = _subscriptionRepository;
        this._integrationService = _integrationService;
        this._organizationService = _organizationService;
    }
    getSubscriptionByOrganizationId(organizationId) {
        return this._subscriptionRepository.getSubscriptionByOrganizationId(organizationId);
    }
    useCredit(organization) {
        return this._subscriptionRepository.useCredit(organization);
    }
    getCode(code) {
        return this._subscriptionRepository.getCode(code);
    }
    updateAccount(userId, account) {
        return this._subscriptionRepository.updateAccount(userId, account);
    }
    getUserAccount(userId) {
        return this._subscriptionRepository.getUserAccount(userId);
    }
    async deleteSubscription(customerId) {
        await this.modifySubscription(customerId, pricing_1.pricing.FREE.channel || 0, 'FREE');
        return this._subscriptionRepository.deleteSubscriptionByCustomerId(customerId);
    }
    updateCustomerId(organizationId, customerId) {
        return this._subscriptionRepository.updateCustomerId(organizationId, customerId);
    }
    async checkSubscription(organizationId, subscriptionId) {
        return await this._subscriptionRepository.checkSubscription(organizationId, subscriptionId);
    }
    updateConnectedStatus(account, accountCharges) {
        return this._subscriptionRepository.updateConnectedStatus(account, accountCharges);
    }
    async modifySubscription(customerId, totalChannels, billing) {
        if (!customerId) {
            return false;
        }
        const getOrgByCustomerId = await this._subscriptionRepository.getOrganizationByCustomerId(customerId);
        const getCurrentSubscription = (await this._subscriptionRepository.getSubscriptionByCustomerId(customerId));
        if (getCurrentSubscription && getCurrentSubscription?.isLifetime) {
            return false;
        }
        const from = pricing_1.pricing[getCurrentSubscription?.subscriptionTier || 'FREE'];
        const to = pricing_1.pricing[billing];
        const currentTotalChannels = (await this._integrationService.getIntegrationsList(getOrgByCustomerId?.id)).filter((f) => !f.disabled);
        if (currentTotalChannels.length > totalChannels) {
            await this._integrationService.disableIntegrations(getOrgByCustomerId?.id, currentTotalChannels.length - totalChannels);
        }
        if (from.team_members && !to.team_members) {
            await this._organizationService.disableOrEnableNonSuperAdminUsers(getOrgByCustomerId?.id, true);
        }
        if (!from.team_members && to.team_members) {
            await this._organizationService.disableOrEnableNonSuperAdminUsers(getOrgByCustomerId?.id, false);
        }
        return true;
        // if (to.faq < from.faq) {
        //   await this._faqRepository.deleteFAQs(getCurrentSubscription?.organizationId, from.faq - to.faq);
        // }
        // if (to.categories < from.categories) {
        //   await this._categoriesRepository.deleteCategories(getCurrentSubscription?.organizationId, from.categories - to.categories);
        // }
        // if (to.integrations < from.integrations) {
        //   await this._integrationsRepository.deleteIntegrations(getCurrentSubscription?.organizationId, from.integrations - to.integrations);
        // }
        // if (to.user < from.user) {
        //   await this._integrationsRepository.deleteUsers(getCurrentSubscription?.organizationId, from.user - to.user);
        // }
        // if (to.domains < from.domains) {
        //   await this._settingsService.deleteDomainByOrg(getCurrentSubscription?.organizationId);
        //   await this._organizationRepository.changePowered(getCurrentSubscription?.organizationId);
        // }
    }
    async createOrUpdateSubscription(identifier, customerId, totalChannels, billing, period, cancelAt, code, org) {
        if (!code) {
            try {
                const load = await this.modifySubscription(customerId, totalChannels, billing);
                if (!load) {
                    return {};
                }
            }
            catch (e) {
                return {};
            }
        }
        return this._subscriptionRepository.createOrUpdateSubscription(identifier, customerId, totalChannels, billing, period, cancelAt, code, org ? { id: org } : undefined);
    }
    async getSubscription(organizationId) {
        return this._subscriptionRepository.getSubscription(organizationId);
    }
    async checkCredits(organization) {
        // @ts-ignore
        const type = organization?.subscription?.subscriptionTier || 'FREE';
        if (type === 'FREE') {
            return { credits: 0 };
        }
        // @ts-ignore
        let date = (0, dayjs_1.default)(organization.subscription.createdAt);
        while (date.isBefore((0, dayjs_1.default)())) {
            date = date.add(1, 'month');
        }
        const checkFromMonth = date.subtract(1, 'month');
        const imageGenerationCount = pricing_1.pricing[type].image_generation_count;
        const totalUse = await this._subscriptionRepository.getCreditsFrom(organization.id, checkFromMonth);
        return {
            credits: imageGenerationCount - totalUse,
        };
    }
    async lifeTime(orgId, identifier, subscription) {
        return this.createOrUpdateSubscription(identifier, identifier, pricing_1.pricing[subscription].channel, subscription, 'YEARLY', null, identifier, orgId);
    }
    async addSubscription(orgId, userId, subscription) {
        await this._subscriptionRepository.setCustomerId(orgId, orgId);
        return this.createOrUpdateSubscription((0, make_is_1.makeId)(5), userId, pricing_1.pricing[subscription].channel, subscription, 'MONTHLY', null, undefined, orgId);
    }
};
exports.SubscriptionService = SubscriptionService;
exports.SubscriptionService = SubscriptionService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [subscription_repository_1.SubscriptionRepository,
        integration_service_1.IntegrationService,
        organization_service_1.OrganizationService])
], SubscriptionService);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pricing = void 0;
exports.pricing = {
    FREE: {
        current: 'FREE',
        month_price: 0,
        year_price: 0,
        channel: 0,
        image_generation_count: 0,
        posts_per_month: 0,
        team_members: false,
        community_features: false,
        featured_by_gitroom: false,
        ai: false,
        import_from_channels: false,
        image_generator: false,
        public_api: false,
        webhooks: 0,
    },
    STANDARD: {
        current: 'STANDARD',
        month_price: 29,
        year_price: 278,
        channel: 5,
        posts_per_month: 400,
        image_generation_count: 20,
        team_members: false,
        ai: true,
        community_features: false,
        featured_by_gitroom: false,
        import_from_channels: true,
        image_generator: false,
        public_api: true,
        webhooks: 2,
    },
    TEAM: {
        current: 'TEAM',
        month_price: 39,
        year_price: 374,
        channel: 10,
        posts_per_month: 1000000,
        image_generation_count: 100,
        community_features: true,
        team_members: true,
        featured_by_gitroom: true,
        ai: true,
        import_from_channels: true,
        image_generator: true,
        public_api: true,
        webhooks: 10,
    },
    PRO: {
        current: 'PRO',
        month_price: 49,
        year_price: 470,
        channel: 30,
        posts_per_month: 1000000,
        image_generation_count: 300,
        community_features: true,
        team_members: true,
        featured_by_gitroom: true,
        ai: true,
        import_from_channels: true,
        image_generator: true,
        public_api: true,
        webhooks: 30,
    },
    ULTIMATE: {
        current: 'ULTIMATE',
        month_price: 99,
        year_price: 950,
        channel: 100,
        posts_per_month: 1000000,
        image_generation_count: 500,
        community_features: true,
        team_members: true,
        featured_by_gitroom: true,
        ai: true,
        import_from_channels: true,
        image_generator: true,
        public_api: true,
        webhooks: 10000,
    },
};


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionRepository = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const prisma_service_1 = __webpack_require__(9);
let SubscriptionRepository = class SubscriptionRepository {
    constructor(_subscription, _organization, _user, _credits, _usedCodes) {
        this._subscription = _subscription;
        this._organization = _organization;
        this._user = _user;
        this._credits = _credits;
        this._usedCodes = _usedCodes;
    }
    getUserAccount(userId) {
        return this._user.model.user.findFirst({
            where: {
                id: userId,
            },
            select: {
                account: true,
                connectedAccount: true,
            },
        });
    }
    getCode(code) {
        return this._usedCodes.model.usedCodes.findFirst({
            where: {
                code,
            },
        });
    }
    updateAccount(userId, account) {
        return this._user.model.user.update({
            where: {
                id: userId,
            },
            data: {
                account,
            },
        });
    }
    getSubscriptionByOrganizationId(organizationId) {
        return this._subscription.model.subscription.findFirst({
            where: {
                organizationId,
                deletedAt: null,
            },
        });
    }
    updateConnectedStatus(account, accountCharges) {
        return this._user.model.user.updateMany({
            where: {
                account,
            },
            data: {
                connectedAccount: accountCharges,
            },
        });
    }
    getCustomerIdByOrgId(organizationId) {
        return this._organization.model.organization.findFirst({
            where: {
                id: organizationId,
            },
            select: {
                paymentId: true,
            },
        });
    }
    checkSubscription(organizationId, subscriptionId) {
        return this._subscription.model.subscription.findFirst({
            where: {
                organizationId,
                identifier: subscriptionId,
                deletedAt: null,
            },
        });
    }
    deleteSubscriptionByCustomerId(customerId) {
        return this._subscription.model.subscription.deleteMany({
            where: {
                organization: {
                    paymentId: customerId,
                },
            },
        });
    }
    updateCustomerId(organizationId, customerId) {
        return this._organization.model.organization.update({
            where: {
                id: organizationId,
            },
            data: {
                paymentId: customerId,
            },
        });
    }
    async getSubscriptionByCustomerId(customerId) {
        return this._subscription.model.subscription.findFirst({
            where: {
                organization: {
                    paymentId: customerId,
                },
            },
        });
    }
    async getOrganizationByCustomerId(customerId) {
        return this._organization.model.organization.findFirst({
            where: {
                paymentId: customerId,
            },
        });
    }
    async createOrUpdateSubscription(identifier, customerId, totalChannels, billing, period, cancelAt, code, org) {
        const findOrg = org || (await this.getOrganizationByCustomerId(customerId));
        await this._subscription.model.subscription.upsert({
            where: {
                organizationId: findOrg.id,
                ...(!code
                    ? {
                        organization: {
                            paymentId: customerId,
                        },
                    }
                    : {}),
            },
            update: {
                subscriptionTier: billing,
                totalChannels,
                period,
                identifier,
                isLifetime: !!code,
                cancelAt: cancelAt ? new Date(cancelAt * 1000) : null,
                deletedAt: null,
            },
            create: {
                organizationId: findOrg.id,
                subscriptionTier: billing,
                isLifetime: !!code,
                totalChannels,
                period,
                cancelAt: cancelAt ? new Date(cancelAt * 1000) : null,
                identifier,
                deletedAt: null,
            },
        });
        await this._organization.model.organization.update({
            where: {
                id: findOrg.id,
            },
            data: {
                allowTrial: false,
            },
        });
        if (code) {
            await this._usedCodes.model.usedCodes.create({
                data: {
                    code,
                    orgId: findOrg.id,
                },
            });
        }
    }
    getSubscription(organizationId) {
        return this._subscription.model.subscription.findFirst({
            where: {
                organizationId,
                deletedAt: null,
            },
        });
    }
    async getCreditsFrom(organizationId, from) {
        const load = await this._credits.model.credits.groupBy({
            by: ['organizationId'],
            where: {
                organizationId,
                createdAt: {
                    gte: from.toDate(),
                },
            },
            _sum: {
                credits: true,
            },
        });
        return load?.[0]?._sum?.credits || 0;
    }
    useCredit(org) {
        return this._credits.model.credits.create({
            data: {
                organizationId: org.id,
                credits: 1,
            },
        });
    }
    setCustomerId(orgId, customerId) {
        return this._organization.model.organization.update({
            where: {
                id: orgId,
            },
            data: {
                paymentId: customerId,
            },
        });
    }
};
exports.SubscriptionRepository = SubscriptionRepository;
exports.SubscriptionRepository = SubscriptionRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository])
], SubscriptionRepository);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const integration_repository_1 = __webpack_require__(44);
const integration_manager_1 = __webpack_require__(55);
const notification_service_1 = __webpack_require__(18);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const timer_1 = __webpack_require__(63);
const redis_service_1 = __webpack_require__(29);
const social_abstract_1 = __webpack_require__(62);
const upload_factory_1 = __webpack_require__(45);
const client_1 = __webpack_require__(26);
const lodash_1 = __webpack_require__(38);
const utc_1 = tslib_1.__importDefault(__webpack_require__(98));
dayjs_1.default.extend(utc_1.default);
let IntegrationService = class IntegrationService {
    constructor(_integrationRepository, _integrationManager, _notificationService, _workerServiceProducer) {
        this._integrationRepository = _integrationRepository;
        this._integrationManager = _integrationManager;
        this._notificationService = _notificationService;
        this._workerServiceProducer = _workerServiceProducer;
        this.storage = upload_factory_1.UploadFactory.createStorage();
    }
    async setTimes(orgId, integrationId, times) {
        return this._integrationRepository.setTimes(orgId, integrationId, times);
    }
    updateProviderSettings(org, id, additionalSettings) {
        return this._integrationRepository.updateProviderSettings(org, id, additionalSettings);
    }
    async createOrUpdateIntegration(additionalSettings, oneTimeToken, org, name, picture, type, internalId, provider, token, refreshToken = '', expiresIn, username, isBetweenSteps = false, refresh, timezone, customInstanceDetails) {
        const uploadedPicture = picture
            ? picture?.indexOf('imagedelivery.net') > -1
                ? picture
                : await this.storage.uploadSimple(picture)
            : undefined;
        return this._integrationRepository.createOrUpdateIntegration(additionalSettings, oneTimeToken, org, name, uploadedPicture, type, internalId, provider, token, refreshToken, expiresIn, username, isBetweenSteps, refresh, timezone, customInstanceDetails);
    }
    updateIntegrationGroup(org, id, group) {
        return this._integrationRepository.updateIntegrationGroup(org, id, group);
    }
    updateOnCustomerName(org, id, name) {
        return this._integrationRepository.updateOnCustomerName(org, id, name);
    }
    getIntegrationsList(org) {
        return this._integrationRepository.getIntegrationsList(org);
    }
    getIntegrationForOrder(id, order, user, org) {
        return this._integrationRepository.getIntegrationForOrder(id, order, user, org);
    }
    updateNameAndUrl(id, name, url) {
        return this._integrationRepository.updateNameAndUrl(id, name, url);
    }
    getIntegrationById(org, id) {
        return this._integrationRepository.getIntegrationById(org, id);
    }
    async refreshToken(provider, refresh) {
        try {
            const { refreshToken, accessToken, expiresIn } = await provider.refreshToken(refresh);
            if (!refreshToken || !accessToken || !expiresIn) {
                return false;
            }
            return { refreshToken, accessToken, expiresIn };
        }
        catch (e) {
            return false;
        }
    }
    async disconnectChannel(orgId, integration) {
        await this._integrationRepository.disconnectChannel(orgId, integration.id);
        await this.informAboutRefreshError(orgId, integration);
    }
    async informAboutRefreshError(orgId, integration) {
        await this._notificationService.inAppNotification(orgId, `Could not refresh your ${integration.providerIdentifier} channel`, `Could not refresh your ${integration.providerIdentifier} channel. Please go back to the system and connect it again ${process.env.FRONTEND_URL}/launches`, true);
    }
    async refreshNeeded(org, id) {
        return this._integrationRepository.refreshNeeded(org, id);
    }
    async refreshTokens() {
        const integrations = await this._integrationRepository.needsToBeRefreshed();
        for (const integration of integrations) {
            const provider = this._integrationManager.getSocialIntegration(integration.providerIdentifier);
            const data = await this.refreshToken(provider, integration.refreshToken);
            if (!data) {
                await this.informAboutRefreshError(integration.organizationId, integration);
                await this._integrationRepository.refreshNeeded(integration.organizationId, integration.id);
                return;
            }
            const { refreshToken, accessToken, expiresIn } = data;
            await this.createOrUpdateIntegration(undefined, !!provider.oneTimeToken, integration.organizationId, integration.name, undefined, 'social', integration.internalId, integration.providerIdentifier, accessToken, refreshToken, expiresIn);
        }
    }
    async disableChannel(org, id) {
        return this._integrationRepository.disableChannel(org, id);
    }
    async enableChannel(org, totalChannels, id) {
        const integrations = (await this._integrationRepository.getIntegrationsList(org)).filter((f) => !f.disabled);
        if (!!process.env.STRIPE_PUBLISHABLE_KEY && integrations.length >= totalChannels) {
            throw new Error('You have reached the maximum number of channels');
        }
        return this._integrationRepository.enableChannel(org, id);
    }
    async getPostsForChannel(org, id) {
        return this._integrationRepository.getPostsForChannel(org, id);
    }
    async deleteChannel(org, id) {
        return this._integrationRepository.deleteChannel(org, id);
    }
    async disableIntegrations(org, totalChannels) {
        return this._integrationRepository.disableIntegrations(org, totalChannels);
    }
    async checkForDeletedOnceAndUpdate(org, page) {
        return this._integrationRepository.checkForDeletedOnceAndUpdate(org, page);
    }
    async saveInstagram(org, id, data) {
        const getIntegration = await this._integrationRepository.getIntegrationById(org, id);
        if (getIntegration && !getIntegration.inBetweenSteps) {
            throw new common_1.HttpException('Invalid request', common_1.HttpStatus.BAD_REQUEST);
        }
        const instagram = this._integrationManager.getSocialIntegration('instagram');
        const getIntegrationInformation = await instagram.fetchPageInformation(getIntegration?.token, data);
        await this.checkForDeletedOnceAndUpdate(org, getIntegrationInformation.id);
        await this._integrationRepository.updateIntegration(id, {
            picture: getIntegrationInformation.picture,
            internalId: getIntegrationInformation.id,
            name: getIntegrationInformation.name,
            inBetweenSteps: false,
            token: getIntegrationInformation.access_token,
            profile: getIntegrationInformation.username,
        });
        return { success: true };
    }
    async saveLinkedin(org, id, page) {
        const getIntegration = await this._integrationRepository.getIntegrationById(org, id);
        if (getIntegration && !getIntegration.inBetweenSteps) {
            throw new common_1.HttpException('Invalid request', common_1.HttpStatus.BAD_REQUEST);
        }
        const linkedin = this._integrationManager.getSocialIntegration('linkedin-page');
        const getIntegrationInformation = await linkedin.fetchPageInformation(getIntegration?.token, page);
        await this.checkForDeletedOnceAndUpdate(org, String(getIntegrationInformation.id));
        await this._integrationRepository.updateIntegration(String(id), {
            picture: getIntegrationInformation.picture,
            internalId: String(getIntegrationInformation.id),
            name: getIntegrationInformation.name,
            inBetweenSteps: false,
            token: getIntegrationInformation.access_token,
            profile: getIntegrationInformation.username,
        });
        return { success: true };
    }
    async saveFacebook(org, id, page) {
        const getIntegration = await this._integrationRepository.getIntegrationById(org, id);
        if (getIntegration && !getIntegration.inBetweenSteps) {
            throw new common_1.HttpException('Invalid request', common_1.HttpStatus.BAD_REQUEST);
        }
        const facebook = this._integrationManager.getSocialIntegration('facebook');
        const getIntegrationInformation = await facebook.fetchPageInformation(getIntegration?.token, page);
        await this.checkForDeletedOnceAndUpdate(org, getIntegrationInformation.id);
        await this._integrationRepository.updateIntegration(id, {
            picture: getIntegrationInformation.picture,
            internalId: getIntegrationInformation.id,
            name: getIntegrationInformation.name,
            inBetweenSteps: false,
            token: getIntegrationInformation.access_token,
            profile: getIntegrationInformation.username,
        });
        return { success: true };
    }
    async checkAnalytics(org, integration, date, forceRefresh = false) {
        const getIntegration = await this.getIntegrationById(org.id, integration);
        if (!getIntegration) {
            throw new Error('Invalid integration');
        }
        if (getIntegration.type !== 'social') {
            return [];
        }
        const integrationProvider = this._integrationManager.getSocialIntegration(getIntegration.providerIdentifier);
        if ((0, dayjs_1.default)(getIntegration?.tokenExpiration).isBefore((0, dayjs_1.default)()) ||
            forceRefresh) {
            const { accessToken, expiresIn, refreshToken, additionalSettings } = await new Promise((res) => {
                return integrationProvider
                    .refreshToken(getIntegration.refreshToken)
                    .then((r) => res(r))
                    .catch(() => {
                    res({
                        error: '',
                        accessToken: '',
                        id: '',
                        name: '',
                        picture: '',
                        username: '',
                        additionalSettings: undefined,
                    });
                });
            });
            if (accessToken) {
                await this.createOrUpdateIntegration(additionalSettings, !!integrationProvider.oneTimeToken, getIntegration.organizationId, getIntegration.name, getIntegration.picture, 'social', getIntegration.internalId, getIntegration.providerIdentifier, accessToken, refreshToken, expiresIn);
                getIntegration.token = accessToken;
                if (integrationProvider.refreshWait) {
                    await (0, timer_1.timer)(10000);
                }
            }
            else {
                await this.disconnectChannel(org.id, getIntegration);
                return [];
            }
        }
        const getIntegrationData = await redis_service_1.ioRedis.get(`integration:${org.id}:${integration}:${date}`);
        if (getIntegrationData) {
            return JSON.parse(getIntegrationData);
        }
        if (integrationProvider.analytics) {
            try {
                const loadAnalytics = await integrationProvider.analytics(getIntegration.internalId, getIntegration.token, +date);
                await redis_service_1.ioRedis.set(`integration:${org.id}:${integration}:${date}`, JSON.stringify(loadAnalytics), 'EX', !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                    ? 1
                    : 3600);
                return loadAnalytics;
            }
            catch (e) {
                if (e instanceof social_abstract_1.RefreshToken) {
                    return this.checkAnalytics(org, integration, date, true);
                }
            }
        }
        return [];
    }
    customers(orgId) {
        return this._integrationRepository.customers(orgId);
    }
    getPlugsByIntegrationId(org, integrationId) {
        return this._integrationRepository.getPlugsByIntegrationId(org, integrationId);
    }
    async processInternalPlug(data) {
        const originalIntegration = await this._integrationRepository.getIntegrationById(data.orgId, data.originalIntegration);
        const getIntegration = await this._integrationRepository.getIntegrationById(data.orgId, data.integration);
        if (!getIntegration || !originalIntegration) {
            return;
        }
        const getAllInternalPlugs = this._integrationManager
            .getInternalPlugs(getIntegration.providerIdentifier)
            .internalPlugs.find((p) => p.identifier === data.plugName);
        if (!getAllInternalPlugs) {
            return;
        }
        const getSocialIntegration = this._integrationManager.getSocialIntegration(getIntegration.providerIdentifier);
        try {
            // @ts-ignore
            await getSocialIntegration?.[getAllInternalPlugs.methodName]?.(getIntegration, originalIntegration, data.post, data.information);
        }
        catch (err) {
            return;
        }
    }
    async processPlugs(data) {
        const getPlugById = await this._integrationRepository.getPlug(data.plugId);
        if (!getPlugById) {
            return;
        }
        const integration = this._integrationManager.getSocialIntegration(getPlugById.integration.providerIdentifier);
        const findPlug = this._integrationManager
            .getAllPlugs()
            .find((p) => p.identifier === getPlugById.integration.providerIdentifier);
        // @ts-ignore
        const process = await integration[getPlugById.plugFunction](getPlugById.integration, data.postId, JSON.parse(getPlugById.data).reduce((all, current) => {
            all[current.name] = current.value;
            return all;
        }, {}));
        if (process) {
            return;
        }
        if (data.totalRuns === data.currentRun) {
            return;
        }
        this._workerServiceProducer.emit('plugs', {
            id: 'plug_' + data.postId + '_' + findPlug.identifier,
            options: {
                delay: 0, // runPlug.runEveryMilliseconds,
            },
            payload: {
                plugId: data.plugId,
                postId: data.postId,
                delay: data.delay,
                totalRuns: data.totalRuns,
                currentRun: data.currentRun + 1,
            },
        });
    }
    async createOrUpdatePlug(orgId, integrationId, body) {
        const { activated } = await this._integrationRepository.createOrUpdatePlug(orgId, integrationId, body);
        return {
            activated,
        };
    }
    async changePlugActivation(orgId, plugId, status) {
        const { id, integrationId, plugFunction } = await this._integrationRepository.changePlugActivation(orgId, plugId, status);
        return { id };
    }
    async getPlugs(orgId, integrationId) {
        return this._integrationRepository.getPlugs(orgId, integrationId);
    }
    async loadExisingData(methodName, integrationId, id) {
        const exisingData = await this._integrationRepository.loadExisingData(methodName, integrationId, id);
        const loadOnlyIds = exisingData.map((p) => p.value);
        return (0, lodash_1.difference)(id, loadOnlyIds);
    }
    async findFreeDateTime(orgId) {
        const findTimes = await this._integrationRepository.getPostingTimes(orgId);
        return (0, lodash_1.uniq)(findTimes.reduce((all, current) => {
            return [
                ...all,
                ...JSON.parse(current.postingTimes).map((p) => p.time),
            ];
        }, []));
    }
};
exports.IntegrationService = IntegrationService;
exports.IntegrationService = IntegrationService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [integration_repository_1.IntegrationRepository,
        integration_manager_1.IntegrationManager,
        notification_service_1.NotificationService,
        client_1.BullMqClient])
], IntegrationService);


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationRepository = void 0;
const tslib_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(5);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const make_is_1 = __webpack_require__(16);
const upload_factory_1 = __webpack_require__(45);
let IntegrationRepository = class IntegrationRepository {
    constructor(_integration, _posts, _plugs, _exisingPlugData, _customers) {
        this._integration = _integration;
        this._posts = _posts;
        this._plugs = _plugs;
        this._exisingPlugData = _exisingPlugData;
        this._customers = _customers;
        this.storage = upload_factory_1.UploadFactory.createStorage();
    }
    updateProviderSettings(org, id, settings) {
        return this._integration.model.integration.update({
            where: {
                id,
                organizationId: org,
            },
            data: {
                additionalSettings: settings,
            },
        });
    }
    async setTimes(org, id, times) {
        return this._integration.model.integration.update({
            select: {
                id: true,
            },
            where: {
                id,
                organizationId: org,
            },
            data: {
                postingTimes: JSON.stringify(times.time),
            },
        });
    }
    getPlug(plugId) {
        return this._plugs.model.plugs.findFirst({
            where: {
                id: plugId,
            },
            include: {
                integration: true,
            },
        });
    }
    async getPlugs(orgId, integrationId) {
        return this._plugs.model.plugs.findMany({
            where: {
                integrationId,
                organizationId: orgId,
                activated: true,
            },
            include: {
                integration: {
                    select: {
                        id: true,
                        providerIdentifier: true,
                    },
                },
            },
        });
    }
    async updateIntegration(id, params) {
        if (params.picture &&
            (params.picture.indexOf(process.env.CLOUDFLARE_BUCKET_URL) === -1 ||
                params.picture.indexOf(process.env.FRONTEND_URL) === -1)) {
            params.picture = await this.storage.uploadSimple(params.picture);
        }
        return this._integration.model.integration.update({
            where: {
                id,
            },
            data: {
                ...params,
            },
        });
    }
    disconnectChannel(org, id) {
        return this._integration.model.integration.update({
            where: {
                id,
                organizationId: org,
            },
            data: {
                refreshNeeded: true,
            },
        });
    }
    async createOrUpdateIntegration(additionalSettings, oneTimeToken, org, name, picture, type, internalId, provider, token, refreshToken = '', expiresIn = 999999999, username, isBetweenSteps = false, refresh, timezone, customInstanceDetails) {
        const postTimes = timezone
            ? {
                postingTimes: JSON.stringify([
                    { time: 560 - timezone },
                    { time: 850 - timezone },
                    { time: 1140 - timezone },
                ]),
            }
            : {};
        const upsert = await this._integration.model.integration.upsert({
            where: {
                organizationId_internalId: {
                    internalId,
                    organizationId: org,
                },
            },
            create: {
                type: type,
                name,
                providerIdentifier: provider,
                token,
                profile: username,
                ...(picture ? { picture } : {}),
                inBetweenSteps: isBetweenSteps,
                refreshToken,
                ...(expiresIn
                    ? { tokenExpiration: new Date(Date.now() + expiresIn * 1000) }
                    : {}),
                internalId,
                ...postTimes,
                organizationId: org,
                refreshNeeded: false,
                rootInternalId: internalId.split('_').pop(),
                ...(customInstanceDetails ? { customInstanceDetails } : {}),
                additionalSettings: additionalSettings
                    ? JSON.stringify(additionalSettings)
                    : '[]',
            },
            update: {
                ...(additionalSettings
                    ? { additionalSettings: JSON.stringify(additionalSettings) }
                    : {}),
                ...(customInstanceDetails ? { customInstanceDetails } : {}),
                type: type,
                ...(!refresh
                    ? {
                        inBetweenSteps: isBetweenSteps,
                    }
                    : {}),
                ...(picture ? { picture } : {}),
                profile: username,
                providerIdentifier: provider,
                token,
                refreshToken,
                ...(expiresIn
                    ? { tokenExpiration: new Date(Date.now() + expiresIn * 1000) }
                    : {}),
                internalId,
                organizationId: org,
                deletedAt: null,
                refreshNeeded: false,
            },
        });
        if (oneTimeToken) {
            const rootId = (await this._integration.model.integration.findFirst({
                where: {
                    organizationId: org,
                    internalId: internalId,
                },
            }))?.rootInternalId || internalId.split('_').pop();
            await this._integration.model.integration.updateMany({
                where: {
                    id: {
                        not: upsert.id,
                    },
                    organizationId: org,
                    rootInternalId: rootId,
                },
                data: {
                    token,
                    refreshToken,
                    refreshNeeded: false,
                    ...(expiresIn
                        ? { tokenExpiration: new Date(Date.now() + expiresIn * 1000) }
                        : {}),
                },
            });
        }
        return upsert;
    }
    needsToBeRefreshed() {
        return this._integration.model.integration.findMany({
            where: {
                tokenExpiration: {
                    lte: (0, dayjs_1.default)().add(1, 'day').toDate(),
                },
                inBetweenSteps: false,
                deletedAt: null,
                refreshNeeded: false,
            },
        });
    }
    refreshNeeded(org, id) {
        return this._integration.model.integration.update({
            where: {
                id,
                organizationId: org,
            },
            data: {
                refreshNeeded: true,
            },
        });
    }
    updateNameAndUrl(id, name, url) {
        return this._integration.model.integration.update({
            where: {
                id,
            },
            data: {
                ...(name ? { name } : {}),
                ...(url ? { picture: url } : {}),
            },
        });
    }
    getIntegrationById(org, id) {
        return this._integration.model.integration.findFirst({
            where: {
                organizationId: org,
                id,
            },
        });
    }
    async getIntegrationForOrder(id, order, user, org) {
        const integration = await this._posts.model.post.findFirst({
            where: {
                integrationId: id,
                submittedForOrder: {
                    id: order,
                    messageGroup: {
                        OR: [
                            { sellerId: user },
                            { buyerId: user },
                            { buyerOrganizationId: org },
                        ],
                    },
                },
            },
            select: {
                integration: {
                    select: {
                        id: true,
                        name: true,
                        picture: true,
                        inBetweenSteps: true,
                        providerIdentifier: true,
                    },
                },
            },
        });
        return integration?.integration;
    }
    async updateOnCustomerName(org, id, name) {
        const customer = !name
            ? undefined
            : (await this._customers.model.customer.findFirst({
                where: {
                    orgId: org,
                    name,
                },
            })) ||
                (await this._customers.model.customer.create({
                    data: {
                        name,
                        orgId: org,
                    },
                }));
        return this._integration.model.integration.update({
            where: {
                id,
                organizationId: org,
            },
            data: {
                customer: !customer
                    ? { disconnect: true }
                    : {
                        connect: {
                            id: customer.id,
                        },
                    },
            },
        });
    }
    updateIntegrationGroup(org, id, group) {
        return this._integration.model.integration.update({
            where: {
                id,
                organizationId: org,
            },
            data: !group
                ? {
                    customer: {
                        disconnect: true,
                    },
                }
                : {
                    customer: {
                        connect: {
                            id: group,
                        },
                    },
                },
        });
    }
    customers(orgId) {
        return this._customers.model.customer.findMany({
            where: {
                orgId,
                deletedAt: null,
            },
        });
    }
    getIntegrationsList(org) {
        return this._integration.model.integration.findMany({
            where: {
                organizationId: org,
                deletedAt: null,
            },
            include: {
                customer: true,
            },
        });
    }
    async disableChannel(org, id) {
        await this._integration.model.integration.update({
            where: {
                id,
                organizationId: org,
            },
            data: {
                disabled: true,
            },
        });
    }
    async enableChannel(org, id) {
        await this._integration.model.integration.update({
            where: {
                id,
                organizationId: org,
            },
            data: {
                disabled: false,
            },
        });
    }
    getPostsForChannel(org, id) {
        return this._posts.model.post.groupBy({
            by: ['group'],
            where: {
                organizationId: org,
                integrationId: id,
                deletedAt: null,
            },
        });
    }
    deleteChannel(org, id) {
        return this._integration.model.integration.update({
            where: {
                id,
                organizationId: org,
            },
            data: {
                deletedAt: new Date(),
            },
        });
    }
    async checkForDeletedOnceAndUpdate(org, page) {
        return this._integration.model.integration.updateMany({
            where: {
                organizationId: org,
                internalId: page,
                deletedAt: {
                    not: null,
                },
            },
            data: {
                internalId: (0, make_is_1.makeId)(10),
            },
        });
    }
    async disableIntegrations(org, totalChannels) {
        const getChannels = await this._integration.model.integration.findMany({
            where: {
                organizationId: org,
                disabled: false,
                deletedAt: null,
            },
            take: totalChannels,
            select: {
                id: true,
            },
        });
        for (const channel of getChannels) {
            await this._integration.model.integration.update({
                where: {
                    id: channel.id,
                },
                data: {
                    disabled: true,
                },
            });
        }
    }
    getPlugsByIntegrationId(org, id) {
        return this._plugs.model.plugs.findMany({
            where: {
                organizationId: org,
                integrationId: id,
            },
        });
    }
    createOrUpdatePlug(org, integrationId, body) {
        return this._plugs.model.plugs.upsert({
            where: {
                organizationId: org,
                plugFunction_integrationId: {
                    integrationId,
                    plugFunction: body.func,
                },
            },
            create: {
                integrationId,
                organizationId: org,
                plugFunction: body.func,
                data: JSON.stringify(body.fields),
                activated: true,
            },
            update: {
                data: JSON.stringify(body.fields),
            },
            select: {
                activated: true,
            },
        });
    }
    changePlugActivation(orgId, plugId, status) {
        return this._plugs.model.plugs.update({
            where: {
                organizationId: orgId,
                id: plugId,
            },
            data: {
                activated: !!status,
            },
        });
    }
    async loadExisingData(methodName, integrationId, id) {
        return this._exisingPlugData.model.exisingPlugData.findMany({
            where: {
                integrationId,
                methodName,
                value: {
                    in: id,
                },
            },
        });
    }
    async saveExisingData(methodName, integrationId, value) {
        return this._exisingPlugData.model.exisingPlugData.createMany({
            data: value.map((p) => ({
                integrationId,
                methodName,
                value: p,
            })),
        });
    }
    async getPostingTimes(orgId) {
        return this._integration.model.integration.findMany({
            where: {
                organizationId: orgId,
                disabled: false,
                deletedAt: null,
            },
            select: {
                postingTimes: true,
            },
        });
    }
};
exports.IntegrationRepository = IntegrationRepository;
exports.IntegrationRepository = IntegrationRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository])
], IntegrationRepository);


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadFactory = void 0;
const cloudflare_storage_1 = __webpack_require__(46);
const local_storage_1 = __webpack_require__(52);
class UploadFactory {
    static createStorage() {
        const storageProvider = process.env.STORAGE_PROVIDER || 'local';
        switch (storageProvider) {
            case 'local':
                return new local_storage_1.LocalStorage(process.env.UPLOAD_DIRECTORY);
            case 'cloudflare':
                return new cloudflare_storage_1.CloudflareStorage(process.env.CLOUDFLARE_ACCOUNT_ID, process.env.CLOUDFLARE_ACCESS_KEY, process.env.CLOUDFLARE_SECRET_ACCESS_KEY, process.env.CLOUDFLARE_REGION, process.env.CLOUDFLARE_BUCKETNAME, process.env.CLOUDFLARE_BUCKET_URL);
            default:
                throw new Error(`Invalid storage type ${storageProvider}`);
        }
    }
}
exports.UploadFactory = UploadFactory;


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CloudflareStorage = void 0;
const tslib_1 = __webpack_require__(1);
const client_s3_1 = __webpack_require__(47);
__webpack_require__(48);
const make_is_1 = __webpack_require__(16);
const mime_types_1 = tslib_1.__importDefault(__webpack_require__(49));
// @ts-ignore
const mime_1 = __webpack_require__(50);
const axios_1 = tslib_1.__importDefault(__webpack_require__(51));
class CloudflareStorage {
    constructor(accountID, accessKey, secretKey, region, _bucketName, _uploadUrl) {
        this.region = region;
        this._bucketName = _bucketName;
        this._uploadUrl = _uploadUrl;
        this._client = new client_s3_1.S3Client({
            endpoint: `https://${accountID}.r2.cloudflarestorage.com`,
            region,
            credentials: {
                accessKeyId: accessKey,
                secretAccessKey: secretKey,
            },
            requestChecksumCalculation: "WHEN_REQUIRED",
        });
        this._client.middlewareStack.add((next) => async (args) => {
            const request = args.request;
            // Remove checksum headers
            const headers = request.headers;
            delete headers['x-amz-checksum-crc32'];
            delete headers['x-amz-checksum-crc32c'];
            delete headers['x-amz-checksum-sha1'];
            delete headers['x-amz-checksum-sha256'];
            request.headers = headers;
            Object.entries(request.headers).forEach(
            // @ts-ignore
            ([key, value]) => {
                if (!request.headers) {
                    request.headers = {};
                }
                request.headers[key] = value;
            });
            return next(args);
        }, { step: 'build', name: 'customHeaders' });
    }
    async uploadSimple(path) {
        const loadImage = await axios_1.default.get(path, { responseType: 'arraybuffer' });
        const contentType = loadImage?.headers?.['content-type'] ||
            loadImage?.headers?.['Content-Type'];
        const extension = (0, mime_1.getExtension)(contentType);
        const id = (0, make_is_1.makeId)(10);
        const params = {
            Bucket: this._bucketName,
            Key: `${id}.${extension}`,
            Body: loadImage.data,
            ContentType: contentType,
            ChecksumMode: 'DISABLED'
        };
        const command = new client_s3_1.PutObjectCommand({ ...params });
        await this._client.send(command);
        return `${this._uploadUrl}/${id}.${extension}`;
    }
    async uploadFile(file) {
        const id = (0, make_is_1.makeId)(10);
        const extension = mime_types_1.default.extension(file.mimetype) || '';
        // Create the PutObjectCommand to upload the file to Cloudflare R2
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this._bucketName,
            ACL: 'public-read',
            Key: `${id}.${extension}`,
            Body: file.buffer,
        });
        await this._client.send(command);
        return {
            filename: `${id}.${extension}`,
            mimetype: file.mimetype,
            size: file.size,
            buffer: file.buffer,
            originalname: `${id}.${extension}`,
            fieldname: 'file',
            path: `${this._uploadUrl}/${id}.${extension}`,
            destination: `${this._uploadUrl}/${id}.${extension}`,
            encoding: '7bit',
            stream: file.buffer,
        };
    }
    // Implement the removeFile method from IUploadProvider
    async removeFile(filePath) {
        // const fileName = filePath.split('/').pop(); // Extract the filename from the path
        // const command = new DeleteObjectCommand({
        //   Bucket: this._bucketName,
        //   Key: fileName,
        // });
        // await this._client.send(command);
    }
}
exports.CloudflareStorage = CloudflareStorage;
exports["default"] = CloudflareStorage;


/***/ }),
/* 47 */
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),
/* 48 */
/***/ ((module) => {

module.exports = require("multer");

/***/ }),
/* 49 */
/***/ ((module) => {

module.exports = require("mime-types");

/***/ }),
/* 50 */
/***/ ((module) => {

module.exports = require("mime");

/***/ }),
/* 51 */
/***/ ((module) => {

module.exports = require("axios");

/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStorage = void 0;
const tslib_1 = __webpack_require__(1);
const fs_1 = __webpack_require__(53);
// @ts-ignore
const mime_1 = tslib_1.__importDefault(__webpack_require__(50));
const path_1 = __webpack_require__(54);
const axios_1 = tslib_1.__importDefault(__webpack_require__(51));
class LocalStorage {
    constructor(uploadDirectory) {
        this.uploadDirectory = uploadDirectory;
    }
    async uploadSimple(path) {
        const loadImage = await axios_1.default.get(path, { responseType: 'arraybuffer' });
        const contentType = loadImage?.headers?.['content-type'] || loadImage?.headers?.['Content-Type'];
        const findExtension = mime_1.default.getExtension(contentType);
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const innerPath = `/${year}/${month}/${day}`;
        const dir = `${this.uploadDirectory}${innerPath}`;
        (0, fs_1.mkdirSync)(dir, { recursive: true });
        const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
        const filePath = `${dir}/${randomName}.${findExtension}`;
        const publicPath = `${innerPath}/${randomName}.${findExtension}`;
        // Logic to save the file to the filesystem goes here
        (0, fs_1.writeFileSync)(filePath, loadImage.data);
        return process.env.FRONTEND_URL + '/uploads' + publicPath;
    }
    async uploadFile(file) {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const innerPath = `/${year}/${month}/${day}`;
        const dir = `${this.uploadDirectory}${innerPath}`;
        (0, fs_1.mkdirSync)(dir, { recursive: true });
        const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
        const filePath = `${dir}/${randomName}${(0, path_1.extname)(file.originalname)}`;
        const publicPath = `${innerPath}/${randomName}${(0, path_1.extname)(file.originalname)}`;
        // Logic to save the file to the filesystem goes here
        (0, fs_1.writeFileSync)(filePath, file.buffer);
        return {
            filename: `${randomName}${(0, path_1.extname)(file.originalname)}`,
            path: process.env.FRONTEND_URL + '/uploads' + publicPath,
            mimetype: file.mimetype,
            originalname: file.originalname,
        };
    }
    async removeFile(filePath) {
        // Logic to remove the file from the filesystem goes here
        return new Promise((resolve, reject) => {
            (0, fs_1.unlink)(filePath, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    }
}
exports.LocalStorage = LocalStorage;


/***/ }),
/* 53 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 54 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationManager = void 0;
const tslib_1 = __webpack_require__(1);
__webpack_require__(56);
const common_1 = __webpack_require__(5);
const x_provider_1 = __webpack_require__(57);
const linkedin_provider_1 = __webpack_require__(66);
const reddit_provider_1 = __webpack_require__(67);
const dev_to_provider_1 = __webpack_require__(68);
const hashnode_provider_1 = __webpack_require__(69);
const medium_provider_1 = __webpack_require__(72);
const facebook_provider_1 = __webpack_require__(73);
const instagram_provider_1 = __webpack_require__(74);
const youtube_provider_1 = __webpack_require__(75);
const tiktok_provider_1 = __webpack_require__(78);
const pinterest_provider_1 = __webpack_require__(79);
const dribbble_provider_1 = __webpack_require__(81);
const linkedin_page_provider_1 = __webpack_require__(82);
const threads_provider_1 = __webpack_require__(83);
const discord_provider_1 = __webpack_require__(84);
const slack_provider_1 = __webpack_require__(85);
const mastodon_provider_1 = __webpack_require__(86);
const bluesky_provider_1 = __webpack_require__(87);
const lemmy_provider_1 = __webpack_require__(89);
const instagram_standalone_provider_1 = __webpack_require__(90);
const farcaster_provider_1 = __webpack_require__(91);
const telegram_provider_1 = __webpack_require__(93);
const nostr_provider_1 = __webpack_require__(95);
const socialIntegrationList = [
    new x_provider_1.XProvider(),
    new linkedin_provider_1.LinkedinProvider(),
    new linkedin_page_provider_1.LinkedinPageProvider(),
    new reddit_provider_1.RedditProvider(),
    new instagram_provider_1.InstagramProvider(),
    new instagram_standalone_provider_1.InstagramStandaloneProvider(),
    new facebook_provider_1.FacebookProvider(),
    new threads_provider_1.ThreadsProvider(),
    new youtube_provider_1.YoutubeProvider(),
    new tiktok_provider_1.TiktokProvider(),
    new pinterest_provider_1.PinterestProvider(),
    new dribbble_provider_1.DribbbleProvider(),
    new discord_provider_1.DiscordProvider(),
    new slack_provider_1.SlackProvider(),
    new mastodon_provider_1.MastodonProvider(),
    new bluesky_provider_1.BlueskyProvider(),
    new lemmy_provider_1.LemmyProvider(),
    new farcaster_provider_1.FarcasterProvider(),
    new telegram_provider_1.TelegramProvider(),
    new nostr_provider_1.NostrProvider(),
    // new MastodonCustomProvider(),
];
const articleIntegrationList = [
    new dev_to_provider_1.DevToProvider(),
    new hashnode_provider_1.HashnodeProvider(),
    new medium_provider_1.MediumProvider(),
];
let IntegrationManager = class IntegrationManager {
    async getAllIntegrations() {
        return {
            social: await Promise.all(socialIntegrationList.map(async (p) => ({
                name: p.name,
                identifier: p.identifier,
                toolTip: p.toolTip,
                isExternal: !!p.externalUrl,
                isWeb3: !!p.isWeb3,
                ...(p.customFields ? { customFields: await p.customFields() } : {}),
            }))),
            article: articleIntegrationList.map((p) => ({
                name: p.name,
                identifier: p.identifier,
            })),
        };
    }
    getAllPlugs() {
        return socialIntegrationList
            .map((p) => {
            return {
                name: p.name,
                identifier: p.identifier,
                plugs: (Reflect.getMetadata('custom:plug', p.constructor.prototype) || []).map((p) => ({
                    ...p,
                    fields: p.fields.map((c) => ({
                        ...c,
                        validation: c?.validation?.toString(),
                    })),
                })),
            };
        })
            .filter((f) => f.plugs.length);
    }
    getInternalPlugs(providerName) {
        const p = socialIntegrationList.find((p) => p.identifier === providerName);
        return {
            internalPlugs: Reflect.getMetadata('custom:internal_plug', p.constructor.prototype) ||
                [],
        };
    }
    getAllowedSocialsIntegrations() {
        return socialIntegrationList.map((p) => p.identifier);
    }
    getSocialIntegration(integration) {
        return socialIntegrationList.find((i) => i.identifier === integration);
    }
    getAllowedArticlesIntegrations() {
        return articleIntegrationList.map((p) => p.identifier);
    }
    getArticlesIntegration(integration) {
        return articleIntegrationList.find((i) => i.identifier === integration);
    }
};
exports.IntegrationManager = IntegrationManager;
exports.IntegrationManager = IntegrationManager = tslib_1.__decorate([
    (0, common_1.Injectable)()
], IntegrationManager);


/***/ }),
/* 56 */
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.XProvider = void 0;
const tslib_1 = __webpack_require__(1);
const twitter_api_v2_1 = __webpack_require__(58);
const mime_types_1 = __webpack_require__(49);
const sharp_1 = tslib_1.__importDefault(__webpack_require__(59));
const read_or_fetch_1 = __webpack_require__(60);
const remove_markdown_1 = tslib_1.__importDefault(__webpack_require__(61));
const social_abstract_1 = __webpack_require__(62);
const plug_decorator_1 = __webpack_require__(64);
const timer_1 = __webpack_require__(63);
const post_plug_1 = __webpack_require__(65);
class XProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'x';
        this.name = 'X';
        this.isBetweenSteps = false;
        this.scopes = [];
        this.toolTip = 'You will be logged in into your current account, if you would like a different account, change it first on X';
    }
    async autoRepostPost(integration, id, fields) {
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        const [accessTokenSplit, accessSecretSplit] = integration.token.split(':');
        const client = new twitter_api_v2_1.TwitterApi({
            appKey: process.env.X_API_KEY,
            appSecret: process.env.X_API_SECRET,
            accessToken: accessTokenSplit,
            accessSecret: accessSecretSplit,
        });
        if ((await client.v2.tweetLikedBy(id)).meta.result_count >=
            +fields.likesAmount) {
            await (0, timer_1.timer)(2000);
            await client.v2.retweet(integration.internalId, id);
            return true;
        }
        return false;
    }
    async repostPostUsers(integration, originalIntegration, postId, information) {
        const [accessTokenSplit, accessSecretSplit] = integration.token.split(':');
        const client = new twitter_api_v2_1.TwitterApi({
            appKey: process.env.X_API_KEY,
            appSecret: process.env.X_API_SECRET,
            accessToken: accessTokenSplit,
            accessSecret: accessSecretSplit,
        });
        const { data: { id }, } = await client.v2.me();
        try {
            await client.v2.retweet(id, postId);
        }
        catch (err) {
            /** nothing **/
        }
    }
    async autoPlugPost(integration, id, fields) {
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        const [accessTokenSplit, accessSecretSplit] = integration.token.split(':');
        const client = new twitter_api_v2_1.TwitterApi({
            appKey: process.env.X_API_KEY,
            appSecret: process.env.X_API_SECRET,
            accessToken: accessTokenSplit,
            accessSecret: accessSecretSplit,
        });
        if ((await client.v2.tweetLikedBy(id)).meta.result_count >=
            +fields.likesAmount) {
            await (0, timer_1.timer)(2000);
            await client.v2.tweet({
                text: (0, remove_markdown_1.default)(fields.post.replace('\n', '𝔫𝔢𝔴𝔩𝔦𝔫𝔢')).replace('𝔫𝔢𝔴𝔩𝔦𝔫𝔢', '\n'),
                reply: { in_reply_to_tweet_id: id },
            });
            return true;
        }
        return false;
    }
    async refreshToken() {
        return {
            id: '',
            name: '',
            accessToken: '',
            refreshToken: '',
            expiresIn: 0,
            picture: '',
            username: '',
        };
    }
    async generateAuthUrl() {
        const client = new twitter_api_v2_1.TwitterApi({
            appKey: process.env.X_API_KEY,
            appSecret: process.env.X_API_SECRET,
        });
        const { url, oauth_token, oauth_token_secret } = await client.generateAuthLink(process.env.FRONTEND_URL + `/integrations/social/x`, {
            authAccessType: 'write',
            linkMode: 'authenticate',
            forceLogin: false,
        });
        return {
            url,
            codeVerifier: oauth_token + ':' + oauth_token_secret,
            state: oauth_token,
        };
    }
    async authenticate(params) {
        const { code, codeVerifier } = params;
        const [oauth_token, oauth_token_secret] = codeVerifier.split(':');
        const startingClient = new twitter_api_v2_1.TwitterApi({
            appKey: process.env.X_API_KEY,
            appSecret: process.env.X_API_SECRET,
            accessToken: oauth_token,
            accessSecret: oauth_token_secret,
        });
        const { accessToken, client, accessSecret } = await startingClient.login(code);
        const { data: { username, verified, profile_image_url, name, id }, } = await client.v2.me({
            'user.fields': [
                'username',
                'verified',
                'verified_type',
                'profile_image_url',
                'name',
            ],
        });
        return {
            id: String(id),
            accessToken: accessToken + ':' + accessSecret,
            name,
            refreshToken: '',
            expiresIn: 999999999,
            picture: profile_image_url,
            username,
            additionalSettings: [
                {
                    title: 'Verified',
                    description: 'Is this a verified user? (Premium)',
                    type: 'checkbox',
                    value: verified,
                },
            ],
        };
    }
    async post(id, accessToken, postDetails) {
        const [accessTokenSplit, accessSecretSplit] = accessToken.split(':');
        const client = new twitter_api_v2_1.TwitterApi({
            appKey: process.env.X_API_KEY,
            appSecret: process.env.X_API_SECRET,
            accessToken: accessTokenSplit,
            accessSecret: accessSecretSplit,
        });
        const { data: { username }, } = await client.v2.me({
            'user.fields': 'username',
        });
        // upload everything before, you don't want it to fail between the posts
        const uploadAll = (await Promise.all(postDetails.flatMap((p) => p?.media?.flatMap(async (m) => {
            return {
                id: await client.v1.uploadMedia(m.url.indexOf('mp4') > -1
                    ? Buffer.from(await (0, read_or_fetch_1.readOrFetch)(m.url))
                    : await (0, sharp_1.default)(await (0, read_or_fetch_1.readOrFetch)(m.url), {
                        animated: (0, mime_types_1.lookup)(m.url) === 'image/gif',
                    })
                        .resize({
                        width: 1000,
                    })
                        .gif()
                        .toBuffer(), {
                    mimeType: (0, mime_types_1.lookup)(m.url) || '',
                }),
                postId: p.id,
            };
        })))).reduce((acc, val) => {
            if (!val?.id) {
                return acc;
            }
            acc[val.postId] = acc[val.postId] || [];
            acc[val.postId].push(val.id);
            return acc;
        }, {});
        const ids = [];
        for (const post of postDetails) {
            const media_ids = (uploadAll[post.id] || []).filter((f) => f);
            // @ts-ignore
            const { data } = await client.v2.tweet({
                text: (0, remove_markdown_1.default)(post.message.replace('\n', '𝔫𝔢𝔴𝔩𝔦𝔫𝔢')).replace('𝔫𝔢𝔴𝔩𝔦𝔫𝔢', '\n'),
                ...(media_ids.length ? { media: { media_ids } } : {}),
                ...(ids.length
                    ? { reply: { in_reply_to_tweet_id: ids[ids.length - 1].postId } }
                    : {}),
            });
            ids.push({
                postId: data.id,
                id: post.id,
                releaseURL: `https://twitter.com/${username}/status/${data.id}`,
            });
        }
        return ids.map((p) => ({
            ...p,
            status: 'posted',
        }));
    }
}
exports.XProvider = XProvider;
tslib_1.__decorate([
    (0, plug_decorator_1.Plug)({
        identifier: 'x-autoRepostPost',
        title: 'Auto Repost Posts',
        description: 'When a post reached a certain number of likes, repost it to increase engagement (1 week old posts)',
        runEveryMilliseconds: 21600000,
        totalRuns: 3,
        fields: [
            {
                name: 'likesAmount',
                type: 'number',
                placeholder: 'Amount of likes',
                description: 'The amount of likes to trigger the repost',
                validation: /^\d+$/,
            },
        ],
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], XProvider.prototype, "autoRepostPost", null);
tslib_1.__decorate([
    (0, post_plug_1.PostPlug)({
        identifier: 'x-repost-post-users',
        title: 'Add Re-posters',
        description: 'Add accounts to repost your post',
        pickIntegration: ['x'],
        fields: [],
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], XProvider.prototype, "repostPostUsers", null);
tslib_1.__decorate([
    (0, plug_decorator_1.Plug)({
        identifier: 'x-autoPlugPost',
        title: 'Auto plug post',
        description: 'When a post reached a certain number of likes, add another post to it so you followers get a notification about your promotion',
        runEveryMilliseconds: 21600000,
        totalRuns: 3,
        fields: [
            {
                name: 'likesAmount',
                type: 'number',
                placeholder: 'Amount of likes',
                description: 'The amount of likes to trigger the repost',
                validation: /^\d+$/,
            },
            {
                name: 'post',
                type: 'richtext',
                placeholder: 'Post to plug',
                description: 'Message content to plug',
                validation: /^[\s\S]{3,}$/g,
            },
        ],
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], XProvider.prototype, "autoPlugPost", null);


/***/ }),
/* 58 */
/***/ ((module) => {

module.exports = require("twitter-api-v2");

/***/ }),
/* 59 */
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readOrFetch = void 0;
const tslib_1 = __webpack_require__(1);
const fs_1 = __webpack_require__(53);
const axios_1 = tslib_1.__importDefault(__webpack_require__(51));
const readOrFetch = async (path) => {
    if (path.indexOf('http') === 0) {
        return (await (0, axios_1.default)({
            url: path,
            method: 'GET',
            responseType: 'arraybuffer',
        })).data;
    }
    return (0, fs_1.readFileSync)(path);
};
exports.readOrFetch = readOrFetch;


/***/ }),
/* 61 */
/***/ ((module) => {

module.exports = require("remove-markdown");

/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SocialAbstract = exports.NotEnoughScopes = exports.BadBody = exports.RefreshToken = void 0;
const timer_1 = __webpack_require__(63);
class RefreshToken {
    constructor(identifier, json, body) {
        this.identifier = identifier;
        this.json = json;
        this.body = body;
    }
}
exports.RefreshToken = RefreshToken;
class BadBody {
    constructor(identifier, json, body) {
        this.identifier = identifier;
        this.json = json;
        this.body = body;
    }
}
exports.BadBody = BadBody;
class NotEnoughScopes {
    constructor(message = 'Not enough scopes') {
        this.message = message;
    }
}
exports.NotEnoughScopes = NotEnoughScopes;
class SocialAbstract {
    async fetch(url, options = {}, identifier = '', totalRetries = 0) {
        const request = await fetch(url, options);
        if (request.status === 200 || request.status === 201) {
            return request;
        }
        let json = '{}';
        try {
            json = await request.text();
            console.log(json);
        }
        catch (err) {
            json = '{}';
        }
        if (json.includes('rate_limit_exceeded') || json.includes('Rate limit')) {
            await (0, timer_1.timer)(2000);
            return this.fetch(url, options, identifier);
        }
        if (request.status === 401 ||
            (json.includes('OAuthException') &&
                !json.includes('The user is not an Instagram Business') &&
                !json.includes('Unsupported format') &&
                !json.includes('2207018') &&
                !json.includes('REVOKED_ACCESS_TOKEN'))) {
            throw new RefreshToken(identifier, json, options.body);
        }
        if (totalRetries < 2) {
            await (0, timer_1.timer)(2000);
            return this.fetch(url, options, identifier, totalRetries + 1);
        }
        throw new BadBody(identifier, json, options.body);
    }
    checkScopes(required, got) {
        if (Array.isArray(got)) {
            if (!required.every((scope) => got.includes(scope))) {
                throw new NotEnoughScopes();
            }
            return true;
        }
        const newGot = decodeURIComponent(got);
        const splitType = newGot.indexOf(',') > -1 ? ',' : ' ';
        const gotArray = newGot.split(splitType);
        if (!required.every((scope) => gotArray.includes(scope))) {
            throw new NotEnoughScopes();
        }
        return true;
    }
}
exports.SocialAbstract = SocialAbstract;


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.timer = void 0;
const timer = (ms) => new Promise(res => setTimeout(res, ms));
exports.timer = timer;


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Plug = Plug;
__webpack_require__(56);
function Plug(params) {
    return function (target, propertyKey, descriptor) {
        // Retrieve existing metadata or initialize an empty array
        const existingMetadata = Reflect.getMetadata('custom:plug', target) || [];
        // Add the metadata information for this method
        existingMetadata.push({ methodName: propertyKey, ...params });
        // Define metadata on the class prototype (so it can be retrieved from the class)
        Reflect.defineMetadata('custom:plug', existingMetadata, target);
    };
}


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostPlug = PostPlug;
__webpack_require__(56);
function PostPlug(params) {
    return function (target, propertyKey, descriptor) {
        // Retrieve existing metadata or initialize an empty array
        const existingMetadata = Reflect.getMetadata('custom:internal_plug', target) || [];
        // Add the metadata information for this method
        existingMetadata.push({ methodName: propertyKey, ...params });
        // Define metadata on the class prototype (so it can be retrieved from the class)
        Reflect.defineMetadata('custom:internal_plug', existingMetadata, target);
    };
}


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkedinProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const sharp_1 = tslib_1.__importDefault(__webpack_require__(59));
const mime_types_1 = __webpack_require__(49);
const read_or_fetch_1 = __webpack_require__(60);
const social_abstract_1 = __webpack_require__(62);
const post_plug_1 = __webpack_require__(65);
class LinkedinProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'linkedin';
        this.name = 'LinkedIn';
        this.oneTimeToken = true;
        this.isBetweenSteps = false;
        this.scopes = [
            'openid',
            'profile',
            'w_member_social',
            'r_basicprofile',
            'rw_organization_admin',
            'w_organization_social',
            'r_organization_social',
        ];
        this.refreshWait = true;
    }
    async refreshToken(refresh_token) {
        const { access_token: accessToken, refresh_token: refreshToken, expires_in, } = await (await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token,
                client_id: process.env.LINKEDIN_CLIENT_ID,
                client_secret: process.env.LINKEDIN_CLIENT_SECRET,
            }),
        })).json();
        const { vanityName } = await (await this.fetch('https://api.linkedin.com/v2/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        const { name, sub: id, picture, } = await (await this.fetch('https://api.linkedin.com/v2/userinfo', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        return {
            id,
            accessToken,
            refreshToken,
            expiresIn: expires_in,
            name,
            picture,
            username: vanityName,
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        const codeVerifier = (0, make_is_1.makeId)(30);
        const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&prompt=none&redirect_uri=${encodeURIComponent(`${process.env.FRONTEND_URL}/integrations/social/linkedin`)}&state=${state}&scope=${encodeURIComponent(this.scopes.join(' '))}`;
        return {
            url,
            codeVerifier,
            state,
        };
    }
    async authenticate(params) {
        const body = new URLSearchParams();
        body.append('grant_type', 'authorization_code');
        body.append('code', params.code);
        body.append('redirect_uri', `${process.env.FRONTEND_URL}/integrations/social/linkedin${params.refresh ? `?refresh=${params.refresh}` : ''}`);
        body.append('client_id', process.env.LINKEDIN_CLIENT_ID);
        body.append('client_secret', process.env.LINKEDIN_CLIENT_SECRET);
        const { access_token: accessToken, expires_in: expiresIn, refresh_token: refreshToken, scope, } = await (await this.fetch('https://www.linkedin.com/oauth/v2/accessToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body,
        })).json();
        this.checkScopes(this.scopes, scope);
        const { name, sub: id, picture, } = await (await this.fetch('https://api.linkedin.com/v2/userinfo', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        const { vanityName } = await (await this.fetch('https://api.linkedin.com/v2/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        return {
            id,
            accessToken,
            refreshToken,
            expiresIn,
            name,
            picture,
            username: vanityName,
        };
    }
    async company(token, data) {
        const { url } = data;
        const getCompanyVanity = url.match(/^https?:\/\/(?:www\.)?linkedin\.com\/company\/([^/]+)\/?$/);
        if (!getCompanyVanity || !getCompanyVanity?.length) {
            throw new Error('Invalid LinkedIn company URL');
        }
        const { elements } = await (await this.fetch(`https://api.linkedin.com/rest/organizations?q=vanityName&vanityName=${getCompanyVanity[1]}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Restli-Protocol-Version': '2.0.0',
                'LinkedIn-Version': '202402',
                Authorization: `Bearer ${token}`,
            },
        })).json();
        return {
            options: elements.map((e) => ({
                label: e.localizedName,
                value: `@[${e.localizedName}](urn:li:organization:${e.id})`,
            }))?.[0],
        };
    }
    async uploadPicture(fileName, accessToken, personId, picture, type = 'personal') {
        const { value: { uploadUrl, image, video, uploadInstructions, ...all }, } = await (await this.fetch(`https://api.linkedin.com/rest/${fileName.indexOf('mp4') > -1 ? 'videos' : 'images'}?action=initializeUpload`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Restli-Protocol-Version': '2.0.0',
                'LinkedIn-Version': '202402',
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                initializeUploadRequest: {
                    owner: type === 'personal'
                        ? `urn:li:person:${personId}`
                        : `urn:li:organization:${personId}`,
                    ...(fileName.indexOf('mp4') > -1
                        ? {
                            fileSizeBytes: picture.length,
                            uploadCaptions: false,
                            uploadThumbnail: false,
                        }
                        : {}),
                },
            }),
        })).json();
        const sendUrlRequest = uploadInstructions?.[0]?.uploadUrl || uploadUrl;
        const finalOutput = video || image;
        const etags = [];
        for (let i = 0; i < picture.length; i += 1024 * 1024 * 2) {
            const upload = await this.fetch(sendUrlRequest, {
                method: 'PUT',
                headers: {
                    'X-Restli-Protocol-Version': '2.0.0',
                    'LinkedIn-Version': '202402',
                    Authorization: `Bearer ${accessToken}`,
                    ...(fileName.indexOf('mp4') > -1
                        ? { 'Content-Type': 'application/octet-stream' }
                        : {}),
                },
                body: picture.slice(i, i + 1024 * 1024 * 2),
            });
            etags.push(upload.headers.get('etag'));
        }
        if (fileName.indexOf('mp4') > -1) {
            const a = await this.fetch('https://api.linkedin.com/rest/videos?action=finalizeUpload', {
                method: 'POST',
                body: JSON.stringify({
                    finalizeUploadRequest: {
                        video,
                        uploadToken: '',
                        uploadedPartIds: etags,
                    },
                }),
                headers: {
                    'X-Restli-Protocol-Version': '2.0.0',
                    'LinkedIn-Version': '202402',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        }
        return finalOutput;
    }
    fixText(text) {
        const pattern = /@\[.+?]\(urn:li:organization.+?\)/g;
        const matches = text.match(pattern) || [];
        const splitAll = text.split(pattern);
        const splitTextReformat = splitAll.map((p) => {
            return p
                .replace(/\\/g, '\\\\')
                .replace(/</g, '\\<')
                .replace(/>/g, '\\>')
                .replace(/#/g, '\\#')
                .replace(/~/g, '\\~')
                .replace(/_/g, '\\_')
                .replace(/\|/g, '\\|')
                .replace(/\[/g, '\\[')
                .replace(/]/g, '\\]')
                .replace(/\*/g, '\\*')
                .replace(/\(/g, '\\(')
                .replace(/\)/g, '\\)')
                .replace(/\{/g, '\\{')
                .replace(/}/g, '\\}')
                .replace(/@/g, '\\@');
        });
        const connectAll = splitTextReformat.reduce((all, current) => {
            const match = matches.shift();
            all.push(current);
            if (match) {
                all.push(match);
            }
            return all;
        }, []);
        return connectAll.join('');
    }
    async post(id, accessToken, postDetails, integration, type = 'personal') {
        const [firstPost, ...restPosts] = postDetails;
        const uploadAll = (await Promise.all(postDetails.flatMap((p) => p?.media?.flatMap(async (m) => {
            return {
                id: await this.uploadPicture(m.url, accessToken, id, m.url.indexOf('mp4') > -1
                    ? Buffer.from(await (0, read_or_fetch_1.readOrFetch)(m.url))
                    : await (0, sharp_1.default)(await (0, read_or_fetch_1.readOrFetch)(m.url), {
                        animated: (0, mime_types_1.lookup)(m.url) === 'image/gif',
                    })
                        .toFormat('jpeg')
                        .resize({
                        width: 1000,
                    })
                        .toBuffer(), type),
                postId: p.id,
            };
        })))).reduce((acc, val) => {
            if (!val?.id) {
                return acc;
            }
            acc[val.postId] = acc[val.postId] || [];
            acc[val.postId].push(val.id);
            return acc;
        }, {});
        const media_ids = (uploadAll[firstPost.id] || []).filter((f) => f);
        const data = await this.fetch('https://api.linkedin.com/v2/posts', {
            method: 'POST',
            headers: {
                'X-Restli-Protocol-Version': '2.0.0',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                author: type === 'personal'
                    ? `urn:li:person:${id}`
                    : `urn:li:organization:${id}`,
                commentary: this.fixText(firstPost.message),
                visibility: 'PUBLIC',
                distribution: {
                    feedDistribution: 'MAIN_FEED',
                    targetEntities: [],
                    thirdPartyDistributionChannels: [],
                },
                ...(media_ids.length > 0
                    ? {
                        content: {
                            ...(media_ids.length === 0
                                ? {}
                                : media_ids.length === 1
                                    ? {
                                        media: {
                                            id: media_ids[0],
                                        },
                                    }
                                    : {
                                        multiImage: {
                                            images: media_ids.map((id) => ({
                                                id,
                                            })),
                                        },
                                    }),
                        },
                    }
                    : {}),
                lifecycleState: 'PUBLISHED',
                isReshareDisabledByAuthor: false,
            }),
        });
        if (data.status !== 201 && data.status !== 200) {
            throw new Error('Error posting to LinkedIn');
        }
        const topPostId = data.headers.get('x-restli-id');
        const ids = [
            {
                status: 'posted',
                postId: topPostId,
                id: firstPost.id,
                releaseURL: `https://www.linkedin.com/feed/update/${topPostId}`,
            },
        ];
        for (const post of restPosts) {
            const { object } = await (await this.fetch(`https://api.linkedin.com/v2/socialActions/${decodeURIComponent(topPostId)}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                    actor: type === 'personal'
                        ? `urn:li:person:${id}`
                        : `urn:li:organization:${id}`,
                    object: topPostId,
                    message: {
                        text: this.fixText(post.message),
                    },
                }),
            })).json();
            ids.push({
                status: 'posted',
                postId: object,
                id: post.id,
                releaseURL: `https://www.linkedin.com/embed/feed/update/${object}`,
            });
        }
        return ids;
    }
    async repostPostUsers(integration, originalIntegration, postId, information, isPersonal = true) {
        try {
            await this.fetch(`https://api.linkedin.com/rest/posts`, {
                body: JSON.stringify({
                    author: (isPersonal ? 'urn:li:person:' : `urn:li:organization:`) +
                        `${integration.internalId}`,
                    commentary: '',
                    visibility: 'PUBLIC',
                    distribution: {
                        feedDistribution: 'MAIN_FEED',
                        targetEntities: [],
                        thirdPartyDistributionChannels: [],
                    },
                    lifecycleState: 'PUBLISHED',
                    isReshareDisabledByAuthor: false,
                    reshareContext: {
                        parent: postId,
                    },
                }),
                method: 'POST',
                headers: {
                    'X-Restli-Protocol-Version': '2.0.0',
                    'Content-Type': 'application/json',
                    'LinkedIn-Version': '202402',
                    Authorization: `Bearer ${integration.token}`,
                },
            });
        }
        catch (err) {
            return;
        }
    }
}
exports.LinkedinProvider = LinkedinProvider;
tslib_1.__decorate([
    (0, post_plug_1.PostPlug)({
        identifier: 'linkedin-repost-post-users',
        title: 'Add Re-posters',
        description: 'Add accounts to repost your post',
        pickIntegration: ['linkedin', 'linkedin-page'],
        fields: [],
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LinkedinProvider.prototype, "repostPostUsers", null);


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedditProvider = void 0;
const make_is_1 = __webpack_require__(16);
const timer_1 = __webpack_require__(63);
const lodash_1 = __webpack_require__(38);
const social_abstract_1 = __webpack_require__(62);
class RedditProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'reddit';
        this.name = 'Reddit';
        this.isBetweenSteps = false;
        this.scopes = ['read', 'identity', 'submit', 'flair'];
    }
    async refreshToken(refreshToken) {
        const { access_token: accessToken, refresh_token: newRefreshToken, expires_in: expiresIn, } = await (await this.fetch('https://www.reddit.com/api/v1/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(`${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`).toString('base64')}`,
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
            }),
        })).json();
        const { name, id, icon_img } = await (await this.fetch('https://oauth.reddit.com/api/v1/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        return {
            id,
            name,
            accessToken,
            refreshToken: newRefreshToken,
            expiresIn,
            picture: icon_img.split('?')[0],
            username: name,
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        const codeVerifier = (0, make_is_1.makeId)(30);
        const url = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REDDIT_CLIENT_ID}&response_type=code&state=${state}&redirect_uri=${encodeURIComponent(`${process.env.FRONTEND_URL}/integrations/social/reddit`)}&duration=permanent&scope=${encodeURIComponent(this.scopes.join(' '))}`;
        return {
            url,
            codeVerifier,
            state,
        };
    }
    async authenticate(params) {
        const { access_token: accessToken, refresh_token: refreshToken, expires_in: expiresIn, scope, } = await (await this.fetch('https://www.reddit.com/api/v1/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(`${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`).toString('base64')}`,
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: params.code,
                redirect_uri: `${process.env.FRONTEND_URL}/integrations/social/reddit`,
            }),
        })).json();
        this.checkScopes(this.scopes, scope);
        const { name, id, icon_img } = await (await this.fetch('https://oauth.reddit.com/api/v1/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        return {
            id,
            name,
            accessToken,
            refreshToken,
            expiresIn,
            picture: icon_img.split('?')[0],
            username: name,
        };
    }
    async post(id, accessToken, postDetails) {
        const [post, ...rest] = postDetails;
        const valueArray = [];
        for (const firstPostSettings of post.settings.subreddit) {
            const postData = {
                api_type: 'json',
                title: firstPostSettings.value.title || '',
                kind: firstPostSettings.value.type === 'media'
                    ? 'image'
                    : firstPostSettings.value.type,
                ...(firstPostSettings.value.flair
                    ? { flair_id: firstPostSettings.value.flair.id }
                    : {}),
                ...(firstPostSettings.value.type === 'link'
                    ? {
                        url: firstPostSettings.value.url,
                    }
                    : {}),
                ...(firstPostSettings.value.type === 'media'
                    ? {
                        url: `${firstPostSettings.value.media[0].path.indexOf('http') === -1
                            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads`
                            : ``}${firstPostSettings.value.media[0].path}`,
                    }
                    : {}),
                text: post.message,
                sr: firstPostSettings.value.subreddit,
            };
            const { json: { data: { id, name, url }, }, } = await (await this.fetch('https://oauth.reddit.com/api/submit', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(postData),
            })).json();
            valueArray.push({
                postId: id,
                releaseURL: url,
                id: post.id,
                status: 'published',
            });
            for (const comment of rest) {
                const { json: { data: { things: [{ data: { id: commentId, permalink }, },], }, }, } = await (await this.fetch('https://oauth.reddit.com/api/comment', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        text: comment.message,
                        thing_id: name,
                        api_type: 'json',
                    }),
                })).json();
                // console.log(JSON.stringify(allTop, null, 2), JSON.stringify(allJson, null, 2), JSON.stringify(allData, null, 2));
                valueArray.push({
                    postId: commentId,
                    releaseURL: 'https://www.reddit.com' + permalink,
                    id: comment.id,
                    status: 'published',
                });
                if (rest.length > 1) {
                    await (0, timer_1.timer)(5000);
                }
            }
            if (post.settings.subreddit.length > 1) {
                await (0, timer_1.timer)(5000);
            }
        }
        return Object.values((0, lodash_1.groupBy)(valueArray, (p) => p.id)).map((p) => ({
            id: p[0].id,
            postId: p.map((p) => p.postId).join(','),
            releaseURL: p.map((p) => p.releaseURL).join(','),
            status: 'published',
        }));
    }
    async subreddits(accessToken, data) {
        const { data: { children }, } = await (await this.fetch(`https://oauth.reddit.com/subreddits/search?show=public&q=${data.word}&sort=activity&show_users=false&limit=10`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })).json();
        return children
            .filter(({ data }) => data.subreddit_type === 'public' && data.submission_type !== 'image')
            .map(({ data: { title, url, id } }) => ({
            title,
            name: url,
            id,
        }));
    }
    getPermissions(submissionType, allow_images) {
        const permissions = [];
        if (['any', 'self'].indexOf(submissionType) > -1) {
            permissions.push('self');
        }
        if (['any', 'link'].indexOf(submissionType) > -1) {
            permissions.push('link');
        }
        // if (submissionType === 'any' || allow_images) {
        //   permissions.push('media');
        // }
        return permissions;
    }
    async restrictions(accessToken, data) {
        const { data: { submission_type, allow_images }, } = await (await this.fetch(`https://oauth.reddit.com/${data.subreddit}/about`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })).json();
        const { is_flair_required } = await (await this.fetch(`https://oauth.reddit.com/api/v1/${data.subreddit.split('/r/')[1]}/post_requirements`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })).json();
        // eslint-disable-next-line no-async-promise-executor
        const newData = await new Promise(async (res) => {
            try {
                const flair = await (await this.fetch(`https://oauth.reddit.com/${data.subreddit}/api/link_flair_v2`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })).json();
                res(flair);
            }
            catch (err) {
                return res([]);
            }
        });
        return {
            subreddit: data.subreddit,
            allow: this.getPermissions(submission_type, allow_images),
            is_flair_required,
            flairs: newData?.map?.((p) => ({
                id: p.id,
                name: p.text,
            })) || [],
        };
    }
}
exports.RedditProvider = RedditProvider;


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DevToProvider = void 0;
class DevToProvider {
    constructor() {
        this.identifier = 'devto';
        this.name = 'Dev.to';
    }
    async authenticate(token) {
        const { name, id, profile_image, username } = await (await fetch('https://dev.to/api/users/me', {
            headers: {
                'api-key': token,
            },
        })).json();
        return {
            id,
            name,
            token,
            picture: profile_image,
            username
        };
    }
    async tags(token) {
        const tags = await (await fetch('https://dev.to/api/tags?per_page=1000&page=1', {
            headers: {
                'api-key': token,
            },
        })).json();
        return tags.map((p) => ({ value: p.id, label: p.name }));
    }
    async organizations(token) {
        const orgs = await (await fetch('https://dev.to/api/articles/me/all?per_page=1000', {
            headers: {
                'api-key': token,
            },
        })).json();
        const allOrgs = [
            ...new Set(orgs
                .flatMap((org) => org?.organization?.username)
                .filter((f) => f)),
        ];
        const fullDetails = await Promise.all(allOrgs.map(async (org) => {
            return (await fetch(`https://dev.to/api/organizations/${org}`, {
                headers: {
                    'api-key': token,
                },
            })).json();
        }));
        return fullDetails.map((org) => ({
            id: org.id,
            name: org.name,
            username: org.username,
        }));
    }
    async post(token, content, settings) {
        const { id, url } = await (await fetch(`https://dev.to/api/articles`, {
            method: 'POST',
            body: JSON.stringify({
                article: {
                    title: settings.title,
                    body_markdown: content,
                    published: true,
                    main_image: settings?.main_image?.path
                        ? `${settings?.main_image?.path.indexOf('http') === -1
                            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${process.env.NEXT_PUBLIC_UPLOAD_STATIC_DIRECTORY}`
                            : ``}${settings?.main_image?.path}`
                        : undefined,
                    tags: settings?.tags?.map((t) => t.label),
                    organization_id: settings.organization,
                },
            }),
            headers: {
                'Content-Type': 'application/json',
                'api-key': token,
            },
        })).json();
        return {
            postId: String(id),
            releaseURL: url,
        };
    }
}
exports.DevToProvider = DevToProvider;


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HashnodeProvider = void 0;
const hashnode_tags_1 = __webpack_require__(70);
const json_to_graphql_query_1 = __webpack_require__(71);
class HashnodeProvider {
    constructor() {
        this.identifier = 'hashnode';
        this.name = 'Hashnode';
    }
    async authenticate(token) {
        try {
            const { data: { me: { name, id, profilePicture, username }, }, } = await (await fetch('https://gql.hashnode.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`,
                },
                body: JSON.stringify({
                    query: `
                    query {
                      me {
                        name,
                        id,
                        profilePicture
                        username
                      }
                    }
                `,
                }),
            })).json();
            return {
                id,
                name,
                token,
                picture: profilePicture,
                username
            };
        }
        catch (err) {
            return {
                id: '',
                name: '',
                token: '',
                picture: '',
                username: ''
            };
        }
    }
    async tags() {
        return hashnode_tags_1.tags.map((tag) => ({ value: tag.objectID, label: tag.name }));
    }
    async publications(token) {
        const { data: { me: { publications: { edges }, }, }, } = await (await fetch('https://gql.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${token}`,
            },
            body: JSON.stringify({
                query: `
            query {
              me {
                publications (first: 50) {
                  edges{
                    node {
                      id
                      title
                    }
                  }
                }
              }
            }
                `,
            }),
        })).json();
        return edges.map(({ node: { id, title } }) => ({
            id,
            name: title,
        }));
    }
    async post(token, content, settings) {
        const query = (0, json_to_graphql_query_1.jsonToGraphQLQuery)({
            mutation: {
                publishPost: {
                    __args: {
                        input: {
                            title: settings.title,
                            publicationId: settings.publication,
                            ...(settings.canonical
                                ? { originalArticleURL: settings.canonical }
                                : {}),
                            contentMarkdown: content,
                            tags: settings.tags.map((tag) => ({ id: tag.value })),
                            ...(settings.subtitle ? { subtitle: settings.subtitle } : {}),
                            ...(settings.main_image
                                ? {
                                    coverImageOptions: {
                                        coverImageURL: `${settings?.main_image?.path?.indexOf('http') === -1
                                            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${process.env.NEXT_PUBLIC_UPLOAD_STATIC_DIRECTORY}`
                                            : ``}${settings?.main_image?.path}`,
                                    },
                                }
                                : {}),
                        },
                    },
                    post: {
                        id: true,
                        url: true,
                    },
                },
            },
        }, { pretty: true });
        const { data: { publishPost: { post: { id, url }, }, }, } = await (await fetch('https://gql.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${token}`,
            },
            body: JSON.stringify({
                query,
            }),
        })).json();
        return {
            postId: id,
            releaseURL: url,
        };
    }
}
exports.HashnodeProvider = HashnodeProvider;


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tags = void 0;
exports.tags = [
    {
        "name": "JavaScript",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513320898547/BJjpblWfG.png",
        "slug": "javascript",
        "objectID": "56744721958ef13879b94cad"
    },
    {
        "name": "General Programming",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1535648192079/H1daWiBvQ.png",
        "slug": "programming",
        "objectID": "56744721958ef13879b94c7e"
    },
    {
        "name": "React",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513321478077/ByCWNxZMf.png",
        "slug": "reactjs",
        "objectID": "56744723958ef13879b95434"
    },
    {
        "name": "Web Development",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450469658/vdxecajl3uwbprclsctm.jpg",
        "slug": "web-development",
        "objectID": "56744722958ef13879b94f1b"
    },
    {
        "name": "Python",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1534512408213/rJeQpSNIX.png",
        "slug": "python",
        "objectID": "56744721958ef13879b94d67"
    },
    {
        "name": "Node.js",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513321388034/SJV3QgWfz.png",
        "slug": "nodejs",
        "objectID": "56744722958ef13879b94ffb"
    },
    {
        "name": "CSS",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513316949083/By6UMkbfG.png",
        "slug": "css",
        "objectID": "56744721958ef13879b94b91"
    },
    {
        "name": "beginners",
        "slug": "beginners",
        "objectID": "56744723958ef13879b955a9"
    },
    {
        "name": "Java",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1534512378322/H1gM-pH4UQ.png",
        "slug": "java",
        "objectID": "56744721958ef13879b94c9f"
    },
    {
        "name": "Developer",
        "slug": "developer",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1554321431158/MqVqSHr8Q.jpeg",
        "objectID": "56744723958ef13879b952d7"
    },
    {
        "name": "HTML5",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513322217442/SkZlDeWzz.png",
        "slug": "html5",
        "objectID": "56744723958ef13879b95483"
    },
    {
        "name": "2Articles1Week",
        "slug": "2articles1week",
        "logo": "",
        "objectID": "5f058ab0c9763d47e2d2eedc"
    },
    {
        "name": "learning",
        "slug": "learning",
        "objectID": "56744723958ef13879b9532b"
    },
    {
        "name": "PHP",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513177307594/rJ4Jba0-G.png",
        "slug": "php",
        "objectID": "56744722958ef13879b94fd9"
    },
    {
        "name": "AWS",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450468151/vmrnzobr1lonnigttn3c.png",
        "slug": "aws",
        "objectID": "56744721958ef13879b94bc5"
    },
    {
        "name": "Tutorial",
        "slug": "tutorial",
        "objectID": "56744720958ef13879b947ce"
    },
    {
        "name": "programming blogs",
        "slug": "programming-blogs",
        "objectID": "56744721958ef13879b94ae7"
    },
    {
        "name": "coding",
        "slug": "coding",
        "objectID": "56744723958ef13879b954c1"
    },
    {
        "name": "Go Language",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1534512687168/S1D40rVLm.png",
        "slug": "go",
        "objectID": "56744721958ef13879b94bd0"
    },
    {
        "name": "Frontend Development",
        "slug": "frontend-development",
        "objectID": "56a399f292921b8f79d3633c"
    },
    {
        "name": "GitHub",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513321555902/BkhLElZMG.png",
        "slug": "github",
        "objectID": "56744721958ef13879b94c63"
    },
    {
        "name": "Hashnode",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1619605440273/S3_X4Rf7V.jpeg",
        "slug": "hashnode",
        "objectID": "567ae5a72b926c3063c3061a"
    },
    {
        "name": "Python 3",
        "slug": "python3",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1503468096/axvqxfbcm0b7ourhshj7.jpg",
        "objectID": "56744723958ef13879b95342"
    },
    {
        "name": "Codenewbies",
        "slug": "codenewbies",
        "objectID": "5f22b52283e4e9440619af83"
    },
    {
        "name": "webdev",
        "slug": "webdev",
        "objectID": "56744723958ef13879b952af"
    },
    {
        "name": "Machine Learning",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513321644252/Sk43El-fz.png",
        "slug": "machine-learning",
        "objectID": "56744722958ef13879b950a8"
    },
    {
        "name": "General Advice",
        "slug": "general-advice",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1516183731966/B13heohVM.jpeg",
        "objectID": "56fe3b2e7a82968f9f7d51c1"
    },
    {
        "name": "software development",
        "slug": "software-development",
        "objectID": "56744721958ef13879b94ad1"
    },
    {
        "name": "CSS3",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513316988840/r1Htz1Wzz.png",
        "slug": "css3",
        "objectID": "56744721958ef13879b94b21"
    },
    {
        "name": "Android",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450468271/qbj34hxd8981nfdugyph.png",
        "slug": "android",
        "objectID": "56744723958ef13879b953d0"
    },
    {
        "name": "Productivity",
        "slug": "productivity",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1497250361/v3sij4jc8hz9xoic22eq.png",
        "objectID": "56744721958ef13879b94a60"
    },
    {
        "name": "React Native",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1475235386/rkij45wit50lfpkbte5q.jpg",
        "slug": "react-native",
        "objectID": "56744722958ef13879b94f4d"
    },
    {
        "name": "100DaysOfCode",
        "slug": "100daysofcode",
        "objectID": "576ab68f152618ad1dc938ad"
    },
    {
        "name": "Design",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513324674454/r1qtxW-zf.png",
        "slug": "design",
        "objectID": "56744722958ef13879b94e89"
    },
    {
        "name": "Devops",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496913014/cnvm0znfqcrwelhgtblb.png",
        "slug": "devops",
        "objectID": "56744723958ef13879b9550d"
    },
    {
        "name": "Open Source",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496913431/hdg1q4zbmobhrq0csomm.png",
        "slug": "opensource",
        "objectID": "56744722958ef13879b94f32"
    },
    {
        "name": "Git",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1473706112/l2hom2y5xxpgwlgg0sz0.jpg",
        "slug": "git",
        "objectID": "56744723958ef13879b9526c"
    },
    {
        "name": "HTML",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513322147587/Hk2jIxZGG.png",
        "slug": "html",
        "objectID": "56744722958ef13879b94f96"
    },
    {
        "name": "data science",
        "slug": "data-science",
        "objectID": "56744721958ef13879b94e35"
    },
    {
        "name": "Testing",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450619295/xszq3zb8t6rmgg6regon.png",
        "slug": "testing",
        "objectID": "56744723958ef13879b9549b"
    },
    {
        "name": "Linux",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450641462/ogpsvoxw5kt8aksuiptj.png",
        "slug": "linux",
        "objectID": "56744721958ef13879b94b55"
    },
    {
        "name": "Security",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1472744837/bnzk4gvspiy66dsmw9ku.png",
        "slug": "security",
        "objectID": "56744722958ef13879b94fb7"
    },
    {
        "name": "Laravel",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1454754733/exjubzyuvwz0pvvpxxwv.jpg",
        "slug": "laravel",
        "objectID": "56744721958ef13879b94a83"
    },
    {
        "name": "TypeScript",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1470054384/fuy3ypcjuj4cwdz4qpxn.jpg",
        "slug": "typescript",
        "objectID": "56744723958ef13879b954e0"
    },
    {
        "name": "APIs",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450468334/jirjz7cc54l2mstzpaab.png",
        "slug": "apis",
        "objectID": "56744723958ef13879b95245"
    },
    {
        "name": "Ruby",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1534512722989/BksL0SELm.png",
        "slug": "ruby",
        "objectID": "56744721958ef13879b94c0a"
    },
    {
        "name": "Vue.js",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1505294440/t5igqu22z1s86xa7nkqi.png",
        "slug": "vuejs",
        "objectID": "56744722958ef13879b950e4"
    },
    {
        "name": "technology",
        "slug": "technology",
        "objectID": "56744721958ef13879b94d26"
    },
    {
        "name": "Docker",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1453789075/ryxk99vk41tdn8bo28m4.png",
        "slug": "docker",
        "objectID": "56744721958ef13879b94b77"
    },
    {
        "name": "programming languages",
        "slug": "programming-languages",
        "objectID": "579a67e2cec33eafc07249c7"
    },
    {
        "name": "Programming Tips",
        "slug": "programming-tips",
        "objectID": "5f398753c4d5973f55c912fb"
    },
    {
        "name": "Cloud",
        "slug": "cloud",
        "objectID": "56744721958ef13879b94938"
    },
    {
        "name": "Blogging",
        "slug": "blogging",
        "objectID": "56744721958ef13879b949aa"
    },
    {
        "name": "newbie",
        "slug": "newbie",
        "objectID": "56744720958ef13879b947e8"
    },
    {
        "name": "Career",
        "slug": "career",
        "objectID": "56aa13e5f28f9d9d99e3a5de"
    },
    {
        "name": "Swift",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1534512662717/Sy1XAHNLQ.png",
        "slug": "swift",
        "objectID": "56744722958ef13879b94ead"
    },
    {
        "name": "Flutter Community",
        "slug": "flutter",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1560841840250/KhofPXnAk.jpeg",
        "objectID": "56744722958ef13879b9507c"
    },
    {
        "name": "python beginner",
        "slug": "python-beginner",
        "objectID": "5f3867d1c4d5973f55c90b8b"
    },
    {
        "name": "Software Engineering",
        "slug": "software-engineering",
        "objectID": "569d22c892921b8f79d35f68"
    },
    {
        "name": "learn coding",
        "slug": "learn-coding",
        "objectID": "5f3f40bfdfbb4247f7c14d4c"
    },
    {
        "name": "MongoDB",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450467711/awgzya1xei3pgch5b8xu.png",
        "slug": "mongodb",
        "objectID": "56744722958ef13879b94f6f"
    },
    {
        "name": "iOS",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450468231/t4x2aoglmhhz9yw3ezry.png",
        "slug": "ios",
        "objectID": "56744722958ef13879b94f11"
    },
    {
        "name": "algorithms",
        "slug": "algorithms",
        "objectID": "56744721958ef13879b94a8d"
    },
    {
        "name": "Web Design",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450622407/deczahnypldw1ftbdxog.png",
        "slug": "web-design",
        "objectID": "56744721958ef13879b94d32"
    },
    {
        "name": "Databases",
        "slug": "databases",
        "objectID": "56744722958ef13879b950eb"
    },
    {
        "name": "ES6",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1534512767931/S1dYCSNIm.png",
        "slug": "es6",
        "objectID": "56744723958ef13879b954cb"
    },
    {
        "name": "Learning Journey",
        "slug": "learning-journey",
        "objectID": "5f9435c7fbdce372c9a56fb6"
    },
    {
        "name": "Blockchain",
        "slug": "blockchain",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1540281064342/rkle7U3sQ.png",
        "objectID": "5690224191716a2d1dbadbc1"
    },
    {
        "name": "data structures",
        "slug": "data-structures",
        "objectID": "56744722958ef13879b951bb"
    },
    {
        "name": "Redux",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513322046756/HyPSUgWMG.png",
        "slug": "redux",
        "objectID": "56744723958ef13879b95567"
    },
    {
        "name": "backend",
        "slug": "backend",
        "objectID": "56744722958ef13879b950bd"
    },
    {
        "name": "C#",
        "slug": "csharp",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1534512595400/HkoATH48Q.png",
        "objectID": "56744721958ef13879b94a30"
    },
    {
        "name": "Startups",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1459504275/iksgbnwvscz6zjzk5nhe.jpg",
        "slug": "startups",
        "objectID": "56744721958ef13879b94b5b"
    },
    {
        "name": "Django",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1475235489/g7q2vh5igqcxo8jlfwl9.jpg",
        "slug": "django",
        "objectID": "56744722958ef13879b94e81"
    },
    {
        "name": "UX",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1474023086/dnrwfr6sxylhx60mp26j.png",
        "slug": "ux",
        "objectID": "56744722958ef13879b94e9d"
    },
    {
        "name": "interview",
        "slug": "interview",
        "objectID": "56744720958ef13879b947e1"
    },
    {
        "name": "Visual Studio Code",
        "slug": "vscode",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1497045716/r3myqwr6m8olahqaxl5x.png",
        "objectID": "57323a8bae9d49b5a5a5b39c"
    },
    {
        "name": "internships",
        "slug": "internships",
        "objectID": "56744720958ef13879b94811"
    },
    {
        "name": "Next.js",
        "slug": "nextjs",
        "objectID": "584879f0c0aaf085e2012086"
    },
    {
        "name": "Kubernetes",
        "slug": "kubernetes",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1554318943530/J-r4NJeEi.png",
        "objectID": "56744723958ef13879b9522c"
    },
    {
        "name": "Computer Science",
        "slug": "computer-science",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1514959838703/BkDJVxqQM.jpeg",
        "objectID": "56744722958ef13879b9512b"
    },
    {
        "name": "REST API",
        "slug": "rest-api",
        "objectID": "56b1208d04f0061506b360ff"
    },
    {
        "name": "business",
        "slug": "business",
        "objectID": "56744723958ef13879b952a1"
    },
    {
        "name": "automation",
        "slug": "automation",
        "objectID": "56744723958ef13879b9535d"
    },
    {
        "name": "Kotlin",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1458728299/fuo7n9epkkxyafihrlhz.jpg",
        "slug": "kotlin",
        "objectID": "56c2f39e850906a7da47cdeb"
    },
    {
        "name": "Google",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450469897/djpesw0ajrbxvmlyoezx.png",
        "slug": "google",
        "objectID": "56744723958ef13879b95470"
    },
    {
        "name": "app development",
        "slug": "app-development",
        "objectID": "56744720958ef13879b947c4"
    },
    {
        "name": "Azure",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1524473475544/B1ntAzsnM.jpeg",
        "slug": "azure",
        "objectID": "56744721958ef13879b94d89"
    },
    {
        "name": "Game Development",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1473275923/lhhroyopcm9gpfvqxe44.jpg",
        "slug": "game-development",
        "objectID": "56744723958ef13879b953f2"
    },
    {
        "name": "C++",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1534512626199/BkcgCSNUm.png",
        "slug": "cpp",
        "objectID": "56744721958ef13879b948b7"
    },
    {
        "name": "js",
        "slug": "js",
        "objectID": "56744721958ef13879b94bf5"
    },
    {
        "name": "UI",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1487144606/jy8ee18buuag2zbsbqai.png",
        "slug": "ui",
        "objectID": "56744723958ef13879b954f5"
    },
    {
        "name": "Mobile Development",
        "slug": "mobile-development",
        "objectID": "568a9b8ce4c4e23aef243c1f"
    },
    {
        "name": "Cloud Computing",
        "slug": "cloud-computing",
        "objectID": "56744723958ef13879b9533a"
    },
    {
        "name": "frontend",
        "slug": "frontend",
        "objectID": "56744721958ef13879b94d0f"
    },
    {
        "name": "Artificial Intelligence",
        "slug": "artificial-intelligence",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496737518/sgflljcm3hidlvipsriq.png",
        "objectID": "56744721958ef13879b94927"
    },
    {
        "name": "npm",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1460372304/ovff2sszokeskrwdfjjv.png",
        "slug": "npm",
        "objectID": "56744723958ef13879b95322"
    },
    {
        "name": "development",
        "slug": "development",
        "objectID": "56744721958ef13879b94d9b"
    },
    {
        "name": "Ruby on Rails",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1475235552/twnpcxcm29mub2gez4yf.jpg",
        "slug": "ruby-on-rails",
        "objectID": "56744722958ef13879b94ff1"
    },
    {
        "name": "WordPress",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450732925/vndlqh4zwgqoy6kbcs0j.jpg",
        "slug": "wordpress",
        "objectID": "56744721958ef13879b94beb"
    },
    {
        "name": "tips",
        "slug": "tips",
        "objectID": "56744723958ef13879b95319"
    },
    {
        "name": "javascript framework",
        "slug": "javascript-framework",
        "objectID": "56744723958ef13879b95527"
    },
    {
        "name": "Technical writing ",
        "slug": "technical-writing-1",
        "objectID": "5f3330322a23d9080d17a0da"
    },
    {
        "name": "Express",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513936680781/HJbEP8qzM.png",
        "slug": "express",
        "objectID": "56744721958ef13879b9487d"
    },
    {
        "name": "serverless",
        "slug": "serverless",
        "objectID": "57979f8dcec33eafc07247a2"
    },
    {
        "name": "Angular",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450469536/svgqrg8jtoqihqdffiai.jpg",
        "slug": "angular",
        "objectID": "56744722958ef13879b94f59"
    },
    {
        "name": "DevLife",
        "slug": "devlife",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1516175805632/HkL6WK3Ez.jpeg",
        "objectID": "592fe1bf8515388d7dfc2650"
    },
    {
        "name": "Functional Programming",
        "slug": "functional-programming",
        "objectID": "568f5c6beea132481d017c36"
    },
    {
        "name": "programmer",
        "slug": "programmer",
        "objectID": "568409636b179c61d167f05d"
    },
    {
        "name": "python projects",
        "slug": "python-projects",
        "objectID": "5f76046e37eb052c1b80da9f"
    },
    {
        "name": "MySQL",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496912606/hclufcmqr2btz24a6egj.png",
        "slug": "mysql",
        "objectID": "56744721958ef13879b94dff"
    },
    {
        "name": "Dart",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450601337/v7ng3klyzehzxtbjoym9.png",
        "slug": "dart",
        "objectID": "56744721958ef13879b94df0"
    },
    {
        "name": "Firebase",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1464240463/xo1rbiqimh25bmlgwb3g.jpg",
        "slug": "firebase",
        "objectID": "56744722958ef13879b94e99"
    },
    {
        "name": "Windows",
        "slug": "windows",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1554134710664/jnLVaVy-N.png",
        "objectID": "56744723958ef13879b953f7"
    },
    {
        "name": "code",
        "slug": "code",
        "objectID": "56744721958ef13879b94982"
    },
    {
        "name": "GraphQL",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1475235506/qbofja8kwx8cw8nuyaqg.jpg",
        "slug": "graphql",
        "objectID": "56744723958ef13879b9555c"
    },
    {
        "name": "SEO",
        "slug": "seo",
        "objectID": "56744722958ef13879b9519c"
    },
    {
        "name": "ReactHooks",
        "slug": "reacthooks",
        "objectID": "5f8523be6ad92638db4944a9"
    },
    {
        "name": "#beginners #learningtocode #100daysofcode",
        "slug": "beginners-learningtocode-100daysofcode",
        "objectID": "5f789ec19c3b6e410121699a"
    },
    {
        "name": "hacking",
        "slug": "hacking",
        "objectID": "56744723958ef13879b9553a"
    },
    {
        "name": "Cryptocurrency",
        "slug": "cryptocurrency",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1512988849862/SJ5heynZG.png",
        "objectID": "58e4c1144d64a3de3e94b31b"
    },
    {
        "name": "SQL",
        "slug": "sql",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1501338352/cv7owxtxvr39rjzxoolr.png",
        "objectID": "56744723958ef13879b953ed"
    },
    {
        "name": "hashnodebootcamp",
        "slug": "hashnodebootcamp",
        "objectID": "5f75f322b7a1d82bf9b34c6d"
    },
    {
        "name": "Tailwind CSS",
        "slug": "tailwind-css",
        "objectID": "5f4ebbb150b5c61ec6ef4ad2"
    },
    {
        "name": "webpack",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1457865805/st9hz4f5ufmpxhizmfpk.jpg",
        "slug": "webpack",
        "objectID": "56744722958ef13879b95055"
    },
    {
        "name": "learn",
        "slug": "learn",
        "objectID": "56a2235672ca04ea5d7a00c2"
    },
    {
        "name": "first post",
        "slug": "first-post-1",
        "objectID": "5f08ee681981c53c4987f2b3"
    },
    {
        "name": "design patterns",
        "slug": "design-patterns",
        "objectID": "56744721958ef13879b94968"
    },
    {
        "name": "ai",
        "slug": "ai",
        "objectID": "56744721958ef13879b9488e"
    },
    {
        "name": "Microservices",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1479724330/cpcqfxm9af8d8esgo8wp.jpg",
        "slug": "microservices",
        "objectID": "56744721958ef13879b948a2"
    },
    {
        "name": "data analysis",
        "slug": "data-analysis",
        "objectID": "56744722958ef13879b951ac"
    },
    {
        "name": "best practices",
        "slug": "best-practices",
        "objectID": "56744723958ef13879b95598"
    },
    {
        "name": "beginner",
        "slug": "beginner",
        "objectID": "56744723958ef13879b952b6"
    },
    {
        "name": "Deep Learning",
        "slug": "deep-learning",
        "objectID": "578f611523e94ba91a5bebd8"
    },
    {
        "name": "Ubuntu",
        "slug": "ubuntu",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496151690/x8g04hsjiekjgkkuhrk7.png",
        "objectID": "56744721958ef13879b94988"
    },
    {
        "name": "C",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1475235467/zfbdpx1pe00glfy6lc6b.jpg",
        "slug": "c",
        "objectID": "56744721958ef13879b9492c"
    },
    {
        "name": "MERN Stack",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1534512793459/Hk-s0B4Im.png",
        "slug": "mern",
        "objectID": "56c32d8c316f8ee15e9e0fde"
    },
    {
        "name": "education",
        "slug": "education",
        "objectID": "56b631c8e6740d0959b6f3ef"
    },
    {
        "name": "authentication",
        "slug": "authentication",
        "objectID": "56744721958ef13879b94b00"
    },
    {
        "name": "community",
        "slug": "community",
        "objectID": "56744722958ef13879b9514c"
    },
    {
        "name": "marketing",
        "slug": "marketing",
        "objectID": "57449fa89ade925885158d1e"
    },
    {
        "name": "Hello World",
        "slug": "hello-world",
        "objectID": "591d0f67b5bbb96606f07af4"
    },
    {
        "name": "tools",
        "slug": "tools",
        "objectID": "56744721958ef13879b94e0c"
    },
    {
        "name": "ecommerce",
        "slug": "ecommerce",
        "objectID": "56744722958ef13879b95041"
    },
    {
        "name": "news",
        "slug": "news",
        "objectID": "56744721958ef13879b9493e"
    },
    {
        "name": "Microsoft",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450622053/ioqfwklxmzqwwy7jrxmj.png",
        "slug": "microsoft",
        "objectID": "56744721958ef13879b94d1d"
    },
    {
        "name": "jQuery",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450815745/cd8sl0j2hkeuoq2isuc3.png",
        "slug": "jquery",
        "objectID": "56744721958ef13879b94c2b"
    },
    {
        "name": "Javascript library",
        "slug": "javascript-library",
        "objectID": "568fa207525da8063d08fb68"
    },
    {
        "name": "data",
        "slug": "data",
        "objectID": "56744721958ef13879b949d3"
    },
    {
        "name": "clean code",
        "slug": "clean-code",
        "objectID": "573504d39835efadc8742016"
    },
    {
        "name": "web",
        "slug": "web",
        "objectID": "56744722958ef13879b94f40"
    },
    {
        "name": "programing",
        "slug": "programing",
        "objectID": "56ab1a78f28f9d9d99e3a6d1"
    },
    {
        "name": "tech ",
        "slug": "tech",
        "objectID": "5677de7c7dd5d4174dcc2073"
    },
    {
        "name": "Mobile apps",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450619495/qiwhbnoxoas2b5dtb6cx.png",
        "slug": "mobile-apps",
        "objectID": "56744721958ef13879b94c5b"
    },
    {
        "name": "performance",
        "slug": "performance",
        "objectID": "56744721958ef13879b94dc4"
    },
    {
        "name": "UI Design",
        "slug": "ui-design",
        "objectID": "5682df44aeae5c9e229cf9f9"
    },
    {
        "name": "PostgreSQL",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1460706552/iwl62ldvrzgf4k9rhame.jpg",
        "slug": "postgresql",
        "objectID": "56744721958ef13879b949b5"
    },
    {
        "name": "Rust",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1534512703511/HJDSCr4UQ.png",
        "slug": "rust",
        "objectID": "5684bee6bf03be7d4a9ed853"
    },
    {
        "name": "motivation",
        "slug": "motivation",
        "objectID": "56b0ba4604f0061506b35fae"
    },
    {
        "name": "software architecture",
        "slug": "software-architecture",
        "objectID": "56744722958ef13879b950c9"
    },
    {
        "name": "introduction",
        "slug": "introduction",
        "objectID": "56744721958ef13879b948cc"
    },
    {
        "name": "Bootstrap",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450470158/wpi0t8fj9kr8on9v6jmd.jpg",
        "slug": "bootstrap",
        "objectID": "56744721958ef13879b94be1"
    },
    {
        "name": "networking",
        "slug": "networking",
        "objectID": "56ffbb5d5861692778050361"
    },
    {
        "name": "blog",
        "slug": "blog",
        "objectID": "56744721958ef13879b948ac"
    },
    {
        "name": "jobs",
        "slug": "jobs",
        "objectID": "56a77939281161e11972fdd7"
    },
    {
        "name": "terminal",
        "slug": "terminal",
        "objectID": "56744721958ef13879b94da6"
    },
    {
        "name": "command line",
        "slug": "command-line",
        "objectID": "56744723958ef13879b9539a"
    },
    {
        "name": "website",
        "slug": "website",
        "objectID": "5674471d958ef13879b94785"
    },
    {
        "name": "Developer Tools",
        "slug": "developer-tools",
        "objectID": "57ebac0bd9b08ec06a77be05"
    },
    {
        "name": "aws lambda",
        "slug": "aws-lambda",
        "objectID": "57c7ea36e53060955aa8c0c0"
    },
    {
        "name": "Ethereum",
        "slug": "ethereum",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1512988945062/HJKfZJhWf.png",
        "objectID": "58e4c1144d64a3de3e94b31d"
    },
    {
        "name": "System Architecture",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496913335/duppaieikvyvepmoj6uz.png",
        "slug": "system-architecture",
        "objectID": "56744723958ef13879b955b0"
    },
    {
        "name": "#cybersecurity",
        "slug": "cybersecurity-1",
        "objectID": "5f2e70c0b8ac395b1f23a6cb"
    },
    {
        "name": "linux for beginners",
        "slug": "linux-for-beginners",
        "objectID": "5fa5022a3e634314b5179cf5"
    },
    {
        "name": "Games",
        "slug": "games",
        "objectID": "578f6a105460288cdeb6f2ab"
    },
    {
        "name": "developers",
        "slug": "developers",
        "objectID": "56744722958ef13879b94f05"
    },
    {
        "name": "internet",
        "slug": "internet",
        "objectID": "56f260f15ec781bb472f83af"
    },
    {
        "name": "android app development",
        "slug": "android-app-development",
        "objectID": "56744721958ef13879b94890"
    },
    {
        "name": "full stack",
        "slug": "full-stack",
        "objectID": "56744723958ef13879b95387"
    },
    {
        "name": "server",
        "slug": "server",
        "objectID": "56744721958ef13879b94e17"
    },
    {
        "name": "projects",
        "slug": "projects",
        "objectID": "56744722958ef13879b95074"
    },
    {
        "name": "macOS",
        "slug": "macos",
        "objectID": "576a1d6e13cc2eb2d90e2383"
    },
    {
        "name": "project management",
        "slug": "project-management",
        "objectID": "569d22af46dfdb8479aa6921"
    },
    {
        "name": "writing",
        "slug": "writing",
        "objectID": "5674471d958ef13879b9477e"
    },
    {
        "name": "Flutter Examples",
        "slug": "flutter-examples",
        "objectID": "5f08f6a1b0bf5b3c273ea78b"
    },
    {
        "name": "guide",
        "slug": "guide",
        "objectID": "56744723958ef13879b955a7"
    },
    {
        "name": "deployment",
        "slug": "deployment",
        "objectID": "56744721958ef13879b94dad"
    },
    {
        "name": "array",
        "slug": "array",
        "objectID": "578e290c5460288cdeb6f187"
    },
    {
        "name": "Bash",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1464705930/i6dyhkbiwqezfwbsq4c2.jpg",
        "slug": "bash",
        "objectID": "56744722958ef13879b95119"
    },
    {
        "name": "Bitcoin",
        "slug": "bitcoin",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1512988974934/rJwNWJhZz.png",
        "objectID": "5697e90f46dfdb8479aa6708"
    },
    {
        "name": "Google Chrome",
        "slug": "chrome",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1502183259/uhcfgovkcf3pm66xjsl0.png",
        "objectID": "56744722958ef13879b94f68"
    },
    {
        "name": ".NET",
        "slug": "net",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1515075179602/rkEdLho7G.jpeg",
        "objectID": "56744723958ef13879b9556e"
    },
    {
        "name": "dotnet",
        "slug": "dotnet",
        "objectID": "5794f65abecb9ebac0d5fc55"
    },
    {
        "name": "life",
        "slug": "life",
        "objectID": "57bc257693309a25047c5e43"
    },
    {
        "name": "Twitter",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1464240092/ysal5yejuviop7p7bvbl.png",
        "slug": "twitter",
        "objectID": "56744721958ef13879b949ad"
    },
    {
        "name": "Object Oriented Programming",
        "slug": "object-oriented-programming",
        "objectID": "591e9732ab184fdc3bcd9185"
    },
    {
        "name": "iot",
        "slug": "iot",
        "objectID": "56744723958ef13879b9532f"
    },
    {
        "name": "json",
        "slug": "json",
        "objectID": "56744721958ef13879b94dec"
    },
    {
        "name": "api",
        "slug": "api",
        "objectID": "56744721958ef13879b94c20"
    },
    {
        "name": "Express.js",
        "slug": "expressjs-cilb5apda0066e053g7td7q24",
        "objectID": "56d729602c0ee8a839b966f1"
    },
    {
        "name": "basics",
        "slug": "basics",
        "objectID": "57b75ddd51da93ffde24c7d9"
    },
    {
        "name": "http",
        "slug": "http",
        "objectID": "56744721958ef13879b94c04"
    },
    {
        "name": "Self Improvement ",
        "slug": "self-improvement-1",
        "objectID": "5f2e55763b12e25afe3e4d05"
    },
    {
        "name": "GitLab",
        "slug": "gitlab",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1506019761/umvea3aqsquj7z9ighjt.png",
        "objectID": "56bb10616bd8ce129b0bcc6c"
    },
    {
        "name": "google cloud",
        "slug": "google-cloud",
        "objectID": "56744722958ef13879b951dd"
    },
    {
        "name": "Spring",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1458677282/mtezd0wf8jhhmbgkzo1g.jpg",
        "slug": "spring",
        "objectID": "5674471d958ef13879b94772"
    },
    {
        "name": "selenium",
        "slug": "selenium",
        "objectID": "56a1bb2a92921b8f79d3620f"
    },
    {
        "name": "Gatsby",
        "slug": "gatsby",
        "objectID": "58a37012803129b7f158f514"
    },
    {
        "name": "containers",
        "slug": "containers",
        "objectID": "571f798917ae2452d9887631"
    },
    {
        "name": "resources",
        "slug": "resources",
        "objectID": "56744721958ef13879b94d55"
    },
    {
        "name": "operating system",
        "slug": "operating-system",
        "objectID": "56744721958ef13879b94b09"
    },
    {
        "name": "product",
        "slug": "product",
        "objectID": "577f7bc442d3fa70a37e450e"
    },
    {
        "name": "cms",
        "slug": "cms",
        "objectID": "56744723958ef13879b953ff"
    },
    {
        "name": "ui ux designer",
        "slug": "ui-ux-designer",
        "objectID": "5f7af8bd9c3b6e4101218399"
    },
    {
        "name": "hosting",
        "slug": "hosting",
        "objectID": "56744721958ef13879b94b0f"
    },
    {
        "name": "social media",
        "slug": "social-media",
        "objectID": "5775ff2c57675ec2fcfd086e"
    },
    {
        "name": "debugging",
        "slug": "debugging",
        "objectID": "56744723958ef13879b95372"
    },
    {
        "name": "Heroku",
        "slug": "heroku",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496175418/k6pahvykel6hcfqtkk3d.jpg",
        "objectID": "568935c69a4538cecc3ae55f"
    },
    {
        "name": "software",
        "slug": "software",
        "objectID": "56744721958ef13879b9481e"
    },
    {
        "name": "asp.net core",
        "slug": "aspnet-core",
        "objectID": "56bad3b76bd8ce129b0bcc04"
    },
    {
        "name": "hackathon",
        "slug": "hackathon",
        "objectID": "56744720958ef13879b947d4"
    },
    {
        "name": "framework",
        "slug": "framework",
        "objectID": "56744721958ef13879b94b4d"
    },
    {
        "name": "cli",
        "slug": "cli",
        "objectID": "56744723958ef13879b953a7"
    },
    {
        "name": "array methods",
        "slug": "array-methods",
        "objectID": "5f397a30c4d5973f55c91219"
    },
    {
        "name": "Electron",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1473241164/mqhaydhn8fhejzrsxofr.png",
        "slug": "electron",
        "objectID": "56744723958ef13879b95419"
    },
    {
        "name": "challenge",
        "slug": "challenge",
        "objectID": "56744721958ef13879b949c9"
    },
    {
        "name": "Freelancing",
        "slug": "freelancing",
        "objectID": "56744723958ef13879b953cc"
    },
    {
        "name": "linux-basics",
        "slug": "linux-basics",
        "objectID": "5fb01c1fc03b0e471014f758"
    },
    {
        "name": "portfolio",
        "slug": "portfolio",
        "objectID": "5690e78091716a2d1dbadc0f"
    },
    {
        "name": "functions",
        "slug": "functions",
        "objectID": "56744721958ef13879b94a01"
    },
    {
        "name": "Springboot",
        "slug": "springboot",
        "objectID": "58646144cc0caec55e2fd1d1"
    },
    {
        "name": "youtube",
        "slug": "youtube",
        "objectID": "56ced112f0ec33085f1cc5ab"
    },
    {
        "name": "Browsers",
        "slug": "browsers",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1502183382/psbzjcrqxjjndian3nph.png",
        "objectID": "56744721958ef13879b94d63"
    },
    {
        "name": "vue",
        "slug": "vue",
        "objectID": "570e5021115103c3b09785e1"
    },
    {
        "name": "Flask Framework",
        "slug": "flask",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1518503935975/S1_-_WePM.png",
        "objectID": "56744723958ef13879b95588"
    },
    {
        "name": "HashnodeCommunity",
        "slug": "hashnodecommunity",
        "objectID": "5f3272264332ee07eb55c4bd"
    },
    {
        "name": "Apple",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1465890893/iickievhb3ymoyga6wyw.png",
        "slug": "apple",
        "objectID": "56744721958ef13879b948ba"
    },
    {
        "name": "Business and Finance ",
        "slug": "business-and-finance",
        "objectID": "5f253857669da9610ee1771d"
    },
    {
        "name": "CSS Animation",
        "slug": "css-animation",
        "objectID": "567c03e03f1768f6bf48a678"
    },
    {
        "name": "books",
        "slug": "books",
        "objectID": "56744721958ef13879b94d2a"
    },
    {
        "name": "Technical interview",
        "slug": "technical-interview",
        "objectID": "5f0725a8570e2e29ce255012"
    },
    {
        "name": "PHP7",
        "slug": "php7",
        "objectID": "5680fde5aeae5c9e229cf8e2"
    },
    {
        "name": "side project",
        "slug": "side-project",
        "objectID": "576fa8aca245bcf2e2e91044"
    },
    {
        "name": "personal",
        "slug": "personal",
        "objectID": "56b41c593f1e4ff03c56b4e4"
    },
    {
        "name": "github-actions",
        "slug": "github-actions-1",
        "objectID": "5f4f0f5850b5c61ec6ef4eb4"
    },
    {
        "name": "Facebook",
        "slug": "facebook",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496176300/khcjk48ycpejt19sfgav.png",
        "objectID": "56744721958ef13879b94da0"
    },
    {
        "name": "code review",
        "slug": "code-review",
        "objectID": "56744721958ef13879b949f9"
    },
    {
        "name": "elasticsearch",
        "slug": "elasticsearch",
        "objectID": "56744723958ef13879b95430"
    },
    {
        "name": "TDD (Test-driven development)",
        "slug": "tdd",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1502441836/zcgicxrtkoquz67dlkgs.png",
        "objectID": "56744721958ef13879b94898"
    },
    {
        "name": "Svelte",
        "slug": "svelte",
        "objectID": "583d0951f533d193a2e694d1"
    },
    {
        "name": "Sass",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1490082271/p0drxprfhz9qmkm0txrf.png",
        "slug": "sass",
        "objectID": "56744721958ef13879b94df7"
    },
    {
        "name": "Entrepreneurship",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496913550/abhdc0juuwrn1kfjk966.png",
        "slug": "entrepreneurship",
        "objectID": "567a50052b926c3063c305c9"
    },
    {
        "name": "Bugs and Errors",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1465891233/e2dpkrprraf8jitcvc3i.png",
        "slug": "bugs-and-errors",
        "objectID": "575f9bc3da600b8ef43e5263"
    },
    {
        "name": "android apps",
        "slug": "android-apps",
        "objectID": "590c655dd7c4344afe6c3241"
    },
    {
        "name": "Flutter Widgets",
        "slug": "flutter-widgets",
        "objectID": "5f08f6a1b0bf5b3c273ea78c"
    },
    {
        "name": "documentation",
        "slug": "documentation",
        "objectID": "56744722958ef13879b950f8"
    },
    {
        "name": "Continuous Integration",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1460096831/jeyz4slnhjuflhkqbanb.png",
        "slug": "continuous-integration",
        "objectID": "56744721958ef13879b94de0"
    },
    {
        "name": "version control",
        "slug": "version-control",
        "objectID": "56744722958ef13879b9506b"
    },
    {
        "name": "asynchronous",
        "slug": "asynchronous",
        "objectID": "56744722958ef13879b94e66"
    },
    {
        "name": "Magento",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1487144361/a8xaya1bv8advcuoj90m.png",
        "slug": "magento",
        "objectID": "56eadc94bcca2d711e191c4c"
    },
    {
        "name": "Netlify",
        "slug": "netlify",
        "objectID": "57ce27e495368c463b098050"
    },
    {
        "name": "nginx",
        "slug": "nginx",
        "objectID": "56744722958ef13879b94f8b"
    },
    {
        "name": "web scraping",
        "slug": "web-scraping",
        "objectID": "58dfb250eb0ffea9e764936d"
    },
    {
        "name": "ios app development",
        "slug": "ios-app-development",
        "objectID": "584a50f7e1ffd7084c8b1e6c"
    },
    {
        "name": "Redis",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513324425585/r1M9y-bMM.png",
        "slug": "redis",
        "objectID": "56744721958ef13879b94c41"
    },
    {
        "name": "infrastructure",
        "slug": "infrastructure",
        "objectID": "56a4e1d28e1dd6d05014efdb"
    },
    {
        "name": "shell",
        "slug": "shell",
        "objectID": "56744723958ef13879b95561"
    },
    {
        "name": "CSS Frameworks",
        "slug": "css-frameworks",
        "objectID": "56744721958ef13879b94b82"
    },
    {
        "name": "Responsive Web Design",
        "slug": "responsive-web-design",
        "objectID": "574dc610be8cff2ed6571a40"
    },
    {
        "name": "bootcamp",
        "slug": "bootcamp",
        "objectID": "58d54af36047f98ddcae780b"
    },
    {
        "name": "Competitive programming",
        "slug": "competitive-programming",
        "objectID": "56fb79d4da7018d48c208e91"
    },
    {
        "name": "podcast",
        "slug": "podcast",
        "objectID": "56744722958ef13879b950d3"
    },
    {
        "name": "email",
        "slug": "email",
        "objectID": "56744722958ef13879b95038"
    },
    {
        "name": "Material Design",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1474050455/stm5thxo0n1evvzpl7np.png",
        "slug": "material-design",
        "objectID": "56744722958ef13879b95029"
    },
    {
        "name": "NoSQL",
        "slug": "nosql",
        "objectID": "56744721958ef13879b94b41"
    },
    {
        "name": "markdown",
        "slug": "markdown",
        "objectID": "56744722958ef13879b950b2"
    },
    {
        "name": "components",
        "slug": "components",
        "objectID": "571c5374fc5b53a1ace37ce8"
    },
    {
        "name": "unit testing",
        "slug": "unit-testing",
        "objectID": "56744721958ef13879b94ac4"
    },
    {
        "name": "management",
        "slug": "management",
        "objectID": "56744721958ef13879b948d1"
    },
    {
        "name": "research",
        "slug": "research",
        "objectID": "56744723958ef13879b952cb"
    },
    {
        "name": "Ionic Framework",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1513839196650/HyrD9A_fM.jpeg",
        "slug": "ionic",
        "objectID": "56744721958ef13879b94b62"
    },
    {
        "name": "vim",
        "slug": "vim",
        "objectID": "56744722958ef13879b95126"
    },
    {
        "name": "Accessibility",
        "slug": "accessibility",
        "objectID": "56744723958ef13879b95230"
    },
    {
        "name": "remote",
        "slug": "remote",
        "objectID": "56744721958ef13879b94841"
    },
    {
        "name": "agile",
        "slug": "agile",
        "objectID": "56744723958ef13879b9551b"
    },
    {
        "name": "analytics",
        "slug": "analytics",
        "objectID": "56744721958ef13879b9495b"
    },
    {
        "name": "vscode extensions",
        "slug": "vscode-extensions",
        "objectID": "5f5c6d4213599a5f2e33f00f"
    },
    {
        "name": "statistics",
        "slug": "statistics",
        "objectID": "56744721958ef13879b949ea"
    },
    {
        "name": "react router",
        "slug": "react-router",
        "objectID": "56744721958ef13879b949bc"
    },
    {
        "name": "IDEs",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450468381/x5vcqb3xxe7wdheuopww.png",
        "slug": "ides",
        "objectID": "56744722958ef13879b94eff"
    },
    {
        "name": "forms",
        "slug": "forms",
        "objectID": "56744721958ef13879b948fa"
    },
    {
        "name": "Terraform",
        "slug": "terraform",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1617121672721/6r0bN-GSK.png",
        "objectID": "57bf546693309a25047c6206"
    },
    {
        "name": "animation",
        "slug": "animation",
        "objectID": "56744723958ef13879b95338"
    },
    {
        "name": "Developer Blogging",
        "slug": "developer-blogging",
        "objectID": "5f1c1e25e8769101a9ef64d2"
    },
    {
        "name": "PWA",
        "slug": "pwa",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496404433/rlgbcgsuycivf0ukgxrl.png",
        "objectID": "57cbc5d49b3eb82e014a0320"
    },
    {
        "name": "JAMstack",
        "slug": "jamstack",
        "objectID": "58f9253e01cb858c63429c31"
    },
    {
        "name": "Elixir",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1452000435/svfntjev0f681f6oiptm.png",
        "slug": "elixir",
        "objectID": "56744723958ef13879b95392"
    },
    {
        "name": "dotnetcore",
        "slug": "dotnetcore",
        "objectID": "5794f65abecb9ebac0d5fc56"
    },
    {
        "name": "ShowHashnode",
        "slug": "showhashnode",
        "objectID": "5d946e601971c92f3298b280"
    },
    {
        "name": "coding challenge",
        "slug": "coding-challenge",
        "objectID": "5f16831dfefe35614464e44b"
    },
    {
        "name": "Android Studio",
        "slug": "android-studio",
        "objectID": "5868042db99398bc30c43e77"
    },
    {
        "name": "variables",
        "slug": "variables",
        "objectID": "56744721958ef13879b94863"
    },
    {
        "name": "ci-cd",
        "slug": "ci-cd",
        "objectID": "5f0ed0dd7611e111fbd7194f"
    },
    {
        "name": "nlp",
        "slug": "nlp",
        "objectID": "573a8e38a5dc678fc9090d31"
    },
    {
        "name": "#howtos",
        "slug": "howtos",
        "objectID": "5f18178960b5d372e20d5a86"
    },
    {
        "name": "Web Hosting",
        "slug": "web-hosting",
        "objectID": "571faab486b33947d9bdbab2"
    },
    {
        "name": "oop",
        "slug": "oop",
        "objectID": "5674471d958ef13879b94779"
    },
    {
        "name": "DigitalOcean",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1491567594/mtbp3w2posceqcdj8rx5.jpg",
        "slug": "digitalocean",
        "objectID": "56744721958ef13879b948c3"
    },
    {
        "name": "SVG",
        "slug": "svg",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1500325020/kp4vjytdfuqbhaibiqm7.png",
        "objectID": "56744723958ef13879b95469"
    },
    {
        "name": "promises",
        "slug": "promises",
        "objectID": "56744722958ef13879b951d9"
    },
    {
        "name": "womenwhocode",
        "slug": "womenwhocode",
        "objectID": "5f1fdd28ed20ff21a11e7126"
    },
    {
        "name": "Flutter SDK",
        "slug": "flutter-sdk",
        "objectID": "5f08f6a1b0bf5b3c273ea78a"
    },
    {
        "name": "optimization",
        "slug": "optimization",
        "objectID": "56744721958ef13879b94821"
    },
    {
        "name": "work",
        "slug": "work",
        "objectID": "56a361abff99ae055eeffd33"
    },
    {
        "name": "database",
        "slug": "database",
        "objectID": "56744722958ef13879b950ef"
    },
    {
        "name": "pandas",
        "slug": "pandas",
        "objectID": "56744723958ef13879b953e6"
    },
    {
        "name": "chrome extension",
        "slug": "chrome-extension",
        "objectID": "56b1945b04f0061506b361db"
    },
    {
        "name": "privacy",
        "slug": "privacy",
        "objectID": "56744723958ef13879b952fc"
    },
    {
        "name": "events",
        "slug": "events",
        "objectID": "575d75e2da600b8ef43e506d"
    },
    {
        "name": "ansible",
        "slug": "ansible",
        "objectID": "56744722958ef13879b95152"
    },
    {
        "name": "Mathematics",
        "slug": "mathematics",
        "objectID": "592d60cb8a6f7b0a1195412a"
    },
    {
        "name": "startup",
        "slug": "startup",
        "objectID": "56744721958ef13879b94bbb"
    },
    {
        "name": "music",
        "slug": "music",
        "objectID": "56744721958ef13879b949c6"
    },
    {
        "name": "problem solving skills",
        "slug": "problem-solving-skills",
        "objectID": "5f8560a8e83ccb407537a1ee"
    },
    {
        "name": "review",
        "slug": "review",
        "objectID": "56744723958ef13879b953b4"
    },
    {
        "name": "GIS",
        "slug": "gis",
        "objectID": "57fb4f226849a80ac266ca71"
    },
    {
        "name": "unity",
        "slug": "unity",
        "objectID": "56744721958ef13879b94885"
    },
    {
        "name": "test",
        "slug": "test",
        "objectID": "56744722958ef13879b951d6"
    },
    {
        "name": "TIL",
        "slug": "til",
        "objectID": "5d93238ce235795f6eb6dd79"
    },
    {
        "name": "Auth0",
        "slug": "auth0",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1627916134204/sEaEU0wiP.png",
        "objectID": "56fb1506ea33a5b266f2ffc3"
    },
    {
        "name": "Certification",
        "slug": "certification",
        "objectID": "57d4461ed17cab545cab66de"
    },
    {
        "name": "webdevelopment",
        "slug": "webdevelopment",
        "objectID": "56744721958ef13879b94b20"
    },
    {
        "name": "lifestyle",
        "slug": "lifestyle",
        "objectID": "56744721958ef13879b948f2"
    },
    {
        "name": "course",
        "slug": "course",
        "objectID": "575150c412a8cb07bb842118"
    },
    {
        "name": "Story",
        "slug": "story",
        "objectID": "57348ce934963cba3535abb4"
    },
    {
        "name": "job search",
        "slug": "job-search",
        "objectID": "5f08ee681981c53c4987f2b4"
    },
    {
        "name": "Raspberry Pi",
        "slug": "raspberry-pi",
        "objectID": "56d2cbb4099859fa044d68c0"
    },
    {
        "name": "Amazon Web Services",
        "slug": "amazon-web-services",
        "objectID": "56a6742dc84f2c6913b8eac3"
    },
    {
        "name": "tutorials",
        "slug": "tutorials",
        "objectID": "56744721958ef13879b94dcc"
    },
    {
        "slug": "flutter-cjx3aa7op001jims1kuwl3ekz",
        "objectID": "5d0a3b36c7de780e772aff0a"
    },
    {
        "name": "#data visualisation",
        "slug": "data-visualisation-1",
        "objectID": "5f4b7d61f540845bb26f0291"
    },
    {
        "name": "continuous deployment",
        "slug": "continuous-deployment",
        "objectID": "56744722958ef13879b94f92"
    },
    {
        "name": "video",
        "slug": "video",
        "objectID": "56744723958ef13879b954e9"
    },
    {
        "name": "DOM",
        "slug": "dom",
        "objectID": "56744723958ef13879b95376"
    },
    {
        "name": "search",
        "slug": "search",
        "objectID": "56744721958ef13879b9497b"
    },
    {
        "name": "JWT",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1464240237/bqu9k0lklrg7xxvk2pzq.jpg",
        "slug": "jwt",
        "objectID": "56744723958ef13879b9536e"
    },
    {
        "name": "Interviews",
        "slug": "interviews",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496318621/g6yz7ukrqftqat2y3ycn.png",
        "objectID": "56744721958ef13879b948b1"
    },
    {
        "name": "vanilla-js",
        "slug": "vanilla-js-1",
        "objectID": "5f9aaeaba1658252d1a7b620"
    },
    {
        "name": "monitoring",
        "slug": "monitoring",
        "objectID": "56744723958ef13879b95361"
    },
    {
        "name": "Text Editors",
        "slug": "text-editors",
        "objectID": "571459a7162bdaad9f92b0d7"
    },
    {
        "name": "gaming",
        "slug": "gaming",
        "objectID": "57e951b155544e5132a4d5df"
    },
    {
        "name": "mongoose",
        "slug": "mongoose",
        "objectID": "56744723958ef13879b9540c"
    },
    {
        "name": "SaaS",
        "slug": "saas",
        "objectID": "56744722958ef13879b950a5"
    },
    {
        "name": "content",
        "slug": "content",
        "objectID": "56744721958ef13879b94849"
    },
    {
        "name": "apache",
        "slug": "apache",
        "objectID": "56744723958ef13879b95513"
    },
    {
        "name": "engineering",
        "slug": "engineering",
        "objectID": "56744722958ef13879b950b5"
    },
    {
        "name": "headless cms",
        "slug": "headless-cms",
        "objectID": "5914be36db93b4aae8008897"
    },
    {
        "name": "newsletter",
        "slug": "newsletter",
        "objectID": "56744722958ef13879b9516a"
    },
    {
        "name": "network",
        "slug": "network",
        "objectID": "56744721958ef13879b94923"
    },
    {
        "name": "IT",
        "slug": "it",
        "objectID": "57628dcd820dd45f3fbd8eb5"
    },
    {
        "name": "mobile app development",
        "slug": "mobile-app-development",
        "objectID": "56744723958ef13879b95222"
    },
    {
        "name": "freeCodeCamp.org",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1518534240940/ByFDRugwf.jpeg",
        "slug": "freecodecamp",
        "objectID": "57039f98f950faa9ab7ec552"
    },
    {
        "name": "Cryptography",
        "slug": "cryptography",
        "objectID": "58426a8997063da359fe2cf4"
    },
    {
        "name": "Augmented Reality",
        "slug": "augmented-reality",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1506666999/lnnrwwh9td4xm87lh13d.png",
        "objectID": "57ce29fde5e41a2a5c24fa98"
    },
    {
        "name": "training",
        "slug": "training",
        "objectID": "56b0a1600a7ca0c6f70c3703"
    },
    {
        "name": "Objects",
        "slug": "objects",
        "objectID": "57e793cdef99cf03582fe42b"
    },
    {
        "name": "flexbox",
        "slug": "flexbox",
        "objectID": "56744721958ef13879b94afb"
    },
    {
        "name": "SSL",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450712342/u2tfvtrfojyne6qzaflq.jpg",
        "slug": "ssl",
        "objectID": "56744721958ef13879b94912"
    },
    {
        "name": "ASP.NET",
        "slug": "aspnet",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1515075607732/ByxXu3jQG.jpeg",
        "objectID": "567e2a600db88211bac0a032"
    },
    {
        "name": "distributed system",
        "slug": "distributed-system",
        "objectID": "568c90725e7a940b3d3e08ed"
    },
    {
        "name": "logging",
        "slug": "logging",
        "objectID": "568bb9dbe99c5444f3233893"
    },
    {
        "name": "Applications",
        "slug": "applications",
        "objectID": "56ea7aebbcca2d711e191c02"
    },
    {
        "name": "user experience",
        "slug": "user-experience",
        "objectID": "56744721958ef13879b948d4"
    },
    {
        "name": "architecture",
        "slug": "architecture",
        "objectID": "56744723958ef13879b9529a"
    },
    {
        "name": "package",
        "slug": "package",
        "objectID": "56744723958ef13879b9533c"
    },
    {
        "name": "tricks",
        "slug": "tricks",
        "objectID": "56744721958ef13879b94b19"
    },
    {
        "name": "R Language",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1490864688/fiw7ngemmxkumjpkntdp.png",
        "slug": "r",
        "objectID": "56744722958ef13879b95111"
    },
    {
        "name": "css flexbox",
        "slug": "css-flexbox",
        "objectID": "56744721958ef13879b94c3a"
    },
    {
        "name": "Xcode",
        "slug": "xcode",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1502355718/vddmkshskl3sbl4xogwn.jpg",
        "objectID": "56744720958ef13879b947ff"
    },
    {
        "name": "Monetization",
        "slug": "monetization",
        "objectID": "5736a1db6a4640415dc89e28"
    },
    {
        "name": "async",
        "slug": "async",
        "objectID": "56cbdb23b70682283f9edeb8"
    },
    {
        "name": "SQL Server",
        "slug": "sql-server",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1551380133166/kHlXAcxdU.jpeg",
        "objectID": "56744720958ef13879b947b6"
    },
    {
        "name": "tensorflow",
        "slug": "tensorflow",
        "objectID": "56744722958ef13879b9518a"
    },
    {
        "name": "Vercel Hashnode Hackathon",
        "slug": "vercelhashnode",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1610701406772/nrAD-f_i6.png",
        "objectID": "6001530cf611a365208ad66a"
    },
    {
        "name": "extension",
        "slug": "extension",
        "objectID": "569f6b4492921b8f79d36061"
    },
    {
        "name": "free",
        "slug": "free",
        "objectID": "56744723958ef13879b95214"
    },
    {
        "name": "kotlin beginner",
        "slug": "kotlin-beginner",
        "objectID": "5f081e73b587713318b74a42"
    },
    {
        "name": "SurviveJS",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1461251276/bmmcz554bnl0zk83l1iz.png",
        "slug": "survivejs",
        "objectID": "5718ec0fc4b104334fad928e"
    },
    {
        "name": "Rails",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1453793832/qypx8pjpm7tybpcbfhif.jpg",
        "slug": "rails",
        "objectID": "56744722958ef13879b94eb5"
    },
    {
        "name": "Web Perf",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1472485302/gvihfpia52e0l5r3rau9.jpg",
        "slug": "webperf",
        "objectID": "56744722958ef13879b950c6"
    },
    {
        "name": "big data",
        "slug": "big-data",
        "objectID": "56744721958ef13879b94e3b"
    },
    {
        "name": "communication",
        "slug": "communication",
        "objectID": "57d2d92415ae0c65b80ace44"
    },
    {
        "name": "Solidity",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1512988916861/ryTxWknbG.png",
        "slug": "solidity",
        "objectID": "595ab8b5a3e02ebe146b2f2a"
    },
    {
        "name": "Experience ",
        "slug": "experience",
        "objectID": "587dbc32d40f782e50cf92e0"
    },
    {
        "name": "Amazon S3",
        "slug": "amazon-s3",
        "objectID": "569d145446dfdb8479aa690d"
    },
    {
        "name": "Meteor",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450467991/aaskzxstfaadd1sbhxj2.png",
        "slug": "meteor",
        "objectID": "56744722958ef13879b94fa7"
    },
    {
        "name": "agile development",
        "slug": "agile-development",
        "objectID": "56744721958ef13879b94dba"
    },
    {
        "name": "Oracle",
        "slug": "oracle",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1516182996908/ByaA6q2NG.jpeg",
        "objectID": "56744721958ef13879b9498a"
    },
    {
        "name": "scss",
        "slug": "scss",
        "objectID": "56744722958ef13879b951f1"
    },
    {
        "name": "GCP",
        "slug": "gcp",
        "objectID": "58d4d1fbcfc5bd6596a0a6b5"
    },
    {
        "name": "domain",
        "slug": "domain",
        "objectID": "5714fe4e151fa7c4488cc1ae"
    },
    {
        "name": "Regex",
        "slug": "regex",
        "objectID": "56f6aef0aa013a5f87413615"
    },
    {
        "name": "Symfony",
        "slug": "symfony",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1541163459741/BknTF6t3m.png",
        "objectID": "572d6c67bf97af427dd07f13"
    },
    {
        "name": "app",
        "slug": "app",
        "objectID": "56744721958ef13879b94a0e"
    },
    {
        "name": "Junior developer ",
        "slug": "junior-developer",
        "objectID": "5f071caa6e04d8269a566170"
    },
    {
        "name": "advice",
        "slug": "advice",
        "objectID": "56744723958ef13879b95333"
    },
    {
        "name": "Powershell",
        "slug": "powershell",
        "objectID": "56f7871ffc7154468758edb7"
    },
    {
        "name": "Babel",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1504815622/wo9hjfe0klgxj8mahf6j.png",
        "slug": "babel",
        "objectID": "56744722958ef13879b95045"
    },
    {
        "name": "Reactive Programming",
        "slug": "reactive-programming",
        "objectID": "56744721958ef13879b94aee"
    },
    {
        "name": "Smart Contracts",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1512989048807/S1WtW1hZz.png",
        "slug": "smart-contracts",
        "objectID": "5a2e407a5b9ed1636662b8f9"
    },
    {
        "name": "string",
        "slug": "string",
        "objectID": "57448e2a9ade925885158cfe"
    },
    {
        "name": "images",
        "slug": "images",
        "objectID": "56744723958ef13879b95229"
    },
    {
        "name": "hiring",
        "slug": "hiring",
        "objectID": "56744721958ef13879b9497e"
    },
    {
        "name": "Christmas Hackathon",
        "slug": "christmashackathon",
        "logo": null,
        "objectID": "5fe187955620145ec6e3a5c2"
    },
    {
        "name": "services",
        "slug": "services",
        "objectID": "5682e64e2c29f7e0c86d024b"
    },
    {
        "name": "aws-cdk",
        "slug": "aws-cdk",
        "objectID": "5f743910a3a6d515f7142eb4"
    },
    {
        "name": "Laravel 5",
        "slug": "laravel-5",
        "objectID": "56ec06ac5edec9d7189a0ad6"
    },
    {
        "name": "crypto",
        "slug": "crypto",
        "objectID": "57b188c971be21426cb4916e"
    },
    {
        "name": "instagram",
        "slug": "instagram",
        "objectID": "56744721958ef13879b94aec"
    },
    {
        "name": "questions",
        "slug": "questions",
        "objectID": "56744723958ef13879b952fe"
    },
    {
        "name": "bot",
        "slug": "bot",
        "objectID": "56744721958ef13879b948df"
    },
    {
        "name": "chatbot",
        "slug": "chatbot",
        "objectID": "57444f35468ae9e479434fac"
    },
    {
        "name": "risingstack",
        "slug": "risingstack",
        "objectID": "587745676b985e96ec6d48b7"
    },
    {
        "name": "trends",
        "slug": "trends",
        "objectID": "56744721958ef13879b94a2a"
    },
    {
        "name": "Jest",
        "slug": "jest",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496389933/s2t8atgotu6wvjgojpn6.png",
        "objectID": "56cfe81bfa28f5fe7f74d215"
    },
    {
        "name": "refactoring",
        "slug": "refactoring",
        "objectID": "56744720958ef13879b947df"
    },
    {
        "name": "frameworks",
        "slug": "frameworks",
        "objectID": "56744721958ef13879b94db1"
    },
    {
        "name": "arrays",
        "slug": "arrays",
        "objectID": "579350e1d87e23e5efe30d84"
    },
    {
        "name": "cheatsheet",
        "slug": "cheatsheet",
        "objectID": "56cc66fff978c91273a36237"
    },
    {
        "name": "team",
        "slug": "team",
        "objectID": "56744723958ef13879b952e7"
    },
    {
        "name": "docker images",
        "slug": "docker-images",
        "objectID": "5f442ff51b2ea309b7529267"
    },
    {
        "name": "classes",
        "slug": "classes",
        "objectID": "56744723958ef13879b955a3"
    },
    {
        "name": "workflow",
        "slug": "workflow",
        "objectID": "56744722958ef13879b94e77"
    },
    {
        "name": "ML",
        "slug": "ml",
        "objectID": "57c6e7bdb274bac7e601abe2"
    },
    {
        "name": "neural networks",
        "slug": "neural-networks",
        "objectID": "56af3b4ccc975f0cc6878c8a"
    },
    {
        "name": "javascript modules",
        "slug": "javascript-modules",
        "objectID": "56cbdab9b70682283f9edeae"
    },
    {
        "name": "skills",
        "slug": "skills",
        "objectID": "576b3918decdd3bf3610c80b"
    },
    {
        "name": "Internet of Things",
        "slug": "internet-of-things",
        "objectID": "58f8acb0e928dad5e4c7ab2b"
    },
    {
        "name": "dns",
        "slug": "dns",
        "objectID": "5674471d958ef13879b94798"
    },
    {
        "name": "Blazor ",
        "slug": "blazor-1",
        "objectID": "5f219f52ef20f63bcf9822c6"
    },
    {
        "name": "Script",
        "slug": "script",
        "objectID": "56a294beff99ae055eeffcea"
    },
    {
        "name": "Help Needed",
        "slug": "help",
        "objectID": "5674471d958ef13879b94764"
    },
    {
        "name": "mobile",
        "slug": "mobile",
        "objectID": "56744723958ef13879b9524e"
    },
    {
        "name": "Amplify Hashnode",
        "slug": "amplifyhashnode",
        "logo": null,
        "objectID": "60223d4f281265375d643d83"
    },
    {
        "name": "ssh",
        "slug": "ssh",
        "objectID": "5677ff6aec7aa67e51f1e096"
    },
    {
        "name": "Software Testing",
        "slug": "software-testing",
        "objectID": "56b54dae8dabdc6142c1ac86"
    },
    {
        "name": "dev tools",
        "slug": "dev-tools",
        "objectID": "56744723958ef13879b9527c"
    },
    {
        "name": "https",
        "slug": "https",
        "objectID": "56744722958ef13879b94e73"
    },
    {
        "name": "Inspiration",
        "slug": "inspiration",
        "objectID": "57de56e3c61e5b59729da2a8"
    },
    {
        "name": "Ajax",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1459504130/huzynvc2g3hd5w8sjw6w.jpg",
        "slug": "ajax",
        "objectID": "56744722958ef13879b95140"
    },
    {
        "name": "DEVCommunity",
        "slug": "devcommunity",
        "objectID": "5f1ccb30f4016901885cc50f"
    },
    {
        "name": "oauth",
        "slug": "oauth",
        "objectID": "56744722958ef13879b951b1"
    },
    {
        "name": "design principles",
        "slug": "design-principles",
        "objectID": "5f965c1c40346172a86c2c4b"
    },
    {
        "name": "mentalhealth",
        "slug": "mentalhealth-1",
        "objectID": "5f7e39240e5d207780d949e9"
    },
    {
        "name": "#hacktoberfest ",
        "slug": "hacktoberfest-1",
        "objectID": "5f6629266dfc523d0a89357b"
    },
    {
        "name": "MobX",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1534512814483/SJUnRS4U7.jpeg",
        "slug": "mobx",
        "objectID": "5729bc14faa06f875ef32e95"
    },
    {
        "name": "ec2",
        "slug": "ec2",
        "objectID": "56744721958ef13879b94a18"
    },
    {
        "name": "setup",
        "slug": "setup",
        "objectID": "57a37bf75bfdd08aeffb5832"
    },
    {
        "name": "devtools",
        "slug": "devtools",
        "objectID": "56744722958ef13879b950fe"
    },
    {
        "name": "ecmascript",
        "slug": "ecmascript",
        "objectID": "56744722958ef13879b9511f"
    },
    {
        "name": "styled-components",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1486104606/jbhiqodxlyhaqogfuqwy.png",
        "slug": "styled-components",
        "objectID": "58900d47afa2b4bce2efb44f"
    },
    {
        "name": "REST",
        "slug": "rest",
        "objectID": "56744721958ef13879b949f6"
    },
    {
        "name": "caching",
        "slug": "caching",
        "objectID": "56744723958ef13879b9540f"
    },
    {
        "name": "7daystreak",
        "slug": "7daystreak",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1626280769878/xaxdZgS0N.png",
        "objectID": "60ed9e18fc37a15ec15683b3"
    },
    {
        "name": "image processing",
        "slug": "image-processing",
        "objectID": "5674471d958ef13879b94776"
    },
    {
        "name": "Web API",
        "slug": "web-api",
        "objectID": "5894ec2f47e4163deb72c252"
    },
    {
        "name": "ideas",
        "slug": "ideas",
        "objectID": "56744721958ef13879b948f6"
    },
    {
        "name": "hack",
        "slug": "hack",
        "objectID": "56744723958ef13879b95426"
    },
    {
        "name": "hardware",
        "slug": "hardware",
        "objectID": "568439646b179c61d167f08d"
    },
    {
        "name": "web application",
        "slug": "web-application",
        "objectID": "56744723958ef13879b952c2"
    },
    {
        "name": "library",
        "slug": "library",
        "objectID": "56744721958ef13879b94d94"
    },
    {
        "name": "opencv",
        "slug": "opencv",
        "objectID": "587745676b985e96ec6d48b8"
    },
    {
        "name": "AWS Certified Solutions Architect Associate",
        "slug": "aws-certified-solutions-architect-associate",
        "objectID": "5f71b762eb14b172f1d4bc39"
    },
    {
        "name": "CSS Grid",
        "slug": "css-grid",
        "objectID": "58becf402a99d222c65c24d8"
    },
    {
        "name": "job",
        "slug": "job",
        "objectID": "56744721958ef13879b94a46"
    },
    {
        "name": "leadership",
        "slug": "leadership",
        "objectID": "57c15e52387df20e0b9f94a0"
    },
    {
        "name": "Jenkins",
        "slug": "jenkins",
        "objectID": "57d6d71cf72dd3705c15ffcf"
    },
    {
        "name": "eslint",
        "slug": "eslint",
        "objectID": "570f716a115103c3b0978698"
    },
    {
        "name": "time",
        "slug": "time",
        "objectID": "58f7bab0e1eb1bd4e45f05f0"
    },
    {
        "name": "realtime",
        "slug": "realtime",
        "objectID": "56744721958ef13879b94bdf"
    },
    {
        "name": "Math",
        "slug": "math",
        "objectID": "581ad086c055bbfb46d8811b"
    },
    {
        "name": "conference",
        "slug": "conference",
        "objectID": "56744721958ef13879b9493b"
    },
    {
        "name": "general",
        "slug": "general",
        "objectID": "56fd6444404be5549d3de51b"
    },
    {
        "name": "encryption",
        "slug": "encryption",
        "objectID": "56744723958ef13879b9528d"
    },
    {
        "name": "files",
        "slug": "files",
        "objectID": "57f7bbb9813841efc19c3488"
    },
    {
        "name": "error handling",
        "slug": "error-handling",
        "objectID": "56744722958ef13879b95084"
    },
    {
        "name": "Auth0Hackathon",
        "slug": "auth0hackathon",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1627916253311/DuFTo1seC.png",
        "objectID": "6108059fb97c436d241bddc5"
    },
    {
        "name": "numpy",
        "slug": "numpy",
        "objectID": "57c7c7c7e53060955aa8c018"
    },
    {
        "name": "D3.js",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1459873316/fdlqr3pk587gddsrirxe.jpg",
        "slug": "d3js",
        "objectID": "56744721958ef13879b94d8c"
    },
    {
        "name": "Apollo GraphQL",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1467922175/sbxeze75uotah3qeqhbh.png",
        "slug": "apollo",
        "objectID": "57053ef1115103c3b0977fb0"
    },
    {
        "name": "Nuxt",
        "slug": "nuxt",
        "objectID": "591c5a1956856e7d71046403"
    },
    {
        "name": "DDD",
        "slug": "ddd",
        "objectID": "576b14ad41d2cbca360cf875"
    },
    {
        "name": "excel",
        "slug": "excel",
        "objectID": "591414b39e2b75ff7c5fa62d"
    },
    {
        "name": "branding",
        "slug": "branding",
        "objectID": "56b71ac92894c38346c06670"
    },
    {
        "name": "Web Components",
        "slug": "web-components",
        "objectID": "56744723958ef13879b95564"
    },
    {
        "name": "dynamodb",
        "slug": "dynamodb",
        "objectID": "56744722958ef13879b950d8"
    },
    {
        "name": "College",
        "slug": "college",
        "objectID": "587dbc32d40f782e50cf92df"
    },
    {
        "name": "journal",
        "slug": "journal",
        "objectID": "5674471d958ef13879b94791"
    },
    {
        "name": "state",
        "slug": "state",
        "objectID": "584ac47b9747b36ae2a28c8a"
    },
    {
        "name": "impostor syndrome",
        "slug": "impostor-syndrome",
        "objectID": "56744723958ef13879b95306"
    },
    {
        "name": "creativity",
        "slug": "creativity",
        "objectID": "56744721958ef13879b94829"
    },
    {
        "name": "SheCodeAfrica ",
        "slug": "shecodeafrica",
        "objectID": "5f115a51d6c58d29e0240e45"
    },
    {
        "name": "SocketIO",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1472485355/zsypm63fq6998mc1pqvl.png",
        "slug": "socketio",
        "objectID": "56744721958ef13879b94b52"
    },
    {
        "name": "HTML Canvas",
        "slug": "html-canvas",
        "objectID": "5692580fcad8946e563c570a"
    },
    {
        "name": "QA",
        "slug": "qa",
        "objectID": "56a20c4d92921b8f79d36276"
    },
    {
        "name": "linux kernel",
        "slug": "linux-kernel",
        "objectID": "5faadc16d6009557c49f5bbb"
    },
    {
        "name": "Travel",
        "slug": "travel",
        "objectID": "58859588abf4ad10c6ac08b6"
    },
    {
        "name": "authorization",
        "slug": "authorization",
        "objectID": "56744722958ef13879b9518c"
    },
    {
        "name": "Scrum",
        "slug": "scrum",
        "objectID": "570a9a273aeb5317437380e4"
    },
    {
        "name": "Validation",
        "slug": "validation",
        "objectID": "56c093923ddee41359169468"
    },
    {
        "name": "messaging",
        "slug": "messaging",
        "objectID": "57d832bbd17cab545cab9dbf"
    },
    {
        "name": "Computer Vision",
        "slug": "computer-vision",
        "objectID": "57534dab82cbbab8dcd475b9"
    },
    {
        "name": "ios app developer",
        "slug": "ios-app-developer",
        "objectID": "56744723958ef13879b9542c"
    },
    {
        "name": "Xamarin",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1464701189/ms3lwj8fdp2agynrxrly.jpg",
        "slug": "xamarin",
        "objectID": "56744721958ef13879b94825"
    },
    {
        "name": "mvc",
        "slug": "mvc",
        "objectID": "56744721958ef13879b94995"
    },
    {
        "name": "fonts",
        "slug": "fonts",
        "objectID": "56744721958ef13879b9499e"
    },
    {
        "name": "video streaming",
        "slug": "video-streaming",
        "objectID": "590c71fe1ae3d06072e8956c"
    },
    {
        "name": "closure",
        "slug": "closure",
        "objectID": "56744721958ef13879b94b1e"
    },
    {
        "name": "HarperDB Hackathon",
        "slug": "harperdbhackathon",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1623401171709/jCXKCcOIl.png",
        "objectID": "60b7952425dc276ffb940618"
    },
    {
        "name": "axios",
        "slug": "axios",
        "objectID": "58887bba81421379798066f5"
    },
    {
        "name": "mentorship",
        "slug": "mentorship",
        "objectID": "575c2d212f07b512c4dce579"
    },
    {
        "name": "code smell ",
        "slug": "code-smell-1",
        "objectID": "5fa7f4cac0d56c5ae62e3471"
    },
    {
        "name": "Web Accessibility",
        "slug": "web-accessibility",
        "objectID": "5f3f1dcc5b3ac8481821c47c"
    },
    {
        "name": "#growth",
        "slug": "growth-1",
        "objectID": "5f21ee72ef20f63bcf98250b"
    },
    {
        "name": "shopify",
        "slug": "shopify",
        "objectID": "57d2f8b8739df23de32d9a0b"
    },
    {
        "name": "dailydev",
        "slug": "dailydev",
        "objectID": "5f4e6e6de613341d6f8cd33e"
    },
    {
        "name": "expressjs",
        "slug": "expressjs",
        "objectID": "56744721958ef13879b94d81"
    },
    {
        "name": "fun",
        "slug": "fun",
        "objectID": "56744723958ef13879b954b1"
    },
    {
        "name": "android development",
        "slug": "android-development",
        "objectID": "56744722958ef13879b95086"
    },
    {
        "name": "DevBlogging",
        "slug": "devblogging",
        "objectID": "5f323f334332ee07eb55c25e"
    },
    {
        "name": "Scala",
        "slug": "scala",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496318498/u1ogtyiakscd683ar63g.png",
        "objectID": "56744723958ef13879b952a7"
    },
    {
        "name": "repository",
        "slug": "repository",
        "objectID": "56744721958ef13879b94932"
    },
    {
        "name": "Gulp",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1455107024/ymnvwdrzghdaupgnh1pa.png",
        "slug": "gulp",
        "objectID": "56744723958ef13879b954b9"
    },
    {
        "name": "CodePen",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1490300926/zpeedkxkcyorvxzepwdq.png",
        "slug": "codepen",
        "objectID": "56744722958ef13879b94f3e"
    },
    {
        "name": "front-end",
        "slug": "front-end-cik5w32oi016zos53hitiymhh",
        "objectID": "56b118e610979efc2b9a8d91"
    },
    {
        "name": "Salesforce",
        "slug": "salesforce",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1542629160319/SkxND7eC7.jpeg",
        "objectID": "578d40c45460288cdeb6f094"
    },
    {
        "name": "Auth ",
        "slug": "auth",
        "objectID": "5762d998d163d06a3fca2d8d"
    },
    {
        "name": "sorting",
        "slug": "sorting",
        "objectID": "56e79a12c10bbcfb0ce541b1"
    },
    {
        "name": "slack",
        "slug": "slack",
        "objectID": "56744723958ef13879b952bc"
    },
    {
        "name": "languages",
        "slug": "languages",
        "objectID": "56744723958ef13879b95347"
    },
    {
        "name": "Amazon",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1469216724/nxiuwpm6dybqbn9dhybc.png",
        "slug": "amazon",
        "objectID": "56744721958ef13879b94906"
    },
    {
        "name": "storage",
        "slug": "storage",
        "objectID": "5708ff9c115103c3b09782d7"
    },
    {
        "name": "algorithm",
        "slug": "algorithm",
        "objectID": "56744721958ef13879b94de3"
    },
    {
        "name": "pdf",
        "slug": "pdf",
        "objectID": "57962622bdb2f5db657ae6c3"
    },
    {
        "name": "fetch",
        "slug": "fetch",
        "objectID": "5758618112a8cb07bb8426d2"
    },
    {
        "name": "dependency injection",
        "slug": "dependency-injection",
        "objectID": "56e6d5598c0bb8288a559c95"
    },
    {
        "name": "template",
        "slug": "template",
        "objectID": "56c4cd6eedfec14f66f81d98"
    },
    {
        "name": "RxJS",
        "slug": "rxjs",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1512113179321/HJXmNY0lf.jpeg",
        "objectID": "56744723958ef13879b95559"
    },
    {
        "name": "WebAssembly",
        "slug": "webassembly",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1510296821/n90fqabiufcs8kbridxm.png",
        "objectID": "56744722958ef13879b95043"
    },
    {
        "name": "game",
        "slug": "game",
        "objectID": "56744721958ef13879b9496d"
    },
    {
        "name": "lambda",
        "slug": "lambda",
        "objectID": "56744721958ef13879b94867"
    },
    {
        "name": "JSX",
        "slug": "jsx",
        "objectID": "577b65e0a1ac2f52aea75814"
    },
    {
        "name": "GUI",
        "slug": "gui",
        "objectID": "574dd005be8cff2ed6571a4f"
    },
    {
        "name": "theme",
        "slug": "theme",
        "objectID": "58e1a2b84200d85d6bfc1457"
    },
    {
        "name": "routing",
        "slug": "routing",
        "objectID": "56744721958ef13879b949fb"
    },
    {
        "name": "Firefox",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1511214305890/HJ9ka6gxM.jpeg",
        "slug": "firefox",
        "objectID": "56744721958ef13879b94929"
    },
    {
        "name": "visual studio",
        "slug": "visual-studio",
        "objectID": "56744723958ef13879b953df"
    },
    {
        "name": "migration",
        "slug": "migration",
        "objectID": "56744723958ef13879b9534f"
    },
    {
        "name": "Foundation",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450470022/sfgwosxc2dgxo9yslapu.png",
        "slug": "foundation",
        "objectID": "56744722958ef13879b94fc2"
    },
    {
        "name": "LinkedIn",
        "slug": "linkedin",
        "objectID": "575ebcbada600b8ef43e51c4"
    },
    {
        "name": "planning",
        "slug": "planning",
        "objectID": "57ed528897eba84632db5b88"
    },
    {
        "name": "static",
        "slug": "static",
        "objectID": "57cbff559b3eb82e014a0364"
    },
    {
        "name": "Indie Maker",
        "slug": "indie-maker",
        "objectID": "5f1edf42cf3e61138dbef956"
    },
    {
        "name": "ThreeJS",
        "slug": "threejs",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1520160600492/Bklw1UKOM.jpeg",
        "objectID": "571fa589cfc14de85d6aca42"
    },
    {
        "name": "Yarn",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1477030779/nbhawthd7lervqjdiwrz.jpg",
        "slug": "yarn",
        "objectID": "5801b9c24c0f5aee780a3883"
    },
    {
        "name": "User Interface",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1462773835/uvhdwekyfkkh1tldkew7.jpg",
        "slug": "user-interface",
        "objectID": "56744721958ef13879b94823"
    },
    {
        "name": "fullstack",
        "slug": "fullstack",
        "objectID": "56744721958ef13879b94a6c"
    },
    {
        "name": "web performance",
        "slug": "web-performance",
        "objectID": "56744721958ef13879b94950"
    },
    {
        "name": "websockets",
        "slug": "websockets",
        "objectID": "56744721958ef13879b94a0f"
    },
    {
        "name": "SEO for Developers",
        "slug": "seo-for-developers",
        "objectID": "5f58d1c9ffbb8f35dd030cdd"
    },
    {
        "name": "graphic design",
        "slug": "graphic-design",
        "objectID": "56ab4801960088c21db4d845"
    },
    {
        "name": "bootstrap 4",
        "slug": "bootstrap-4",
        "objectID": "56744723958ef13879b953a4"
    },
    {
        "name": "push notifications",
        "slug": "push-notifications",
        "objectID": "577d40e61e03c69a78fb0dac"
    },
    {
        "name": "color",
        "slug": "color",
        "objectID": "5774aa8157675ec2fcfd0744"
    },
    {
        "name": "Scope",
        "slug": "scope",
        "objectID": "56f16b6cea857e0c6af05a4c"
    },
    {
        "name": "create-react-app",
        "slug": "create-react-app",
        "objectID": "58ec8cb535aeeb5330e71961"
    },
    {
        "name": "scalability",
        "slug": "scalability",
        "objectID": "5691193ecad8946e563c56e9"
    },
    {
        "name": "server hosting",
        "slug": "server-hosting",
        "objectID": "56744723958ef13879b9553e"
    },
    {
        "name": "login",
        "slug": "login",
        "objectID": "56b45894500fd79e29bd7bf4"
    },
    {
        "name": "Chat",
        "slug": "chat",
        "objectID": "575e6494ed4fa39df4f9af08"
    },
    {
        "name": "Culture",
        "slug": "culture",
        "objectID": "568a70511f77b14a93d83737"
    },
    {
        "name": "Recursion",
        "slug": "recursion",
        "objectID": "56903d0e91716a2d1dbadbca"
    },
    {
        "name": "cloudflare",
        "slug": "cloudflare",
        "objectID": "56744720958ef13879b947e6"
    },
    {
        "name": "whatsapp",
        "slug": "whatsapp",
        "objectID": "5732da8af311f7ed13dddcb3"
    },
    {
        "name": "Off Topic",
        "slug": "off-topic",
        "objectID": "575ab7852f07b512c4dce46e"
    },
    {
        "name": "passwords",
        "slug": "passwords",
        "objectID": "578395f816a33191db0432f4"
    },
    {
        "name": "map",
        "slug": "map",
        "objectID": "56fd21cd770db0f14a63ee67"
    },
    {
        "slug": "go-cjffccfnf0024tjs1mcwab09t",
        "objectID": "5abf7c154496b1f745e95fce"
    },
    {
        "name": "Tailwind CSS Tutorial",
        "slug": "tailwind-css-tutorial",
        "objectID": "5f76e2947d160d41227d65b9"
    },
    {
        "name": "SQLite",
        "slug": "sqlite",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1516183050940/BJXG0cn4z.jpeg",
        "objectID": "56d9e25a4aa5f35f09dd6c98"
    },
    {
        "name": "WebGL",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1472831587/ajchcv7sjghl7p5k1tgm.jpg",
        "slug": "webgl",
        "objectID": "56744721958ef13879b94a3f"
    },
    {
        "name": "Phoenix framework",
        "slug": "phoenix",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1522051540209/Hy20FXI5G.jpeg",
        "objectID": "56744721958ef13879b94abc"
    },
    {
        "name": "magento 2",
        "slug": "magento-2",
        "objectID": "587789c03c79514bec516060"
    },
    {
        "name": "editors",
        "slug": "editors",
        "objectID": "56744723958ef13879b95262"
    },
    {
        "name": "google sheets",
        "slug": "google-sheets",
        "objectID": "56e669b622f645300192ed17"
    },
    {
        "name": "kafka",
        "slug": "kafka",
        "objectID": "572527cf5ec4095ed6f48bf3"
    },
    {
        "name": "Art",
        "slug": "art",
        "objectID": "56efa81abcca2d711e191eb9"
    },
    {
        "name": "generators",
        "slug": "generators",
        "objectID": "56744722958ef13879b950b8"
    },
    {
        "name": "Company",
        "slug": "company",
        "objectID": "572ca231bf97af427dd07e6c"
    },
    {
        "name": "console",
        "slug": "console",
        "objectID": "56744723958ef13879b952e1"
    },
    {
        "name": "Virtual Reality",
        "slug": "virtual-reality",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1506666919/d9j2ku0cjlhrzrboojit.png",
        "objectID": "56c87d289b87edaf6e25f825"
    },
    {
        "name": "apps",
        "slug": "apps",
        "objectID": "56744721958ef13879b94ac2"
    },
    {
        "name": "plugins",
        "slug": "plugins",
        "objectID": "56744723958ef13879b95204"
    },
    {
        "name": "terminal command",
        "slug": "terminal-command",
        "objectID": "5f6afc44cbf0b22e6d444142"
    },
    {
        "name": "arduino",
        "slug": "arduino",
        "objectID": "56744722958ef13879b951db"
    },
    {
        "name": "email marketing",
        "slug": "email-marketing",
        "objectID": "57b76044a629e4147b4251d5"
    },
    {
        "name": "project",
        "slug": "project",
        "objectID": "56744721958ef13879b94aae"
    },
    {
        "name": "3d",
        "slug": "3d",
        "objectID": "56744721958ef13879b94ad9"
    },
    {
        "name": "charts",
        "slug": "charts",
        "objectID": "56744720958ef13879b947d1"
    },
    {
        "name": "e-learning",
        "slug": "e-learning",
        "objectID": "569c9b4c72ca04ea5d79fc6c"
    },
    {
        "name": "browser",
        "slug": "browser",
        "objectID": "56744721958ef13879b94a11"
    },
    {
        "name": "snippets",
        "slug": "snippets",
        "objectID": "56744721958ef13879b948ae"
    },
    {
        "name": "Flux",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450468113/cariy62rvjvlnz8ks7qw.png",
        "slug": "flux",
        "objectID": "56744721958ef13879b94d46"
    },
    {
        "name": "mac",
        "slug": "mac",
        "objectID": "56744721958ef13879b94a22"
    },
    {
        "name": "os",
        "slug": "os",
        "objectID": "568f6e425e7a940b3d3e0a92"
    },
    {
        "name": "integration",
        "slug": "integration",
        "objectID": "57f58a9917809963610207dd"
    },
    {
        "name": "logic",
        "slug": "logic",
        "objectID": "57b23c4cab585a4d6c1529cd"
    },
    {
        "name": "history",
        "slug": "history",
        "objectID": "572706c827ca2053d6613898"
    },
    {
        "name": "SOLID principles",
        "slug": "solid-principles",
        "objectID": "5f4dd1ae6f2d7874d4060e9b"
    },
    {
        "name": "Blogger",
        "slug": "blogger-1",
        "objectID": "5f2a4ee0d7d55f162b5da120"
    },
    {
        "name": "developer relations",
        "slug": "developer-relations",
        "objectID": "56744723958ef13879b953b6"
    },
    {
        "name": "Service Workers",
        "slug": "service-workers",
        "objectID": "56a746ba6e715c3c7fc5b7ef"
    },
    {
        "name": "iphone",
        "slug": "iphone",
        "objectID": "56744722958ef13879b95166"
    },
    {
        "name": "Parse",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1457160633/ybpgyd9fhrucyvgwda6a.png",
        "slug": "parse",
        "objectID": "56744722958ef13879b94efb"
    },
    {
        "slug": "sagar-jaybhay",
        "objectID": "5cd9909c45e85c572ab538f7"
    },
    {
        "name": "design review",
        "slug": "design-review",
        "objectID": "5fb179420f6d4f4d2f66a32a"
    },
    {
        "name": "Career Coach",
        "slug": "career-coach",
        "objectID": "5f0bc6ef3fe8405bdb8d80be"
    },
    {
        "name": "hadoop",
        "slug": "hadoop",
        "objectID": "56744720958ef13879b94799"
    },
    {
        "name": "graph database",
        "slug": "graph-database",
        "objectID": "58b96527be993da9e4853150"
    },
    {
        "name": "continuous delivery",
        "slug": "continuous-delivery",
        "objectID": "56744721958ef13879b949a3"
    },
    {
        "name": "concurrency",
        "slug": "concurrency",
        "objectID": "56744723958ef13879b95312"
    },
    {
        "name": "compiler",
        "slug": "compiler",
        "objectID": "58790ce83c79514bec51631b"
    },
    {
        "name": "gsoc",
        "slug": "gsoc",
        "objectID": "56744721958ef13879b94dea"
    },
    {
        "name": "spa",
        "slug": "spa",
        "objectID": "56744721958ef13879b94d40"
    },
    {
        "name": "Collaboration",
        "slug": "collaboration",
        "objectID": "57d0839fb64935c2e8fdba94"
    },
    {
        "name": "Event Loop",
        "slug": "event-loop",
        "objectID": "56f7b7c59cad82b1e979026a"
    },
    {
        "name": "crud",
        "slug": "crud",
        "objectID": "56f71ff1aa013a5f87413652"
    },
    {
        "name": "Hoisting",
        "slug": "hoisting",
        "objectID": "56db37c9e853431899d03773"
    },
    {
        "name": "life-hack",
        "slug": "life-hack",
        "objectID": "5f96548740346172a86c2be7"
    },
    {
        "name": "mobile application design",
        "slug": "mobile-application-design",
        "objectID": "56744723958ef13879b95516"
    },
    {
        "name": "unix",
        "slug": "unix",
        "objectID": "56744721958ef13879b94a53"
    },
    {
        "name": "AdonisJS",
        "slug": "adonisjs",
        "objectID": "5770f47198002dc2b990254a"
    },
    {
        "name": "ecmascript6",
        "slug": "ecmascript6",
        "objectID": "56744720958ef13879b947db"
    },
    {
        "name": "stack",
        "slug": "stack",
        "objectID": "56744723958ef13879b95368"
    },
    {
        "slug": "cybersecurity",
        "objectID": "593a98f803de49038fb02fd4"
    },
    {
        "name": "streaming",
        "slug": "streaming",
        "objectID": "56744722958ef13879b9505d"
    },
    {
        "name": "sysadmin",
        "slug": "sysadmin",
        "objectID": "56744721958ef13879b94aa2"
    },
    {
        "name": "build",
        "slug": "build",
        "objectID": "56744723958ef13879b95552"
    },
    {
        "name": "smart home",
        "slug": "smart-home",
        "objectID": "590d86fe042257bf29db782c"
    },
    {
        "name": "modules",
        "slug": "modules",
        "objectID": "56744722958ef13879b95197"
    },
    {
        "name": "CDN",
        "slug": "cdn",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496755229/pmzin0lidq2ld88qeba5.png",
        "objectID": "56744720958ef13879b947ae"
    },
    {
        "name": "#the-technical-writing-bootcamp",
        "slug": "the-technical-writing-bootcamp-1",
        "objectID": "5f732a92f955ec0a130f6290"
    },
    {
        "name": "Sublime Text",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1497046439/xny5lu0xfjzpfybrrl9c.png",
        "slug": "sublime-text",
        "objectID": "56744723958ef13879b95216"
    },
    {
        "name": "Ember.js",
        "slug": "emberjs",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1498115063/txor4lfourtkcofjipii.png",
        "objectID": "56744721958ef13879b94c17"
    },
    {
        "name": "Vuex",
        "slug": "vuex",
        "objectID": "580209af0c9f06220778a866"
    },
    {
        "name": "wordpress plugins",
        "slug": "wordpress-plugins",
        "objectID": "56744721958ef13879b94965"
    },
    {
        "name": "zsh",
        "slug": "zsh",
        "objectID": "56744723958ef13879b95202"
    },
    {
        "name": "recruitment",
        "slug": "recruitment",
        "objectID": "57b0b5a1fbdd622c03136428"
    },
    {
        "name": "Server side rendering",
        "slug": "server-side-rendering",
        "objectID": "5759222f462c2daddc9ac412"
    },
    {
        "name": "Roadmap",
        "slug": "roadmap",
        "objectID": "58cd6353557528fb61666e5d"
    },
    {
        "name": "hashnodebootcamp2",
        "slug": "hashnodebootcamp2-1",
        "objectID": "5faec06b7fcc8d387fc0d1a6"
    },
    {
        "name": "Polymer",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450468312/zwtljjmofmpplvho1wfa.png",
        "slug": "polymer",
        "objectID": "56744723958ef13879b954ab"
    },
    {
        "name": "Expo",
        "slug": "expo",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1515394575880/SkuMI5gEM.jpeg",
        "objectID": "58cb5f69ecb020d9744a6487"
    },
    {
        "name": "xml",
        "slug": "xml",
        "objectID": "56744721958ef13879b94b0b"
    },
    {
        "name": "tooling",
        "slug": "tooling",
        "objectID": "56744723958ef13879b95335"
    },
    {
        "name": "canvas",
        "slug": "canvas",
        "objectID": "56744722958ef13879b94f55"
    },
    {
        "name": "Backup",
        "slug": "backup",
        "objectID": "57df9e894a6aa43e72a98a15"
    },
    {
        "name": "Explain like I am five",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1516175943338/SJ1IzFnVf.jpeg",
        "slug": "explain-like-i-am-five",
        "objectID": "5991e91f0bcf15061f140b7f"
    },
    {
        "name": "embedded",
        "slug": "embedded",
        "objectID": "571eb24785916079574f035e"
    },
    {
        "name": "bots",
        "slug": "bots",
        "objectID": "56f2726a35c92c494c5e3a73"
    },
    {
        "name": "Homebrew",
        "slug": "homebrew",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1502355995/yusx5q732shmiaypoq3f.png",
        "objectID": "56744722958ef13879b951e9"
    },
    {
        "name": "webdesign",
        "slug": "webdesign",
        "objectID": "56744721958ef13879b949ec"
    },
    {
        "name": "styling",
        "slug": "styling",
        "objectID": "580515064c0f5aee780a3c9b"
    },
    {
        "name": "Mozilla",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1477481389/i3tfvov4fuqfkg2yeddv.png",
        "slug": "mozilla",
        "objectID": "56744721958ef13879b94c4f"
    },
    {
        "name": "javascript books",
        "slug": "javascript-books",
        "objectID": "56744723958ef13879b953fa"
    },
    {
        "name": "Atom",
        "slug": "atom",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1497040963/kh7an2akihm9tf1w5ab2.png",
        "objectID": "56744721958ef13879b94aa6"
    },
    {
        "name": "dev",
        "slug": "dev",
        "objectID": "56744721958ef13879b948bc"
    },
    {
        "name": "Best of Hashnode",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1556009843016/9mcKMnTI3.png",
        "slug": "best-of-hashnode",
        "objectID": "5c0c2ed6659f658d077550cf"
    },
    {
        "name": "Stack Overflow",
        "slug": "stackoverflow",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1499949492/jff8br3fbln1yccb1tpb.png",
        "objectID": "56744721958ef13879b949d7"
    },
    {
        "name": "progressive web apps",
        "slug": "progressive-web-apps",
        "objectID": "5702d00aabbcb496574bce11"
    },
    {
        "name": "animations",
        "slug": "animations",
        "objectID": "56744721958ef13879b948b4"
    },
    {
        "name": "translation",
        "slug": "translation",
        "objectID": "576ccb742d4c0ff55a8ae17a"
    },
    {
        "name": "desktop",
        "slug": "desktop",
        "objectID": "56744721958ef13879b948ce"
    },
    {
        "name": "habits",
        "slug": "habits",
        "objectID": "57e22bd48b1fca72b28833a4"
    },
    {
        "name": "#codingNewbies",
        "slug": "codingnewbies",
        "objectID": "5f7f9e43b8638504a7c122ed"
    },
    {
        "name": "google maps",
        "slug": "google-maps",
        "objectID": "57496c3892b151fb90adc735"
    },
    {
        "name": "back4app",
        "slug": "back4app",
        "objectID": "578bf0674416601b9574cb3b"
    },
    {
        "name": "Libraries",
        "slug": "libraries",
        "objectID": "568ecddf91716a2d1dbadb19"
    },
    {
        "name": "prototyping",
        "slug": "prototyping",
        "objectID": "56744723958ef13879b95241"
    },
    {
        "name": "Real Estate",
        "slug": "real-estate",
        "objectID": "56ee695b5edec9d7189a0be5"
    },
    {
        "name": "cache",
        "slug": "cache",
        "objectID": "567bfb342b926c3063c307dc"
    },
    {
        "name": "teaching",
        "slug": "teaching",
        "objectID": "56744723958ef13879b955b7"
    },
    {
        "name": "multithreading",
        "slug": "multithreading",
        "objectID": "56744723958ef13879b95300"
    },
    {
        "name": "opinion pieces",
        "slug": "opinion-pieces",
        "objectID": "5f0ffe5eaa660c1c354c06fc"
    },
    {
        "name": ".net core",
        "slug": "net-core",
        "objectID": "57d7d0d0f72dd3705c16014a"
    },
    {
        "name": "freelance",
        "slug": "freelance",
        "objectID": "56744722958ef13879b94e57"
    },
    {
        "name": "deployment automation",
        "slug": "deployment-automation",
        "objectID": "56744722958ef13879b95067"
    },
    {
        "name": "icon",
        "slug": "icon",
        "objectID": "56744723958ef13879b95289"
    },
    {
        "name": "Hashing",
        "slug": "hashing",
        "objectID": "591fd9bfe1cc498f829bf264"
    },
    {
        "name": "boilerplate",
        "slug": "boilerplate",
        "objectID": "56744723958ef13879b953b2"
    },
    {
        "name": "navigation",
        "slug": "navigation",
        "objectID": "574125dadf1e4d3563843066"
    },
    {
        "name": "Geospatial",
        "slug": "geospatial",
        "objectID": "5f25726a90ac4260edf35078"
    },
    {
        "name": "angular material",
        "slug": "angular-material",
        "objectID": "57c3ba45cb80370904fc5b48"
    },
    {
        "name": "ios apps",
        "slug": "ios-apps",
        "objectID": "56744721958ef13879b94ae2"
    },
    {
        "name": "wordpress themes",
        "slug": "wordpress-themes",
        "objectID": "56744721958ef13879b94af8"
    },
    {
        "name": "k8s",
        "slug": "k8s",
        "objectID": "58456f2afc2da7579e5f3ed0"
    },
    {
        "name": "Hugo",
        "slug": "hugo",
        "objectID": "57ce27e495368c463b09804f"
    },
    {
        "name": "a11y",
        "slug": "a11y",
        "objectID": "57aa00d170387a4ab0fe0cf8"
    },
    {
        "name": "webapps",
        "slug": "webapps",
        "objectID": "56744721958ef13879b94b6f"
    },
    {
        "name": "features",
        "slug": "features",
        "objectID": "56744722958ef13879b9515c"
    },
    {
        "name": "Prettier",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496483511/fdbnmvy2bkecx03csbom.png",
        "slug": "prettier",
        "objectID": "592d689fa6614cba3f738146"
    },
    {
        "name": "WebRTC",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1465362672/yzdode4h9er49uccfvbu.png",
        "slug": "webrtc",
        "objectID": "56744722958ef13879b94f0e"
    },
    {
        "name": "web developers",
        "slug": "web-developers",
        "objectID": "56744722958ef13879b94e6b"
    },
    {
        "name": "Emails",
        "slug": "emails",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496150225/u6kgjtvvqkkefncoyovl.png",
        "objectID": "57458b6c92b151fb90adc493"
    },
    {
        "name": "bundling",
        "slug": "bundling",
        "objectID": "5777dbd757675ec2fcfd09fb"
    },
    {
        "name": "localstorage",
        "slug": "localstorage",
        "objectID": "56744722958ef13879b95107"
    },
    {
        "name": "Earth Engine",
        "slug": "earth-engine",
        "objectID": "5f26246490ac4260edf3596e"
    },
    {
        "name": "test driven development",
        "slug": "test-driven-development",
        "objectID": "56744723958ef13879b95595"
    },
    {
        "name": "S3",
        "slug": "s3",
        "objectID": "588f13c9ae0398620533ed80"
    },
    {
        "name": "message queue",
        "slug": "message-queue",
        "objectID": "5688d3a00716b983ccc79766"
    },
    {
        "name": "mentor",
        "slug": "mentor",
        "objectID": "56744721958ef13879b94dc8"
    },
    {
        "name": "websites",
        "slug": "websites",
        "objectID": "56744721958ef13879b94c58"
    },
    {
        "name": "maven",
        "slug": "maven",
        "objectID": "56744723958ef13879b95232"
    },
    {
        "name": "turkish",
        "slug": "turkish",
        "objectID": "5f61e4c5dc74720d9b85ed19"
    },
    {
        "name": "MEAN Stack",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1472484615/gnwpbhw8nqe9aj4frzzh.jpg",
        "slug": "mean",
        "objectID": "56744721958ef13879b94bc0"
    },
    {
        "name": "Emacs",
        "slug": "emacs",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1502978326/qzxw4oqebc9su0pzpvqt.png",
        "objectID": "56744721958ef13879b949cf"
    },
    {
        "name": "Preact",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1459503980/i2tjk2olam4wqr7kyqet.jpg",
        "slug": "preact",
        "objectID": "56fe1c265db965849f7b379f"
    },
    {
        "name": "Future",
        "slug": "future",
        "objectID": "5699066c72ca04ea5d79faa1"
    },
    {
        "name": "es2015",
        "slug": "es2015",
        "objectID": "5678d29ae0956f4764b3edfb"
    },
    {
        "name": "sales",
        "slug": "sales",
        "objectID": "58cd06ec68e963fa61d68d7f"
    },
    {
        "name": "versioning",
        "slug": "versioning",
        "objectID": "578b9582b1a4a0d81ffbb1fe"
    },
    {
        "name": "computer",
        "slug": "computer",
        "objectID": "57628dcd820dd45f3fbd8eb6"
    },
    {
        "name": "cookies",
        "slug": "cookies",
        "objectID": "56744721958ef13879b94a7d"
    },
    {
        "name": "proxy",
        "slug": "proxy",
        "objectID": "56744721958ef13879b94917"
    },
    {
        "name": "Drupal",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1490298700/uqjjgtu4a1lpqxjcdshb.png",
        "slug": "drupal",
        "objectID": "57444da29ade925885158cb0"
    },
    {
        "name": "graphics",
        "slug": "graphics",
        "objectID": "578378ebfcb4d586db19492c"
    },
    {
        "name": "Scraping",
        "slug": "scraping",
        "objectID": "5834805addfa96eb7c5d478b"
    },
    {
        "name": "typography",
        "slug": "typography",
        "objectID": "56744721958ef13879b94944"
    },
    {
        "name": "marketplace",
        "slug": "marketplace",
        "objectID": "586d0df986a586aec93327e1"
    },
    {
        "name": "OOPS",
        "slug": "oops",
        "objectID": "5713f234162bdaad9f92b0c1"
    },
    {
        "name": "production",
        "slug": "production",
        "objectID": "57067a5e115103c3b097818b"
    },
    {
        "name": "process",
        "slug": "process",
        "objectID": "5694af13c1c0117cef5aea67"
    },
    {
        "name": "API basics ",
        "slug": "api-basics",
        "objectID": "5f8dd8dffc30613d8cd9379a"
    },
    {
        "name": "PaaS",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1461694808/ip8ls4fz7nxi01uhvmch.jpg",
        "slug": "paas",
        "objectID": "56744721958ef13879b94ddc"
    },
    {
        "name": "Website design",
        "slug": "website-design",
        "objectID": "5866a4c0b99398bc30c43daa"
    },
    {
        "name": "SSR",
        "slug": "ssr",
        "objectID": "5747fbbd9ade925885158f94"
    },
    {
        "name": "i18n",
        "slug": "i18n",
        "objectID": "568f1af6525da8063d08fb2d"
    },
    {
        "name": "ci",
        "slug": "ci",
        "objectID": "56744721958ef13879b94a16"
    },
    {
        "name": "centos",
        "slug": "centos",
        "objectID": "57a67d66e6998a66b06f40e6"
    },
    {
        "name": "social",
        "slug": "social",
        "objectID": "5709b8c3115103c3b0978327"
    },
    {
        "slug": "go-cjidm6n1p00lpq9s29dy2bsiq",
        "objectID": "5b218969e0d20c016e052f69"
    },
    {
        "name": "patterns",
        "slug": "patterns",
        "objectID": "56744721958ef13879b94db8"
    },
    {
        "name": "workathome",
        "slug": "workathome",
        "objectID": "5f19d647cef915427a14ca2c"
    },
    {
        "name": "selenium-webdriver",
        "slug": "selenium-webdriver-1",
        "objectID": "5f0c3b23880268625262ba76"
    },
    {
        "name": "macbook",
        "slug": "macbook",
        "objectID": "56744721958ef13879b94dc2"
    },
    {
        "name": "Voice",
        "slug": "voice",
        "objectID": "590102fd9863a67f4cc93055"
    },
    {
        "name": "orm",
        "slug": "orm",
        "objectID": "56b632b3a0967efc587c7d24"
    },
    {
        "name": "Bitbucket",
        "slug": "bitbucket",
        "objectID": "580e08175fec191d85b14fc7"
    },
    {
        "name": "dashboard",
        "slug": "dashboard",
        "objectID": "56b45894500fd79e29bd7bf3"
    },
    {
        "name": "composer",
        "slug": "composer",
        "objectID": "56b234f2a71b2df12bea6e43"
    },
    {
        "name": "Remote Sensing ",
        "slug": "remote-sensing",
        "objectID": "5f25726a90ac4260edf35077"
    },
    {
        "name": "ELM",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1491295764/mh4haipogztgffbnt4y4.png",
        "slug": "elm",
        "objectID": "567bbdf52b926c3063c30713"
    },
    {
        "name": "spark",
        "slug": "spark",
        "objectID": "56744722958ef13879b95180"
    },
    {
        "name": "ionic framework",
        "slug": "ionic-framework",
        "objectID": "56744723958ef13879b95254"
    },
    {
        "name": "robotics",
        "slug": "robotics",
        "objectID": "56744723958ef13879b953a2"
    },
    {
        "name": "twilio",
        "slug": "twilio",
        "objectID": "57e57691ef99cf03582fe2b3"
    },
    {
        "name": "mvp",
        "slug": "mvp",
        "objectID": "56744723958ef13879b95572"
    },
    {
        "name": "medium",
        "slug": "medium",
        "objectID": "56744721958ef13879b94871"
    },
    {
        "slug": "devjourney",
        "objectID": "5e43fc8b8c89a92316ccd6c2"
    },
    {
        "name": "azure certified",
        "slug": "azure-certified",
        "objectID": "5f28ea6e3e336e0de23093c0"
    },
    {
        "name": "PostCSS",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1459504796/nipxkl4fu2zf7sqfl5fj.jpg",
        "slug": "postcss",
        "objectID": "56744721958ef13879b94e29"
    },
    {
        "name": "AR",
        "slug": "ar",
        "objectID": "586cd5ae615b9737b81b3ddb"
    },
    {
        "name": "photoshop",
        "slug": "photoshop",
        "objectID": "5674471d958ef13879b94796"
    },
    {
        "name": "crm",
        "slug": "crm",
        "objectID": "580df8332a45c6fdcb43fa14"
    },
    {
        "name": "funny",
        "slug": "funny",
        "objectID": "56744723958ef13879b9547b"
    },
    {
        "name": "Frontend frameworks",
        "slug": "frontend-frameworks",
        "objectID": "56a0676792921b8f79d360f5"
    },
    {
        "name": "technology stack",
        "slug": "technology-stack",
        "objectID": "56b99e6cacee1cee848702ec"
    },
    {
        "name": "jekyll",
        "slug": "jekyll",
        "objectID": "56744721958ef13879b948e8"
    },
    {
        "name": "cloudinary",
        "slug": "cloudinary",
        "objectID": "5678a007e0956f4764b3ed53"
    },
    {
        "name": "queue",
        "slug": "queue",
        "objectID": "56744723958ef13879b952c0"
    },
    {
        "name": "sdk",
        "slug": "sdk",
        "objectID": "56f972afea33a5b266f2fe04"
    },
    {
        "name": "styleguide",
        "slug": "styleguide",
        "objectID": "56744722958ef13879b951a4"
    },
    {
        "name": "Meta",
        "slug": "meta",
        "objectID": "58b6c12eb2566b537ac16cb7"
    },
    {
        "name": "CORS",
        "slug": "cors",
        "objectID": "5676154ae64b075af6ade54e"
    },
    {
        "name": "props",
        "slug": "props",
        "objectID": "5f2959166face9141b78fa82"
    },
    {
        "name": "Aurelia",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1453819641/j5c2dwhqwvzh9apczioe.jpg",
        "slug": "aurelia",
        "objectID": "56744722958ef13879b94f49"
    },
    {
        "name": "YAML",
        "slug": "yaml",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1499159858/ude93xlquvvbxbw5xkg4.png",
        "objectID": "56d9941a489cf60d99aa90c4"
    },
    {
        "name": "EQCSS",
        "slug": "eqcss",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1520491825399/HJF4pLCdz.png",
        "objectID": "5784baeefcb4d586db194a64"
    },
    {
        "name": "layout",
        "slug": "layout",
        "objectID": "56d2f72f1878dfef04178e6e"
    },
    {
        "name": "flow",
        "slug": "flow",
        "objectID": "56744721958ef13879b94a2e"
    },
    {
        "name": "admin",
        "slug": "admin",
        "objectID": "57778738f271844db9e1eb41"
    },
    {
        "name": "tech",
        "slug": "tech-cilba77mg0010ya53d05qtkuu",
        "objectID": "56d7498b6722ee828dbeafe3"
    },
    {
        "name": "Cordova",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1520160966692/ByyCeLt_M.jpeg",
        "slug": "cordova",
        "objectID": "56744721958ef13879b94a1b"
    },
    {
        "name": "Build tool",
        "slug": "build-tool",
        "objectID": "56744722958ef13879b950a3"
    },
    {
        "name": "vps",
        "slug": "vps",
        "objectID": "56744722958ef13879b951c4"
    },
    {
        "name": "gradle",
        "slug": "gradle",
        "objectID": "56744722958ef13879b95164"
    },
    {
        "name": "ebook",
        "slug": "ebook",
        "objectID": "56744721958ef13879b948f0"
    },
    {
        "slug": "hooks",
        "objectID": "5c1778c2252f6d5b707ae169"
    },
    {
        "name": "gmail",
        "slug": "gmail",
        "objectID": "58596eaaeb509c3ba23d4c87"
    },
    {
        "name": "inheritance",
        "slug": "inheritance",
        "objectID": "573349a7181d813d33746639"
    },
    {
        "name": "stripe",
        "slug": "stripe",
        "objectID": "56744723958ef13879b9554c"
    },
    {
        "name": "#sucessful blogging",
        "slug": "sucessful-blogging",
        "objectID": "5fb801781b7ab0041800c67c"
    },
    {
        "name": "watercooler",
        "slug": "watercooler",
        "objectID": "5f36e920877a013acb03cd10"
    },
    {
        "name": "eloquent",
        "slug": "eloquent",
        "objectID": "56ed7b765edec9d7189a0b73"
    },
    {
        "name": "image",
        "slug": "image",
        "objectID": "56744721958ef13879b948fc"
    },
    {
        "name": "book",
        "slug": "book",
        "objectID": "56744720958ef13879b947b2"
    },
    {
        "name": "router",
        "slug": "router",
        "objectID": "56744723958ef13879b95210"
    },
    {
        "name": "#ChooseToChallenge",
        "slug": "choosetochallenge",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1614605641484/1qeXO9QXg.png",
        "objectID": "603cc4b61f91337d465bee68"
    },
    {
        "name": "geemap",
        "slug": "geemap",
        "objectID": "5f465bac9b597625e2dec06a"
    },
    {
        "name": "ASP",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1451108441/qt4zgtcynwzy2rjvk0t6.png",
        "slug": "asp",
        "objectID": "5674471d958ef13879b9477c"
    },
    {
        "name": "front end",
        "slug": "front-end",
        "objectID": "56744723958ef13879b95554"
    },
    {
        "name": "SVG Animation",
        "slug": "svg-animation",
        "objectID": "569cd00972ca04ea5d79fca2"
    },
    {
        "name": "meteorjs",
        "slug": "meteorjs",
        "objectID": "56744723958ef13879b9558f"
    },
    {
        "name": "nest",
        "slug": "nest",
        "objectID": "583ca6c6ddfa96eb7c5d896f"
    },
    {
        "name": "podcasts",
        "slug": "podcasts",
        "objectID": "56744722958ef13879b95194"
    },
    {
        "name": "designing",
        "slug": "designing",
        "objectID": "56744721958ef13879b94bd9"
    },
    {
        "name": "Clerk.dev",
        "slug": "clerkdev",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1625245518596/nW4Y4hYHH.png",
        "objectID": "60df384f03707d644a4feb38"
    },
    {
        "name": "web servers",
        "slug": "web-servers",
        "objectID": "56744721958ef13879b94a88"
    },
    {
        "name": "function",
        "slug": "function",
        "objectID": "56744720958ef13879b947ea"
    },
    {
        "name": "DraftJS",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1491387822/zwctxp8006exywfg17pd.jpg",
        "slug": "draftjs",
        "objectID": "56f4d674990bca7c25e99318"
    },
    {
        "name": "redux-saga",
        "slug": "redux-saga",
        "objectID": "5776f09cf271844db9e1eb05"
    },
    {
        "name": "responsive designs",
        "slug": "responsive-designs",
        "objectID": "56744721958ef13879b94d5b"
    },
    {
        "name": "Socket.io",
        "slug": "socketio-cijy9e2c700c6vm5357q8xsf3",
        "objectID": "56aa0ea0960088c21db4d77a"
    },
    {
        "name": "OSS",
        "slug": "oss",
        "objectID": "581875942ca37f164781f4b1"
    },
    {
        "name": "chartjs",
        "slug": "chartjs",
        "objectID": "56744721958ef13879b94993"
    },
    {
        "slug": "deno",
        "objectID": "5cca9dd21077bc6278d31cc7"
    },
    {
        "slug": "cisco",
        "objectID": "5d9cc879f74b4d4660eede6b"
    },
    {
        "name": "emoji",
        "slug": "emoji",
        "objectID": "571751b03c2a84abc85a1e11"
    },
    {
        "name": "await",
        "slug": "await",
        "objectID": "56cbdb23b70682283f9edeb7"
    },
    {
        "name": "hibernate",
        "slug": "hibernate",
        "objectID": "56744723958ef13879b955ac"
    },
    {
        "name": "Julia",
        "slug": "julia",
        "objectID": "58749cfee6e8728a7f133535"
    },
    {
        "name": "vagrant",
        "slug": "vagrant",
        "objectID": "56744721958ef13879b94a24"
    },
    {
        "name": "grid",
        "slug": "grid",
        "objectID": "56744723958ef13879b952d3"
    },
    {
        "name": "naming",
        "slug": "naming",
        "objectID": "5747655e92b151fb90adc622"
    },
    {
        "name": "error",
        "slug": "error",
        "objectID": "56744721958ef13879b9496b"
    },
    {
        "name": "templates",
        "slug": "templates",
        "objectID": "56744721958ef13879b94853"
    },
    {
        "name": "design and architecture",
        "slug": "design-and-architecture",
        "objectID": "5f38bd060801bf3f76e5f9e5"
    },
    {
        "name": "Haskell",
        "slug": "haskell",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496182720/z8gaemi99htfdnclmicj.png",
        "objectID": "56744723958ef13879b9537a"
    },
    {
        "name": "PayPal",
        "slug": "paypal",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1504679615/ds7ftsav58hjetqeeqq3.jpg",
        "objectID": "56ee65cfcb06805ba9b7c66d"
    },
    {
        "name": "native",
        "slug": "native",
        "objectID": "56744723958ef13879b9530a"
    },
    {
        "name": "maps",
        "slug": "maps",
        "objectID": "574853c092b151fb90adc6b1"
    },
    {
        "name": "class",
        "slug": "class",
        "objectID": "573c6a7803e642f04bb03d47"
    },
    {
        "name": "mobile application development",
        "slug": "mobile-application-development",
        "objectID": "56744721958ef13879b949b7"
    },
    {
        "name": "The Clerk Hackathon on Hashnode",
        "slug": "clerkhackathon",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1625245553278/S6gbVfdNp.png",
        "objectID": "60df381403707d644a4feb2f"
    },
    {
        "name": "web3",
        "slug": "web3",
        "logo": null,
        "objectID": "59df443dfb1deef9745a4ef0"
    },
    {
        "slug": "wsl",
        "objectID": "595ed5ae8f1dffe434c00000"
    },
    {
        "name": "geolocation",
        "slug": "geolocation",
        "objectID": "579f2a6bb5724a7273404206"
    },
    {
        "name": "coroutines",
        "slug": "coroutines",
        "objectID": "56facb5fbac95334fc2fa50b"
    },
    {
        "name": "object",
        "slug": "object",
        "objectID": "56744722958ef13879b9505b"
    },
    {
        "name": "debug",
        "slug": "debug",
        "objectID": "56744721958ef13879b94922"
    },
    {
        "name": "freelancer",
        "slug": "freelancer",
        "objectID": "56744723958ef13879b9550a"
    },
    {
        "name": "Cosmic JS",
        "slug": "cosmic-js",
        "objectID": "590743c50e14932382c2ad5a"
    },
    {
        "name": "WhoIsHiring",
        "slug": "whoishiring",
        "objectID": "5d946e4ec510092a323bc34a"
    },
    {
        "name": "ide",
        "slug": "ide",
        "objectID": "56744721958ef13879b94879"
    },
    {
        "name": "pair programming",
        "slug": "pair-programming",
        "objectID": "56744722958ef13879b95071"
    },
    {
        "slug": "health-cjaeh844x02vvo3wtj5r2s75q",
        "objectID": "5a189c9fee67ea9312f02c18"
    },
    {
        "name": "code smell",
        "slug": "code-smell",
        "objectID": "57361d1cffaaff8febd12cee"
    },
    {
        "name": "V8",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1450536374/hnlihf5tv3veoxx1igpa.jpg",
        "slug": "v8",
        "objectID": "56744723958ef13879b954f0"
    },
    {
        "name": "Erlang",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1475321105/tp4co0lnolmi4x7ln7f6.jpg",
        "slug": "erlang",
        "objectID": "56744722958ef13879b94e60"
    },
    {
        "name": "Clojure",
        "slug": "clojure",
        "objectID": "56b01bce0a7ca0c6f70c1ef8"
    },
    {
        "name": "rabbitmq",
        "slug": "rabbitmq",
        "objectID": "56a4fc8ec84f2c6913b8e9f9"
    },
    {
        "name": "Sketch",
        "slug": "sketch",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1522266937699/ByGS7dtcG.jpeg",
        "objectID": "56744722958ef13879b94e7d"
    },
    {
        "name": "backend as a service",
        "slug": "backend-as-a-service",
        "objectID": "577f08da16a33191db042f9e"
    },
    {
        "name": "mocha",
        "slug": "mocha",
        "objectID": "56744721958ef13879b94a3a"
    },
    {
        "name": "stream",
        "slug": "stream",
        "objectID": "56744723958ef13879b95580"
    },
    {
        "name": "container",
        "slug": "container",
        "objectID": "56744721958ef13879b94ad6"
    },
    {
        "name": "woocommerce",
        "slug": "woocommerce",
        "objectID": "56744720958ef13879b94808"
    },
    {
        "name": "webperf",
        "slug": "webperf-ciur6tor503mfpx53ic2rvrs2",
        "objectID": "5810e609a901f605c438b691"
    },
    {
        "name": "form",
        "slug": "form",
        "objectID": "56744722958ef13879b95138"
    },
    {
        "name": "#⛺the-technical-writing-bootcamp",
        "slug": "the-technical-writing-bootcamp",
        "objectID": "5f6d12a1005ded5336f6f534"
    },
    {
        "name": "HTML Emails",
        "slug": "html-emails",
        "objectID": "56a1b72a72ca04ea5d7a003b"
    },
    {
        "name": "PHPUnit",
        "slug": "phpunit",
        "objectID": "57ea3f2397eba84632db561a"
    },
    {
        "name": "http2",
        "slug": "http2",
        "objectID": "56744721958ef13879b94a76"
    },
    {
        "name": "kibana",
        "slug": "kibana",
        "objectID": "56744721958ef13879b9486d"
    },
    {
        "name": "osx",
        "slug": "osx",
        "objectID": "56744723958ef13879b9523e"
    },
    {
        "name": "ghost",
        "slug": "ghost",
        "objectID": "56744722958ef13879b951c6"
    },
    {
        "name": "hybrid apps",
        "slug": "hybrid-apps",
        "objectID": "56744721958ef13879b94e08"
    },
    {
        "name": "virtual dom",
        "slug": "virtual-dom",
        "objectID": "56744720958ef13879b947fc"
    },
    {
        "name": "editor",
        "slug": "editor",
        "objectID": "5674471d958ef13879b94781"
    },
    {
        "name": "Session",
        "slug": "session",
        "objectID": "57c8241860189c8953a67f81"
    },
    {
        "name": "parse server",
        "slug": "parse-server",
        "objectID": "578ae4e4b1a4a0d81ffbb1bb"
    },
    {
        "slug": "tailwind",
        "objectID": "5ddd484e94c050e177a6aa7e"
    },
    {
        "name": "mongo",
        "slug": "mongo",
        "objectID": "56744721958ef13879b94a93"
    },
    {
        "name": "what successful blogging means to me",
        "slug": "what-successful-blogging-means-to-me",
        "objectID": "5faff31939a1f54636490632"
    },
    {
        "name": "windows server",
        "slug": "windows-server",
        "objectID": "5f1dd296f4016901885ccbf8"
    },
    {
        "name": "Objective C",
        "slug": "objective-c",
        "objectID": "56744721958ef13879b94bfe"
    },
    {
        "name": "vr",
        "slug": "vr",
        "objectID": "5674d5807446b75bb60141f8"
    },
    {
        "name": "microsoft edge",
        "slug": "microsoft-edge",
        "objectID": "56744720958ef13879b9480c"
    },
    {
        "name": "zurb",
        "slug": "zurb",
        "objectID": "56744721958ef13879b94a36"
    },
    {
        "name": "promise",
        "slug": "promise",
        "objectID": "56744721958ef13879b9488b"
    },
    {
        "slug": "growth",
        "objectID": "5a64fbe6e30c5b6655a6a4df"
    },
    {
        "name": "Meetup",
        "slug": "meetup",
        "objectID": "56d9b1b0e853431899d036ce"
    },
    {
        "name": "modal",
        "slug": "modal",
        "objectID": "56ace1e6cc975f0cc6878bc0"
    },
    {
        "name": "Benchmark",
        "slug": "benchmark",
        "objectID": "5680fde5aeae5c9e229cf8e1"
    },
    {
        "name": "Lua",
        "slug": "lua",
        "objectID": "5726e4fac1f71f91e880ad2b"
    },
    {
        "name": "perl",
        "slug": "perl",
        "objectID": "56744722958ef13879b9512e"
    },
    {
        "name": "postgres",
        "slug": "postgres",
        "objectID": "56744722958ef13879b94f0b"
    },
    {
        "name": "Element Queries",
        "slug": "element-queries",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1498763362/lvxxrbdpyjwm1c8pxjck.png",
        "objectID": "581a55d4c055bbfb46d880da"
    },
    {
        "name": "logstash",
        "slug": "logstash",
        "objectID": "56744723958ef13879b953c3"
    },
    {
        "name": "FaaS",
        "slug": "faas",
        "objectID": "58cbe70848830eae2c11fdf4"
    },
    {
        "name": "laravel ",
        "slug": "laravel-cikr40o0m01r27453d8eux03p",
        "objectID": "56c4ad109c7666b0da73f29d"
    },
    {
        "name": "immutable",
        "slug": "immutable",
        "objectID": "56744722958ef13879b9514a"
    },
    {
        "slug": "pmlcourse",
        "objectID": "5e4a6b728c89a92316cd4a33"
    },
    {
        "name": "alternative",
        "slug": "alternative",
        "objectID": "58085c202a45c6fdcb43f3c3"
    },
    {
        "name": "Smalltalk",
        "slug": "smalltalk",
        "objectID": "57da642fd17cab545caba0d3"
    },
    {
        "name": "cpu",
        "slug": "cpu",
        "objectID": "57ae11c08dae0c2f1d4420cb"
    },
    {
        "name": "survey",
        "slug": "survey",
        "objectID": "56744721958ef13879b949c2"
    },
    {
        "name": "Cassandra",
        "slug": "cassandra",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1516175375653/BJdMlF34z.jpeg",
        "objectID": "56744721958ef13879b9490e"
    },
    {
        "name": "css3 animation",
        "slug": "css3-animation",
        "objectID": "56744722958ef13879b94ef0"
    },
    {
        "name": "Semantic UI",
        "slug": "semantic-ui",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1496405644/rsuq8bqv2aoqqnq8ckzw.png",
        "objectID": "56744723958ef13879b95206"
    },
    {
        "name": "restful",
        "slug": "restful",
        "objectID": "56744723958ef13879b952c6"
    },
    {
        "name": "Deploy ",
        "slug": "deploy",
        "objectID": "57578b6282cbbab8dcd47842"
    },
    {
        "name": "solid",
        "slug": "solid",
        "objectID": "56e6d5598c0bb8288a559c97"
    },
    {
        "name": "font awesome",
        "slug": "font-awesome",
        "objectID": "56744721958ef13879b9492f"
    },
    {
        "slug": "flutter-cjxern4nz000zx6s1d95hxw7x",
        "objectID": "5d14d342867d9aba094fd8f5"
    },
    {
        "slug": "nestjs",
        "objectID": "59e46480ebcd60373ac04db3"
    },
    {
        "name": "junit",
        "slug": "junit",
        "objectID": "57935f8804cd973c9154652c"
    },
    {
        "name": "TLS",
        "slug": "tls",
        "objectID": "56a6742dc84f2c6913b8eac2"
    },
    {
        "name": "NetworkAutomation",
        "slug": "networkautomation",
        "objectID": "5f9da80a701b426a980950db"
    },
    {
        "name": "Less",
        "slug": "less",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1509610482/o0vybjlg9bncpy4tq0x0.png",
        "objectID": "56744721958ef13879b949ef"
    },
    {
        "name": "bdd",
        "slug": "bdd",
        "objectID": "56744721958ef13879b94aa0"
    },
    {
        "name": "baas",
        "slug": "baas",
        "objectID": "56744723958ef13879b953ad"
    },
    {
        "name": "MVVM",
        "slug": "mvvm",
        "objectID": "56a0ee5172ca04ea5d79ff9d"
    },
    {
        "name": "responsive",
        "slug": "responsive",
        "objectID": "56744723958ef13879b95520"
    },
    {
        "name": "Error Tracking",
        "slug": "error-tracking",
        "objectID": "58d2b7fa440c92dcfd4c5801"
    },
    {
        "name": "media queries",
        "slug": "media-queries",
        "objectID": "56744721958ef13879b949f2"
    },
    {
        "slug": "2articles1week-1",
        "objectID": "5f0b171bf80d68509e50d2c1"
    },
    {
        "name": "RethinkDB",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1455115223/oluebzm7a23ayicyyr93.png",
        "slug": "rethinkdb",
        "objectID": "5674471d958ef13879b94774"
    },
    {
        "name": ".NET",
        "slug": "net-cikag7ck9004u4153550rzs6c",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1515074840143/Bkl7B3sXz.jpeg",
        "objectID": "56b54dae8dabdc6142c1ac87"
    },
    {
        "name": "codeigniter",
        "slug": "codeigniter",
        "objectID": "577d5a59f5d62870bc1e3436"
    },
    {
        "name": "web dev",
        "slug": "web-dev",
        "objectID": "56744722958ef13879b951f5"
    },
    {
        "name": "Question",
        "slug": "question",
        "objectID": "56b4ee44ed97cf2d3faa9e85"
    },
    {
        "name": "passport",
        "slug": "passport",
        "objectID": "56744723958ef13879b955b5"
    },
    {
        "slug": "strapi",
        "objectID": "5a60b356acaaf63131a26558"
    },
    {
        "name": "ECS",
        "slug": "ecs",
        "objectID": "58456f2afc2da7579e5f3ece"
    },
    {
        "name": "Motivation ",
        "slug": "motivation-1",
        "objectID": "5f95c76540346172a86c28c1"
    },
    {
        "name": "KoaJS",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1472485426/mypuzb6iv30nivcnj67f.jpg",
        "slug": "koa",
        "objectID": "56744720958ef13879b947fb"
    },
    {
        "name": "HapiJS",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1472485161/dtjd0iyqgwiqqksg3see.png",
        "slug": "hapijs",
        "objectID": "56744721958ef13879b94dd2"
    },
    {
        "name": "Java Framework",
        "slug": "java-framework",
        "objectID": "5674471d958ef13879b9476f"
    },
    {
        "name": "NativeScript",
        "slug": "nativescript",
        "objectID": "578f329a5460288cdeb6f281"
    },
    {
        "name": "realtime apps",
        "slug": "realtime-apps",
        "objectID": "56744721958ef13879b94a1e"
    },
    {
        "name": "DevRant",
        "slug": "devrant",
        "objectID": "5d946e601971c92f3298b281"
    },
    {
        "name": "amp",
        "slug": "amp",
        "objectID": "56744723958ef13879b9556c"
    },
    {
        "name": "grunt",
        "slug": "grunt",
        "objectID": "56744723958ef13879b9547f"
    },
    {
        "name": "es5",
        "slug": "es5",
        "objectID": "56744722958ef13879b94e5a"
    },
    {
        "name": "servers",
        "slug": "servers",
        "objectID": "56744722958ef13879b94e49"
    },
    {
        "name": "rss",
        "slug": "rss",
        "objectID": "56744721958ef13879b949e6"
    },
    {
        "slug": "flask-cje4g3tgk00wdm0wtaepqxd29",
        "objectID": "5a94378b2e2d22686d3319ec"
    },
    {
        "slug": "vpn",
        "objectID": "5a66e6714c88fdb11626d866"
    },
    {
        "name": "writing ",
        "slug": "writing-1",
        "objectID": "5f541f8fd34e0b0a2135b7ac"
    },
    {
        "name": "CouchDB",
        "slug": "couchdb",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1516182897537/HJ9_TqnNG.jpeg",
        "objectID": "56744722958ef13879b94e52"
    },
    {
        "name": "responsive design",
        "slug": "responsive-design",
        "objectID": "568104b15d0b198322f23be3"
    },
    {
        "name": "functional",
        "slug": "functional",
        "objectID": "56744723958ef13879b9541e"
    },
    {
        "name": "es7",
        "slug": "es7",
        "objectID": "56744722958ef13879b9516e"
    },
    {
        "name": "flowtype",
        "slug": "flowtype",
        "objectID": "57a07b7703626115baea275d"
    },
    {
        "name": "airbnb",
        "slug": "airbnb",
        "objectID": "56744721958ef13879b9495f"
    },
    {
        "slug": "swiftui",
        "objectID": "5d117acd15a6b27b36bb063b"
    },
    {
        "name": "offline",
        "slug": "offline",
        "objectID": "57ff8bed7a5d253b23bc40dd"
    },
    {
        "name": "css preprocessors",
        "slug": "css-preprocessors",
        "objectID": "56744723958ef13879b95314"
    },
    {
        "name": "web app",
        "slug": "web-app",
        "objectID": "56744722958ef13879b950de"
    },
    {
        "name": "beta",
        "slug": "beta",
        "objectID": "56c6bd7d46a50cb768ba7d04"
    },
    {
        "name": "webdriver",
        "slug": "webdriver",
        "objectID": "56a1bb2a92921b8f79d3620e"
    },
    {
        "name": "Algolia",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1454497142/tmtr6swfz0tqfeiphd0q.png",
        "slug": "algolia",
        "objectID": "56744723958ef13879b95404"
    },
    {
        "name": "tech stacks",
        "slug": "tech-stacks",
        "objectID": "56744721958ef13879b94aea"
    },
    {
        "name": "relay",
        "slug": "relay",
        "objectID": "56744720958ef13879b947a8"
    },
    {
        "name": "Sequelize",
        "slug": "sequelize",
        "objectID": "56bf8908f7a8a564cd3cf417"
    },
    {
        "name": "CoffeeScript",
        "slug": "coffeescript",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1524116531939/ry2EnsS2M.jpeg",
        "objectID": "56744722958ef13879b9519f"
    },
    {
        "name": "browserify",
        "slug": "browserify",
        "objectID": "56744721958ef13879b94c51"
    },
    {
        "slug": "rtos",
        "objectID": "5e94317328f1a84f59c49fb9"
    },
    {
        "slug": "spanish",
        "objectID": "5d24dd07963b3099469e31b1"
    },
    {
        "name": "universal",
        "slug": "universal",
        "objectID": "5691098591906f99ef523690"
    },
    {
        "name": "software design",
        "slug": "software-design",
        "objectID": "56744721958ef13879b94acd"
    },
    {
        "name": "CSS Modules",
        "slug": "css-modules",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1502977775/w0xxhrabmj1zhddsdiu1.png",
        "objectID": "56bf8908f7a8a564cd3cf415"
    },
    {
        "name": "PhpStorm",
        "slug": "phpstorm",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1497046152/nmpeb8i0lo2zofxg7xo5.png",
        "objectID": "56eae87928492b76a9948344"
    },
    {
        "name": "scaling",
        "slug": "scaling",
        "objectID": "56744721958ef13879b94aa9"
    },
    {
        "name": "tool",
        "slug": "tool",
        "objectID": "568bb9dbe99c5444f3233892"
    },
    {
        "name": "charting library",
        "slug": "charting-library",
        "objectID": "56744721958ef13879b94e41"
    },
    {
        "slug": "devblog",
        "objectID": "5cdbcce2d7898f811504a6c9"
    },
    {
        "name": "IWD2021",
        "slug": "iwd2021",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1614605663765/dl9O9JyP9.png",
        "objectID": "603cecbcc8eb04017922ce83"
    },
    {
        "slug": "cpp-ck4ra5k7300nlv2s1jbkdp2qh",
        "objectID": "5e08e075bcc8c0ce78e93263"
    },
    {
        "name": "smtp",
        "slug": "smtp",
        "objectID": "56744723958ef13879b953c9"
    },
    {
        "name": "plugin",
        "slug": "plugin",
        "objectID": "56744722958ef13879b94ff8"
    },
    {
        "name": "cto",
        "slug": "cto",
        "objectID": "56744720958ef13879b9480f"
    },
    {
        "name": "100DaysOfCloud",
        "slug": "100daysofcloud",
        "objectID": "5f216568938147308462a35b"
    },
    {
        "name": "PhoneGap",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1475235526/igis5i1twypixaebdkun.jpg",
        "slug": "phonegap",
        "objectID": "56744720958ef13879b947fa"
    },
    {
        "name": "SailsJS",
        "logo": "https://res.cloudinary.com/hashnode/image/upload/v1472484652/puabwwilk0dvwv9gsepb.png",
        "slug": "sailsjs",
        "objectID": "56744723958ef13879b9527a"
    },
    {
        "name": "socket",
        "slug": "socket",
        "objectID": "576bd575956de5c931689074"
    },
    {
        "name": "wasm",
        "slug": "wasm",
        "objectID": "57612cfa7e4505f8314fb29a"
    },
    {
        "name": "rxjava",
        "slug": "rxjava",
        "objectID": "56d93d14696d94e491c06f47"
    },
    {
        "name": "Testing Library",
        "slug": "testing-library",
        "logo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1618896704282/9Z3cbqhmn.png",
        "objectID": "607e6751eb2bd30d2d22a556"
    },
    {
        "name": "c#",
        "slug": "c-cikbdqjwh0042l553122kmxlz",
        "objectID": "56b629b2e6740d0959b6f3d9"
    },
    {
        "name": "Alexa",
        "slug": "alexa",
        "objectID": "57bb2f081351c2290bba1d24"
    },
    {
        "name": "mern-stack",
        "slug": "mern-stack",
        "objectID": "56c752ab34d45a99221aa34f"
    },
    {
        "name": "microservice",
        "slug": "microservice",
        "objectID": "56744723958ef13879b95421"
    },
    {
        "name": "lodash",
        "slug": "lodash",
        "objectID": "56744722958ef13879b95162"
    },
    {
        "name": "code splitting",
        "slug": "code-splitting",
        "objectID": "56e17a0f5d4f204da59e0058"
    },
    {
        "name": "GraphQL ",
        "slug": "graphql-cintl8ori01p0y353nth5857g",
        "objectID": "572a9b9f109fb69b463406e9"
    },
    {
        "name": "isomorphic apps",
        "slug": "isomorphic-apps",
        "objectID": "56744723958ef13879b95505"
    },
    {
        "name": "internet explorer",
        "slug": "internet-explorer",
        "objectID": "56744721958ef13879b94c7b"
    },
    {
        "name": "mobile app",
        "slug": "mobile-app",
        "objectID": "576934c7a841f03b9338c6b3"
    }
];


/***/ }),
/* 71 */
/***/ ((module) => {

module.exports = require("json-to-graphql-query");

/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediumProvider = void 0;
class MediumProvider {
    constructor() {
        this.identifier = 'medium';
        this.name = 'Medium';
    }
    async authenticate(token) {
        const { data: { name, id, imageUrl, username }, } = await (await fetch('https://api.medium.com/v1/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })).json();
        return {
            id,
            name,
            token,
            picture: imageUrl,
            username,
        };
    }
    async publications(token) {
        const { id } = await this.authenticate(token);
        const { data } = await (await fetch(`https://api.medium.com/v1/users/${id}/publications`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })).json();
        return data;
    }
    async post(token, content, settings) {
        const { id } = await this.authenticate(token);
        const { data } = await (await fetch(settings?.publication
            ? `https://api.medium.com/v1/publications/${settings?.publication}/posts`
            : `https://api.medium.com/v1/users/${id}/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: settings.title,
                contentFormat: 'markdown',
                content,
                ...(settings.canonical ? { canonicalUrl: settings.canonical } : {}),
                ...(settings?.tags?.length
                    ? { tags: settings?.tags?.map((p) => p.value) }
                    : {}),
                publishStatus: settings?.publication ? 'draft' : 'public',
            }),
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })).json();
        return {
            postId: data.id,
            releaseURL: data.url,
        };
    }
}
exports.MediumProvider = MediumProvider;


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FacebookProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const social_abstract_1 = __webpack_require__(62);
class FacebookProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'facebook';
        this.name = 'Facebook Page';
        this.isBetweenSteps = true;
        this.scopes = [
            'pages_show_list',
            'business_management',
            'pages_manage_posts',
            'pages_manage_engagement',
            'pages_read_engagement',
            'read_insights',
        ];
    }
    async refreshToken(refresh_token) {
        return {
            refreshToken: '',
            expiresIn: 0,
            accessToken: '',
            id: '',
            name: '',
            picture: '',
            username: '',
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        return {
            url: 'https://www.facebook.com/v20.0/dialog/oauth' +
                `?client_id=${process.env.FACEBOOK_APP_ID}` +
                `&redirect_uri=${encodeURIComponent(`${process.env.FRONTEND_URL}/integrations/social/facebook`)}` +
                `&state=${state}` +
                `&scope=${this.scopes.join(',')}`,
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async reConnect(id, requiredId, accessToken) {
        const information = await this.fetchPageInformation(accessToken, requiredId);
        return {
            id: information.id,
            name: information.name,
            accessToken: information.access_token,
            refreshToken: information.access_token,
            expiresIn: (0, dayjs_1.default)().add(59, 'days').unix() - (0, dayjs_1.default)().unix(),
            picture: information.picture,
            username: information.username,
        };
    }
    async authenticate(params) {
        const getAccessToken = await (await this.fetch('https://graph.facebook.com/v20.0/oauth/access_token' +
            `?client_id=${process.env.FACEBOOK_APP_ID}` +
            `&redirect_uri=${encodeURIComponent(`${process.env.FRONTEND_URL}/integrations/social/facebook${params.refresh ? `?refresh=${params.refresh}` : ''}`)}` +
            `&client_secret=${process.env.FACEBOOK_APP_SECRET}` +
            `&code=${params.code}`)).json();
        const { access_token } = await (await this.fetch('https://graph.facebook.com/v20.0/oauth/access_token' +
            '?grant_type=fb_exchange_token' +
            `&client_id=${process.env.FACEBOOK_APP_ID}` +
            `&client_secret=${process.env.FACEBOOK_APP_SECRET}` +
            `&fb_exchange_token=${getAccessToken.access_token}&fields=access_token,expires_in`)).json();
        const { data } = await (await this.fetch(`https://graph.facebook.com/v20.0/me/permissions?access_token=${access_token}`)).json();
        const permissions = data
            .filter((d) => d.status === 'granted')
            .map((p) => p.permission);
        this.checkScopes(this.scopes, permissions);
        const { id, name, picture: { data: { url }, }, } = await (await this.fetch(`https://graph.facebook.com/v20.0/me?fields=id,name,picture&access_token=${access_token}`)).json();
        return {
            id,
            name,
            accessToken: access_token,
            refreshToken: access_token,
            expiresIn: (0, dayjs_1.default)().add(59, 'days').unix() - (0, dayjs_1.default)().unix(),
            picture: url,
            username: '',
        };
    }
    async pages(accessToken) {
        const { data } = await (await this.fetch(`https://graph.facebook.com/v20.0/me/accounts?fields=id,username,name,picture.type(large)&access_token=${accessToken}`)).json();
        return data;
    }
    async fetchPageInformation(accessToken, pageId) {
        const { id, name, access_token, username, picture: { data: { url }, }, } = await (await this.fetch(`https://graph.facebook.com/v20.0/${pageId}?fields=username,access_token,name,picture.type(large)&access_token=${accessToken}`)).json();
        return {
            id,
            name,
            access_token,
            picture: url,
            username,
        };
    }
    async post(id, accessToken, postDetails) {
        const [firstPost, ...comments] = postDetails;
        let finalId = '';
        let finalUrl = '';
        if ((firstPost?.media?.[0]?.url?.indexOf('mp4') || -2) > -1) {
            const { id: videoId, permalink_url, ...all } = await (await this.fetch(`https://graph.facebook.com/v20.0/${id}/videos?access_token=${accessToken}&fields=id,permalink_url`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    file_url: firstPost?.media?.[0]?.url,
                    description: firstPost.message,
                    published: true,
                }),
            }, 'upload mp4')).json();
            finalUrl = 'https://www.facebook.com/reel/' + videoId;
            finalId = videoId;
        }
        else {
            const uploadPhotos = !firstPost?.media?.length
                ? []
                : await Promise.all(firstPost.media.map(async (media) => {
                    const { id: photoId } = await (await this.fetch(`https://graph.facebook.com/v20.0/${id}/photos?access_token=${accessToken}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            url: media.url,
                            published: false,
                        }),
                    }, 'upload images slides')).json();
                    return { media_fbid: photoId };
                }));
            const { id: postId, permalink_url, ...all } = await (await this.fetch(`https://graph.facebook.com/v20.0/${id}/feed?access_token=${accessToken}&fields=id,permalink_url`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...(uploadPhotos?.length ? { attached_media: uploadPhotos } : {}),
                    message: firstPost.message,
                    published: true,
                }),
            }, 'finalize upload')).json();
            finalUrl = permalink_url;
            finalId = postId;
        }
        const postsArray = [];
        for (const comment of comments) {
            const data = await (await this.fetch(`https://graph.facebook.com/v20.0/${finalId}/comments?access_token=${accessToken}&fields=id,permalink_url`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...(comment.media?.length
                        ? { attachment_url: comment.media[0].url }
                        : {}),
                    message: comment.message,
                }),
            }, 'add comment')).json();
            postsArray.push({
                id: comment.id,
                postId: data.id,
                releaseURL: data.permalink_url,
                status: 'success',
            });
        }
        return [
            {
                id: firstPost.id,
                postId: finalId,
                releaseURL: finalUrl,
                status: 'success',
            },
            ...postsArray,
        ];
    }
    async analytics(id, accessToken, date) {
        const until = (0, dayjs_1.default)().endOf('day').unix();
        const since = (0, dayjs_1.default)().subtract(date, 'day').unix();
        const { data } = await (await this.fetch(`https://graph.facebook.com/v20.0/${id}/insights?metric=page_impressions_unique,page_posts_impressions_unique,page_post_engagements,page_daily_follows,page_video_views&access_token=${accessToken}&period=day&since=${since}&until=${until}`)).json();
        return (data?.map((d) => ({
            label: d.name === 'page_impressions_unique'
                ? 'Page Impressions'
                : d.name === 'page_post_engagements'
                    ? 'Posts Engagement'
                    : d.name === 'page_daily_follows'
                        ? 'Page followers'
                        : d.name === 'page_video_views'
                            ? 'Videos views'
                            : 'Posts Impressions',
            percentageChange: 5,
            data: d?.values?.map((v) => ({
                total: v.value,
                date: (0, dayjs_1.default)(v.end_time).format('YYYY-MM-DD'),
            })),
        })) || []);
    }
}
exports.FacebookProvider = FacebookProvider;


/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InstagramProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const timer_1 = __webpack_require__(63);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const social_abstract_1 = __webpack_require__(62);
class InstagramProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'instagram';
        this.name = 'Instagram\n(Facebook Business)';
        this.isBetweenSteps = true;
        this.toolTip = 'Instagram must be business and connected to a Facebook page';
        this.scopes = [
            'instagram_basic',
            'pages_show_list',
            'pages_read_engagement',
            'business_management',
            'instagram_content_publish',
            'instagram_manage_comments',
            'instagram_manage_insights',
        ];
    }
    async refreshToken(refresh_token) {
        return {
            refreshToken: '',
            expiresIn: 0,
            accessToken: '',
            id: '',
            name: '',
            picture: '',
            username: '',
        };
    }
    async reConnect(id, requiredId, accessToken) {
        const findPage = (await this.pages(accessToken)).find((p) => p.id === requiredId);
        const information = await this.fetchPageInformation(accessToken, {
            id: requiredId,
            pageId: findPage?.pageId,
        });
        return {
            id: information.id,
            name: information.name,
            accessToken: information.access_token,
            refreshToken: information.access_token,
            expiresIn: (0, dayjs_1.default)().add(59, 'days').unix() - (0, dayjs_1.default)().unix(),
            picture: information.picture,
            username: information.username,
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        return {
            url: 'https://www.facebook.com/v20.0/dialog/oauth' +
                `?client_id=${process.env.FACEBOOK_APP_ID}` +
                `&redirect_uri=${encodeURIComponent(`${process.env.FRONTEND_URL}/integrations/social/instagram`)}` +
                `&state=${state}` +
                `&scope=${encodeURIComponent(this.scopes.join(','))}`,
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async authenticate(params) {
        const getAccessToken = await (await this.fetch('https://graph.facebook.com/v20.0/oauth/access_token' +
            `?client_id=${process.env.FACEBOOK_APP_ID}` +
            `&redirect_uri=${encodeURIComponent(`${process.env.FRONTEND_URL}/integrations/social/instagram${params.refresh ? `?refresh=${params.refresh}` : ''}`)}` +
            `&client_secret=${process.env.FACEBOOK_APP_SECRET}` +
            `&code=${params.code}`)).json();
        const { access_token, expires_in, ...all } = await (await this.fetch('https://graph.facebook.com/v20.0/oauth/access_token' +
            '?grant_type=fb_exchange_token' +
            `&client_id=${process.env.FACEBOOK_APP_ID}` +
            `&client_secret=${process.env.FACEBOOK_APP_SECRET}` +
            `&fb_exchange_token=${getAccessToken.access_token}`)).json();
        const { data } = await (await this.fetch(`https://graph.facebook.com/v20.0/me/permissions?access_token=${access_token}`)).json();
        const permissions = data
            .filter((d) => d.status === 'granted')
            .map((p) => p.permission);
        this.checkScopes(this.scopes, permissions);
        const { id, name, picture: { data: { url }, }, } = await (await this.fetch(`https://graph.facebook.com/v20.0/me?fields=id,name,picture&access_token=${access_token}`)).json();
        return {
            id,
            name,
            accessToken: access_token,
            refreshToken: access_token,
            expiresIn: (0, dayjs_1.default)().add(59, 'days').unix() - (0, dayjs_1.default)().unix(),
            picture: url,
            username: '',
        };
    }
    async pages(accessToken) {
        const { data } = await (await this.fetch(`https://graph.facebook.com/v20.0/me/accounts?fields=id,instagram_business_account,username,name,picture.type(large)&access_token=${accessToken}&limit=500`)).json();
        const onlyConnectedAccounts = await Promise.all(data
            .filter((f) => f.instagram_business_account)
            .map(async (p) => {
            return {
                pageId: p.id,
                ...(await (await this.fetch(`https://graph.facebook.com/v20.0/${p.instagram_business_account.id}?fields=name,profile_picture_url&access_token=${accessToken}&limit=500`)).json()),
                id: p.instagram_business_account.id,
            };
        }));
        return onlyConnectedAccounts.map((p) => ({
            pageId: p.pageId,
            id: p.id,
            name: p.name,
            picture: { data: { url: p.profile_picture_url } },
        }));
    }
    async fetchPageInformation(accessToken, data) {
        const { access_token, ...all } = await (await this.fetch(`https://graph.facebook.com/v20.0/${data.pageId}?fields=access_token,name,picture.type(large)&access_token=${accessToken}`)).json();
        const { id, name, profile_picture_url, username } = await (await this.fetch(`https://graph.facebook.com/v20.0/${data.id}?fields=username,name,profile_picture_url&access_token=${accessToken}`)).json();
        console.log(id, name, profile_picture_url, username);
        return {
            id,
            name,
            picture: profile_picture_url,
            access_token,
            username,
        };
    }
    async post(id, accessToken, postDetails, integration, type = 'graph.facebook.com') {
        const [firstPost, ...theRest] = postDetails;
        console.log('in progress');
        const isStory = firstPost.settings.post_type === 'story';
        const medias = await Promise.all(firstPost?.media?.map(async (m) => {
            const caption = firstPost.media?.length === 1
                ? `&caption=${encodeURIComponent(firstPost.message)}`
                : ``;
            const isCarousel = (firstPost?.media?.length || 0) > 1 ? `&is_carousel_item=true` : ``;
            const mediaType = m.url.indexOf('.mp4') > -1
                ? firstPost?.media?.length === 1
                    ? isStory
                        ? `video_url=${m.url}&media_type=STORIES`
                        : `video_url=${m.url}&media_type=REELS`
                    : isStory
                        ? `video_url=${m.url}&media_type=STORIES`
                        : `video_url=${m.url}&media_type=VIDEO`
                : isStory
                    ? `image_url=${m.url}&media_type=STORIES`
                    : `image_url=${m.url}`;
            console.log('in progress1');
            const collaborators = firstPost?.settings?.collaborators?.length && !isStory
                ? `&collaborators=${JSON.stringify(firstPost?.settings?.collaborators.map((p) => p.label))}`
                : ``;
            console.log(collaborators);
            const { id: photoId } = await (await this.fetch(`https://${type}/v20.0/${id}/media?${mediaType}${isCarousel}${collaborators}&access_token=${accessToken}${caption}`, {
                method: 'POST',
            })).json();
            console.log('in progress2');
            let status = 'IN_PROGRESS';
            while (status === 'IN_PROGRESS') {
                const { status_code } = await (await this.fetch(`https://${type}/v20.0/${photoId}?access_token=${accessToken}&fields=status_code`)).json();
                await (0, timer_1.timer)(3000);
                status = status_code;
            }
            console.log('in progress3');
            return photoId;
        }) || []);
        const arr = [];
        let containerIdGlobal = '';
        let linkGlobal = '';
        if (medias.length === 1) {
            const { id: mediaId } = await (await this.fetch(`https://${type}/v20.0/${id}/media_publish?creation_id=${medias[0]}&access_token=${accessToken}&field=id`, {
                method: 'POST',
            })).json();
            containerIdGlobal = mediaId;
            const { permalink } = await (await this.fetch(`https://${type}/v20.0/${mediaId}?fields=permalink&access_token=${accessToken}`)).json();
            arr.push({
                id: firstPost.id,
                postId: mediaId,
                releaseURL: permalink,
                status: 'success',
            });
            linkGlobal = permalink;
        }
        else {
            const { id: containerId, ...all3 } = await (await this.fetch(`https://${type}/v20.0/${id}/media?caption=${encodeURIComponent(firstPost?.message)}&media_type=CAROUSEL&children=${encodeURIComponent(medias.join(','))}&access_token=${accessToken}`, {
                method: 'POST',
            })).json();
            let status = 'IN_PROGRESS';
            while (status === 'IN_PROGRESS') {
                const { status_code } = await (await this.fetch(`https://${type}/v20.0/${containerId}?fields=status_code&access_token=${accessToken}`)).json();
                await (0, timer_1.timer)(3000);
                status = status_code;
            }
            const { id: mediaId, ...all4 } = await (await this.fetch(`https://${type}/v20.0/${id}/media_publish?creation_id=${containerId}&access_token=${accessToken}&field=id`, {
                method: 'POST',
            })).json();
            containerIdGlobal = mediaId;
            const { permalink } = await (await this.fetch(`https://${type}/v20.0/${mediaId}?fields=permalink&access_token=${accessToken}`)).json();
            arr.push({
                id: firstPost.id,
                postId: mediaId,
                releaseURL: permalink,
                status: 'success',
            });
            linkGlobal = permalink;
        }
        for (const post of theRest) {
            const { id: commentId } = await (await this.fetch(`https://${type}/v20.0/${containerIdGlobal}/comments?message=${encodeURIComponent(post.message)}&access_token=${accessToken}`, {
                method: 'POST',
            })).json();
            arr.push({
                id: firstPost.id,
                postId: commentId,
                releaseURL: linkGlobal,
                status: 'success',
            });
        }
        return arr;
    }
    async analytics(id, accessToken, date) {
        const until = (0, dayjs_1.default)().endOf('day').unix();
        const since = (0, dayjs_1.default)().subtract(date, 'day').unix();
        const { data, ...all } = await (await this.fetch(`https://graph.facebook.com/v20.0/${id}/insights?metric=follower_count,impressions,reach&access_token=${accessToken}&period=day&since=${since}&until=${until}`)).json();
        const { data: data2, ...all2 } = await (await this.fetch(`https://graph.facebook.com/v20.0/${id}/insights?metric_type=total_value&metric=likes,comments,shares,saves,replies&access_token=${accessToken}&period=day&since=${since}&until=${until}`)).json();
        const analytics = [];
        analytics.push(...(data?.map((d) => ({
            label: d.title,
            percentageChange: 5,
            data: d.values.map((v) => ({
                total: v.value,
                date: (0, dayjs_1.default)(v.end_time).format('YYYY-MM-DD'),
            })),
        })) || []));
        analytics.push(...data2.map((d) => ({
            label: d.title,
            percentageChange: 5,
            data: [
                {
                    total: d.total_value.value,
                    date: (0, dayjs_1.default)().format('YYYY-MM-DD'),
                },
                {
                    total: d.total_value.value,
                    date: (0, dayjs_1.default)().add(1, 'day').format('YYYY-MM-DD'),
                },
            ],
        })));
        return analytics;
    }
    music(accessToken, data) {
        return this.fetch(`https://graph.facebook.com/v20.0/music/search?q=${encodeURIComponent(data.q)}&access_token=${accessToken}`);
    }
}
exports.InstagramProvider = InstagramProvider;


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YoutubeProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const googleapis_1 = __webpack_require__(76);
const axios_1 = tslib_1.__importDefault(__webpack_require__(51));
const social_abstract_1 = __webpack_require__(62);
const process = tslib_1.__importStar(__webpack_require__(77));
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const clientAndYoutube = () => {
    const client = new googleapis_1.google.auth.OAuth2({
        clientId: process.env.YOUTUBE_CLIENT_ID,
        clientSecret: process.env.YOUTUBE_CLIENT_SECRET,
        redirectUri: `${process.env.FRONTEND_URL}/integrations/social/youtube`,
    });
    const youtube = (newClient) => googleapis_1.google.youtube({
        version: 'v3',
        auth: newClient,
    });
    const youtubeAnalytics = (newClient) => googleapis_1.google.youtubeAnalytics({
        version: 'v2',
        auth: newClient,
    });
    const oauth2 = (newClient) => googleapis_1.google.oauth2({
        version: 'v2',
        auth: newClient,
    });
    return { client, youtube, oauth2, youtubeAnalytics };
};
class YoutubeProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'youtube';
        this.name = 'YouTube';
        this.isBetweenSteps = false;
        this.scopes = [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/youtube',
            'https://www.googleapis.com/auth/youtube.force-ssl',
            'https://www.googleapis.com/auth/youtube.readonly',
            'https://www.googleapis.com/auth/youtube.upload',
            'https://www.googleapis.com/auth/youtubepartner',
            'https://www.googleapis.com/auth/youtubepartner',
            'https://www.googleapis.com/auth/yt-analytics.readonly',
        ];
    }
    async refreshToken(refresh_token) {
        const { client, oauth2 } = clientAndYoutube();
        client.setCredentials({ refresh_token });
        const { credentials } = await client.refreshAccessToken();
        const user = oauth2(client);
        const expiryDate = new Date(credentials.expiry_date);
        const unixTimestamp = Math.floor(expiryDate.getTime() / 1000) -
            Math.floor(new Date().getTime() / 1000);
        const { data } = await user.userinfo.get();
        return {
            accessToken: credentials.access_token,
            expiresIn: unixTimestamp,
            refreshToken: credentials.refresh_token,
            id: data.id,
            name: data.name,
            picture: data.picture,
            username: '',
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(7);
        const { client } = clientAndYoutube();
        return {
            url: client.generateAuthUrl({
                access_type: 'offline',
                prompt: 'consent',
                state,
                redirect_uri: `${process.env.FRONTEND_URL}/integrations/social/youtube`,
                scope: this.scopes.slice(0),
            }),
            codeVerifier: (0, make_is_1.makeId)(11),
            state,
        };
    }
    async authenticate(params) {
        const { client, oauth2 } = clientAndYoutube();
        const { tokens } = await client.getToken(params.code);
        client.setCredentials(tokens);
        const { scopes } = await client.getTokenInfo(tokens.access_token);
        this.checkScopes(this.scopes, scopes);
        const user = oauth2(client);
        const { data } = await user.userinfo.get();
        const expiryDate = new Date(tokens.expiry_date);
        const unixTimestamp = Math.floor(expiryDate.getTime() / 1000) -
            Math.floor(new Date().getTime() / 1000);
        return {
            accessToken: tokens.access_token,
            expiresIn: unixTimestamp,
            refreshToken: tokens.refresh_token,
            id: data.id,
            name: data.name,
            picture: data.picture,
            username: '',
        };
    }
    async post(id, accessToken, postDetails) {
        const [firstPost, ...comments] = postDetails;
        const { client, youtube } = clientAndYoutube();
        client.setCredentials({ access_token: accessToken });
        const youtubeClient = youtube(client);
        const { settings } = firstPost;
        const response = await (0, axios_1.default)({
            url: firstPost?.media?.[0]?.url,
            method: 'GET',
            responseType: 'stream',
        });
        try {
            const all = await youtubeClient.videos.insert({
                part: ['id', 'snippet', 'status'],
                notifySubscribers: true,
                requestBody: {
                    snippet: {
                        title: settings.title,
                        description: firstPost?.message,
                        ...(settings?.tags?.length
                            ? { tags: settings.tags.map((p) => p.label) }
                            : {}),
                        // ...(settings?.thumbnail?.url
                        //   ? {
                        //       thumbnails: {
                        //         default: {
                        //           url: settings?.thumbnail?.url,
                        //         },
                        //       },
                        //     }
                        //   : {}),
                    },
                    status: {
                        privacyStatus: settings.type,
                    },
                },
                media: {
                    body: response.data,
                },
            });
            if (settings?.thumbnail?.path) {
                try {
                    const allb = await youtubeClient.thumbnails.set({
                        videoId: all?.data?.id,
                        media: {
                            body: (await (0, axios_1.default)({
                                url: settings?.thumbnail?.path,
                                method: 'GET',
                                responseType: 'stream',
                            })).data,
                        },
                    });
                }
                catch (err) {
                    if (err.response?.data?.error?.errors?.[0]?.domain ===
                        'youtube.thumbnail') {
                        throw 'Your account is not verified, we have uploaded your video but we could not set the thumbnail. Please verify your account and try again.';
                    }
                }
            }
            return [
                {
                    id: firstPost.id,
                    releaseURL: `https://www.youtube.com/watch?v=${all?.data?.id}`,
                    postId: all?.data?.id,
                    status: 'success',
                },
            ];
        }
        catch (err) {
            if (err.response?.data?.error?.errors?.[0]?.reason === 'failedPrecondition') {
                throw 'We have uploaded your video but we could not set the thumbnail. Thumbnail size is too large';
            }
            if (err.response?.data?.error?.errors?.[0]?.reason === 'uploadLimitExceeded') {
                throw 'You have reached your daily upload limit, please try again tomorrow.';
            }
            if (err.response?.data?.error?.errors?.[0]?.reason ===
                'youtubeSignupRequired') {
                throw 'You have to link your youtube account to your google account first.';
            }
        }
        return [];
    }
    async analytics(id, accessToken, date) {
        try {
            const endDate = (0, dayjs_1.default)().format('YYYY-MM-DD');
            const startDate = (0, dayjs_1.default)().subtract(date, 'day').format('YYYY-MM-DD');
            const { client, youtubeAnalytics } = clientAndYoutube();
            client.setCredentials({ access_token: accessToken });
            const youtubeClient = youtubeAnalytics(client);
            const { data } = await youtubeClient.reports.query({
                ids: 'channel==MINE',
                startDate,
                endDate,
                metrics: 'views,estimatedMinutesWatched,averageViewDuration,averageViewPercentage,subscribersGained,likes,subscribersLost',
                dimensions: 'day',
                sort: 'day',
            });
            const columns = data?.columnHeaders?.map((p) => p.name);
            const mappedData = data?.rows?.map((p) => {
                return columns.reduce((acc, curr, index) => {
                    acc[curr] = p[index];
                    return acc;
                }, {});
            });
            const acc = [];
            acc.push({
                label: 'Estimated Minutes Watched',
                data: mappedData?.map((p) => ({
                    total: p.estimatedMinutesWatched,
                    date: p.day,
                })),
            });
            acc.push({
                label: 'Average View Duration',
                average: true,
                data: mappedData?.map((p) => ({
                    total: p.averageViewDuration,
                    date: p.day,
                })),
            });
            acc.push({
                label: 'Average View Percentage',
                average: true,
                data: mappedData?.map((p) => ({
                    total: p.averageViewPercentage,
                    date: p.day,
                })),
            });
            acc.push({
                label: 'Subscribers Gained',
                data: mappedData?.map((p) => ({
                    total: p.subscribersGained,
                    date: p.day,
                })),
            });
            acc.push({
                label: 'Subscribers Lost',
                data: mappedData?.map((p) => ({
                    total: p.subscribersLost,
                    date: p.day,
                })),
            });
            acc.push({
                label: 'Likes',
                data: mappedData?.map((p) => ({
                    total: p.likes,
                    date: p.day,
                })),
            });
            return acc;
        }
        catch (err) {
            return [];
        }
    }
}
exports.YoutubeProvider = YoutubeProvider;


/***/ }),
/* 76 */
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),
/* 77 */
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiktokProvider = void 0;
const tslib_1 = __webpack_require__(1);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const social_abstract_1 = __webpack_require__(62);
const timer_1 = __webpack_require__(63);
class TiktokProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'tiktok';
        this.name = 'Tiktok';
        this.isBetweenSteps = false;
        this.scopes = [
            'user.info.basic',
            'video.publish',
            'video.upload',
            'user.info.profile',
        ];
    }
    async refreshToken(refreshToken) {
        const value = {
            client_key: process.env.TIKTOK_CLIENT_ID,
            client_secret: process.env.TIKTOK_CLIENT_SECRET,
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        };
        const { access_token, refresh_token, ...all } = await (await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'POST',
            body: new URLSearchParams(value).toString(),
        })).json();
        const { data: { user: { avatar_url, display_name, open_id, username }, }, } = await (await fetch('https://open.tiktokapis.com/v2/user/info/?fields=open_id,avatar_url,display_name,union_id,username', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })).json();
        return {
            refreshToken: refresh_token,
            expiresIn: (0, dayjs_1.default)().add(23, 'hours').unix() - (0, dayjs_1.default)().unix(),
            accessToken: access_token,
            id: open_id.replace(/-/g, ''),
            name: display_name,
            picture: avatar_url,
            username: username,
        };
    }
    async generateAuthUrl() {
        const state = Math.random().toString(36).substring(2);
        return {
            url: 'https://www.tiktok.com/v2/auth/authorize/' +
                `?client_key=${process.env.TIKTOK_CLIENT_ID}` +
                `&redirect_uri=${encodeURIComponent(`${process?.env?.FRONTEND_URL?.indexOf('https') === -1
                    ? 'https://redirectmeto.com/'
                    : ''}${process?.env?.FRONTEND_URL}/integrations/social/tiktok`)}` +
                `&state=${state}` +
                `&response_type=code` +
                `&scope=${encodeURIComponent(this.scopes.join(','))}`,
            codeVerifier: state,
            state,
        };
    }
    async authenticate(params) {
        const value = {
            client_key: process.env.TIKTOK_CLIENT_ID,
            client_secret: process.env.TIKTOK_CLIENT_SECRET,
            code: params.code,
            grant_type: 'authorization_code',
            code_verifier: params.codeVerifier,
            redirect_uri: `${process?.env?.FRONTEND_URL?.indexOf('https') === -1
                ? 'https://redirectmeto.com/'
                : ''}${process?.env?.FRONTEND_URL}/integrations/social/tiktok`
        };
        const { access_token, refresh_token, scope } = await (await this.fetch('https://open.tiktokapis.com/v2/oauth/token/', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'POST',
            body: new URLSearchParams(value).toString(),
        })).json();
        console.log(this.scopes, scope);
        this.checkScopes(this.scopes, scope);
        const { data: { user: { avatar_url, display_name, open_id, username }, }, } = await (await fetch('https://open.tiktokapis.com/v2/user/info/?fields=open_id,avatar_url,display_name,union_id,username', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })).json();
        return {
            id: open_id.replace(/-/g, ''),
            name: display_name,
            accessToken: access_token,
            refreshToken: refresh_token,
            expiresIn: (0, dayjs_1.default)().add(23, 'hours').unix() - (0, dayjs_1.default)().unix(),
            picture: avatar_url,
            username: username,
        };
    }
    async maxVideoLength(accessToken) {
        const { data: { max_video_post_duration_sec }, } = await (await this.fetch('https://open.tiktokapis.com/v2/post/publish/creator_info/query/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        return {
            maxDurationSeconds: max_video_post_duration_sec,
        };
    }
    async uploadedVideoSuccess(id, publishId, accessToken) {
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const post = await (await this.fetch('https://open.tiktokapis.com/v2/post/publish/status/fetch/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                    publish_id: publishId,
                }),
            })).json();
            const { status, publicaly_available_post_id } = post.data;
            if (status === 'PUBLISH_COMPLETE') {
                return {
                    url: !publicaly_available_post_id
                        ? `https://www.tiktok.com/@${id}`
                        : `https://www.tiktok.com/@${id}/video/` +
                            publicaly_available_post_id,
                    id: !publicaly_available_post_id
                        ? publishId
                        : publicaly_available_post_id?.[0],
                };
            }
            if (status === 'FAILED') {
                throw new social_abstract_1.BadBody('titok-error-upload', JSON.stringify(post), {
                    // @ts-ignore
                    postDetails,
                });
            }
            await (0, timer_1.timer)(3000);
        }
    }
    postingMethod(method) {
        switch (method) {
            case 'UPLOAD':
                return '/inbox/video/init/';
            case 'DIRECT_POST':
            default:
                return '/video/init/';
        }
    }
    async post(id, accessToken, postDetails, integration) {
        const [firstPost, ...comments] = postDetails;
        const { data: { publish_id }, } = await (await this.fetch(`https://open.tiktokapis.com/v2/post/publish${this.postingMethod(firstPost.settings.content_posting_method)}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                ...(firstPost.settings.content_posting_method === 'DIRECT_POST' ? {
                    post_info: {
                        title: firstPost.message,
                        privacy_level: firstPost.settings.privacy_level,
                        disable_duet: !firstPost.settings.duet,
                        disable_comment: !firstPost.settings.comment,
                        disable_stitch: !firstPost.settings.stitch,
                        brand_content_toggle: firstPost.settings.brand_content_toggle,
                        brand_organic_toggle: firstPost.settings.brand_organic_toggle,
                    }
                } : {}),
                source_info: {
                    source: 'PULL_FROM_URL',
                    video_url: firstPost?.media?.[0]?.url,
                },
            }),
        })).json();
        const { url, id: videoId } = await this.uploadedVideoSuccess(integration.profile, publish_id, accessToken);
        return [
            {
                id: firstPost.id,
                releaseURL: url,
                postId: String(videoId),
                status: 'success',
            },
        ];
    }
}
exports.TiktokProvider = TiktokProvider;


/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PinterestProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const axios_1 = tslib_1.__importDefault(__webpack_require__(51));
const form_data_1 = tslib_1.__importDefault(__webpack_require__(80));
const timer_1 = __webpack_require__(63);
const social_abstract_1 = __webpack_require__(62);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
class PinterestProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'pinterest';
        this.name = 'Pinterest';
        this.isBetweenSteps = false;
        this.scopes = [
            'boards:read',
            'boards:write',
            'pins:read',
            'pins:write',
            'user_accounts:read',
        ];
    }
    async refreshToken(refreshToken) {
        const { access_token, expires_in } = await (await this.fetch('https://api.pinterest.com/v5/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(`${process.env.PINTEREST_CLIENT_ID}:${process.env.PINTEREST_CLIENT_SECRET}`).toString('base64')}`,
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
                scope: this.scopes.join(','),
                redirect_uri: `${process.env.FRONTEND_URL}/integrations/social/pinterest`,
            }),
        })).json();
        const { id, profile_image, username } = await (await this.fetch('https://api.pinterest.com/v5/user_account', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })).json();
        return {
            id: id,
            name: username,
            accessToken: access_token,
            refreshToken: refreshToken,
            expiresIn: expires_in,
            picture: profile_image,
            username,
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        return {
            url: `https://www.pinterest.com/oauth/?client_id=${process.env.PINTEREST_CLIENT_ID}&redirect_uri=${encodeURIComponent(`${process.env.FRONTEND_URL}/integrations/social/pinterest`)}&response_type=code&scope=${encodeURIComponent('boards:read,boards:write,pins:read,pins:write,user_accounts:read')}&state=${state}`,
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async authenticate(params) {
        const { access_token, refresh_token, expires_in, scope } = await (await this.fetch('https://api.pinterest.com/v5/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(`${process.env.PINTEREST_CLIENT_ID}:${process.env.PINTEREST_CLIENT_SECRET}`).toString('base64')}`,
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: params.code,
                redirect_uri: `${process.env.FRONTEND_URL}/integrations/social/pinterest`,
            }),
        })).json();
        this.checkScopes(this.scopes, scope);
        const { id, profile_image, username } = await (await this.fetch('https://api.pinterest.com/v5/user_account', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })).json();
        return {
            id: id,
            name: username,
            accessToken: access_token,
            refreshToken: refresh_token,
            expiresIn: expires_in,
            picture: profile_image,
            username,
        };
    }
    async boards(accessToken) {
        const { items } = await (await this.fetch('https://api.pinterest.com/v5/boards', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        return (items?.map((item) => ({
            name: item.name,
            id: item.id,
        })) || []);
    }
    async post(id, accessToken, postDetails) {
        let mediaId = '';
        const findMp4 = postDetails?.[0]?.media?.find((p) => (p.url?.indexOf('mp4') || -1) > -1);
        const picture = postDetails?.[0]?.media?.find((p) => (p.url?.indexOf('mp4') || -1) === -1);
        if (findMp4) {
            const { upload_url, media_id, upload_parameters } = await (await this.fetch('https://api.pinterest.com/v5/media', {
                method: 'POST',
                body: JSON.stringify({
                    media_type: 'video',
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            })).json();
            const { data, status } = await axios_1.default.get(postDetails?.[0]?.media?.[0]?.url, {
                responseType: 'stream',
            });
            const formData = Object.keys(upload_parameters)
                .filter((f) => f)
                .reduce((acc, key) => {
                acc.append(key, upload_parameters[key]);
                return acc;
            }, new form_data_1.default());
            formData.append('file', data);
            await axios_1.default.post(upload_url, formData);
            let statusCode = '';
            while (statusCode !== 'succeeded') {
                const mediafile = await (await this.fetch('https://api.pinterest.com/v5/media/' + media_id, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })).json();
                await (0, timer_1.timer)(3000);
                statusCode = mediafile.status;
            }
            mediaId = media_id;
        }
        const mapImages = postDetails?.[0]?.media?.map((m) => ({
            url: m.url,
        }));
        try {
            const { id: pId } = await (await this.fetch('https://api.pinterest.com/v5/pins', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...(postDetails?.[0]?.settings.link
                        ? { link: postDetails?.[0]?.settings.link }
                        : {}),
                    ...(postDetails?.[0]?.settings.title
                        ? { title: postDetails?.[0]?.settings.title }
                        : {}),
                    description: postDetails?.[0]?.message,
                    ...(postDetails?.[0]?.settings.dominant_color
                        ? { dominant_color: postDetails?.[0]?.settings.dominant_color }
                        : {}),
                    board_id: postDetails?.[0]?.settings.board,
                    media_source: mediaId
                        ? {
                            source_type: 'video_id',
                            media_id: mediaId,
                            cover_image_url: picture?.url,
                        }
                        : mapImages?.length === 1
                            ? {
                                source_type: 'image_url',
                                url: mapImages?.[0]?.url,
                            }
                            : {
                                source_type: 'multiple_image_urls',
                                items: mapImages,
                            },
                }),
            })).json();
            return [
                {
                    id: postDetails?.[0]?.id,
                    postId: pId,
                    releaseURL: `https://www.pinterest.com/pin/${pId}`,
                    status: 'success',
                },
            ];
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
    async analytics(id, accessToken, date) {
        const until = (0, dayjs_1.default)().format('YYYY-MM-DD');
        const since = (0, dayjs_1.default)().subtract(date, 'day').format('YYYY-MM-DD');
        const { all: { daily_metrics }, } = await (await this.fetch(`https://api.pinterest.com/v5/user_account/analytics?start_date=${since}&end_date=${until}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        })).json();
        return daily_metrics.reduce((acc, item) => {
            if (typeof item.metrics.PIN_CLICK_RATE !== 'undefined') {
                acc[0].data.push({
                    date: item.date,
                    total: item.metrics.PIN_CLICK_RATE,
                });
                acc[1].data.push({
                    date: item.date,
                    total: item.metrics.IMPRESSION,
                });
                acc[2].data.push({
                    date: item.date,
                    total: item.metrics.PIN_CLICK,
                });
                acc[3].data.push({
                    date: item.date,
                    total: item.metrics.ENGAGEMENT,
                });
                acc[4].data.push({
                    date: item.date,
                    total: item.metrics.SAVE,
                });
            }
            return acc;
        }, [
            { label: 'Pin click rate', data: [] },
            { label: 'Impressions', data: [] },
            { label: 'Pin Clicks', data: [] },
            { label: 'Engagement', data: [] },
            { label: 'Saves', data: [] },
        ]);
    }
}
exports.PinterestProvider = PinterestProvider;


/***/ }),
/* 80 */
/***/ ((module) => {

module.exports = require("form-data");

/***/ }),
/* 81 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DribbbleProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const axios_1 = tslib_1.__importDefault(__webpack_require__(51));
const form_data_1 = tslib_1.__importDefault(__webpack_require__(80));
const social_abstract_1 = __webpack_require__(62);
const mime_types_1 = tslib_1.__importDefault(__webpack_require__(49));
class DribbbleProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'dribbble';
        this.name = 'Dribbble';
        this.isBetweenSteps = false;
        this.scopes = ['public', 'upload'];
    }
    async refreshToken(refreshToken) {
        const { access_token, expires_in } = await (await this.fetch('https://api-sandbox.pinterest.com/v5/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(`${process.env.PINTEREST_CLIENT_ID}:${process.env.PINTEREST_CLIENT_SECRET}`).toString('base64')}`,
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
                scope: `${this.scopes.join(',')}`,
                redirect_uri: `${process.env.FRONTEND_URL}/integrations/social/pinterest`,
            }),
        })).json();
        const { id, profile_image, username } = await (await this.fetch('https://api-sandbox.pinterest.com/v5/user_account', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })).json();
        return {
            id: id,
            name: username,
            accessToken: access_token,
            refreshToken: refreshToken,
            expiresIn: expires_in,
            picture: profile_image,
            username,
        };
    }
    async teams(accessToken) {
        const { teams } = await (await this.fetch('https://api.dribbble.com/v2/user', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        return (teams?.map((team) => ({
            id: team.id,
            name: team.name,
        })) || []);
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        return {
            url: `https://dribbble.com/oauth/authorize?client_id=${process.env.DRIBBBLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(`${process.env.FRONTEND_URL}/integrations/social/dribbble`)}&response_type=code&scope=${this.scopes.join('+')}&state=${state}`,
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async authenticate(params) {
        const { access_token, scope } = await (await this.fetch(`https://dribbble.com/oauth/token?client_id=${process.env.DRIBBBLE_CLIENT_ID}&client_secret=${process.env.DRIBBBLE_CLIENT_SECRET}&code=${params.code}&redirect_uri=${process.env.FRONTEND_URL}/integrations/social/dribbble`, {
            method: 'POST',
        })).json();
        this.checkScopes(this.scopes, scope);
        const { id, name, avatar_url, login } = await (await this.fetch('https://api.dribbble.com/v2/user', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })).json();
        return {
            id: id,
            name,
            accessToken: access_token,
            refreshToken: '',
            expiresIn: 999999999,
            picture: avatar_url,
            username: login,
        };
    }
    async post(id, accessToken, postDetails) {
        const { data, status } = await axios_1.default.get(postDetails?.[0]?.media?.[0]?.url, {
            responseType: 'stream',
        });
        const slash = postDetails?.[0]?.media?.[0]?.url.split('/').at(-1);
        const formData = new form_data_1.default();
        formData.append('image', data, {
            filename: slash,
            contentType: mime_types_1.default.lookup(slash) || '',
        });
        formData.append('title', postDetails[0].settings.title);
        formData.append('description', postDetails[0].message);
        const data2 = await axios_1.default.post('https://api.dribbble.com/v2/shots', formData, {
            headers: {
                ...formData.getHeaders(),
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const location = data2.headers['location'];
        const newId = location.split('/').at(-1);
        return [
            {
                id: postDetails?.[0]?.id,
                status: 'completed',
                postId: newId,
                releaseURL: `https://dribbble.com/shots/${newId}`,
            },
        ];
    }
    analytics(id, accessToken, date) {
        return Promise.resolve([]);
    }
}
exports.DribbbleProvider = DribbbleProvider;


/***/ }),
/* 82 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkedinPageProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const linkedin_provider_1 = __webpack_require__(66);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const plug_decorator_1 = __webpack_require__(64);
const timer_1 = __webpack_require__(63);
class LinkedinPageProvider extends linkedin_provider_1.LinkedinProvider {
    constructor() {
        super(...arguments);
        this.identifier = 'linkedin-page';
        this.name = 'LinkedIn Page';
        this.isBetweenSteps = true;
        this.refreshWait = true;
        this.scopes = [
            'openid',
            'profile',
            'w_member_social',
            'r_basicprofile',
            'rw_organization_admin',
            'w_organization_social',
            'r_organization_social',
        ];
    }
    async refreshToken(refresh_token) {
        const { access_token: accessToken, expires_in, refresh_token: refreshToken, } = await (await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token,
                client_id: process.env.LINKEDIN_CLIENT_ID,
                client_secret: process.env.LINKEDIN_CLIENT_SECRET,
            }),
        })).json();
        const { vanityName } = await (await fetch('https://api.linkedin.com/v2/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        const { name, sub: id, picture, } = await (await fetch('https://api.linkedin.com/v2/userinfo', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        return {
            id,
            accessToken,
            refreshToken,
            expiresIn: expires_in,
            name,
            picture,
            username: vanityName,
        };
    }
    async repostPostUsers(integration, originalIntegration, postId, information) {
        return super.repostPostUsers(integration, originalIntegration, postId, information, false);
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        const codeVerifier = (0, make_is_1.makeId)(30);
        const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&prompt=none&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=${encodeURIComponent(`${process.env.FRONTEND_URL}/integrations/social/linkedin-page`)}&state=${state}&scope=${encodeURIComponent(this.scopes.join(' '))}`;
        return {
            url,
            codeVerifier,
            state,
        };
    }
    async companies(accessToken) {
        const { elements, ...all } = await (await fetch('https://api.linkedin.com/v2/organizationalEntityAcls?q=roleAssignee&role=ADMINISTRATOR&projection=(elements*(organizationalTarget~(localizedName,vanityName,logoV2(original~:playableStreams))))', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'X-Restli-Protocol-Version': '2.0.0',
                'LinkedIn-Version': '202402',
            },
        })).json();
        return (elements || []).map((e) => ({
            id: e.organizationalTarget.split(':').pop(),
            page: e.organizationalTarget.split(':').pop(),
            username: e['organizationalTarget~'].vanityName,
            name: e['organizationalTarget~'].localizedName,
            picture: e['organizationalTarget~'].logoV2?.['original~']?.elements?.[0]
                ?.identifiers?.[0]?.identifier,
        }));
    }
    async reConnect(id, requiredId, accessToken) {
        const information = await this.fetchPageInformation(accessToken, requiredId);
        return {
            id: information.id,
            name: information.name,
            accessToken: information.access_token,
            refreshToken: information.access_token,
            expiresIn: (0, dayjs_1.default)().add(59, 'days').unix() - (0, dayjs_1.default)().unix(),
            picture: information.picture,
            username: information.username,
        };
    }
    async fetchPageInformation(accessToken, pageId) {
        const data = await (await fetch(`https://api.linkedin.com/v2/organizations/${pageId}?projection=(id,localizedName,vanityName,logoV2(original~:playableStreams))`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        return {
            id: data.id,
            name: data.localizedName,
            access_token: accessToken,
            picture: data?.logoV2?.['original~']?.elements?.[0]?.identifiers?.[0].identifier,
            username: data.vanityName,
        };
    }
    async authenticate(params) {
        const body = new URLSearchParams();
        body.append('grant_type', 'authorization_code');
        body.append('code', params.code);
        body.append('redirect_uri', `${process.env.FRONTEND_URL}/integrations/social/linkedin-page`);
        body.append('client_id', process.env.LINKEDIN_CLIENT_ID);
        body.append('client_secret', process.env.LINKEDIN_CLIENT_SECRET);
        const { access_token: accessToken, expires_in: expiresIn, refresh_token: refreshToken, scope, } = await (await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body,
        })).json();
        this.checkScopes(this.scopes, scope);
        const { name, sub: id, picture, } = await (await fetch('https://api.linkedin.com/v2/userinfo', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        const { vanityName } = await (await fetch('https://api.linkedin.com/v2/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        return {
            id: `p_${id}`,
            accessToken,
            refreshToken,
            expiresIn,
            name,
            picture,
            username: vanityName,
        };
    }
    async post(id, accessToken, postDetails, integration) {
        return super.post(id, accessToken, postDetails, integration, 'company');
    }
    async analytics(id, accessToken, date) {
        const endDate = (0, dayjs_1.default)().unix() * 1000;
        const startDate = (0, dayjs_1.default)().subtract(date, 'days').unix() * 1000;
        const { elements } = await (await this.fetch(`https://api.linkedin.com/rest/organizationPageStatistics?q=organization&organization=${encodeURIComponent(`urn:li:organization:${id}`)}&timeIntervals=(timeRange:(start:${startDate},end:${endDate}),timeGranularityType:DAY)`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Linkedin-Version': '202405',
                'X-Restli-Protocol-Version': '2.0.0',
            },
        })).json();
        const { elements: elements2 } = await (await this.fetch(`https://api.linkedin.com/rest/organizationalEntityFollowerStatistics?q=organizationalEntity&organizationalEntity=${encodeURIComponent(`urn:li:organization:${id}`)}&timeIntervals=(timeRange:(start:${startDate},end:${endDate}),timeGranularityType:DAY)`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Linkedin-Version': '202405',
                'X-Restli-Protocol-Version': '2.0.0',
            },
        })).json();
        const { elements: elements3 } = await (await this.fetch(`https://api.linkedin.com/rest/organizationalEntityShareStatistics?q=organizationalEntity&organizationalEntity=${encodeURIComponent(`urn:li:organization:${id}`)}&timeIntervals=(timeRange:(start:${startDate},end:${endDate}),timeGranularityType:DAY)`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Linkedin-Version': '202405',
                'X-Restli-Protocol-Version': '2.0.0',
            },
        })).json();
        const analytics = [...elements2, ...elements, ...elements3].reduce((all, current) => {
            if (typeof current?.totalPageStatistics?.views?.allPageViews
                ?.pageViews !== 'undefined') {
                all['Page Views'].push({
                    total: current.totalPageStatistics.views.allPageViews.pageViews,
                    date: (0, dayjs_1.default)(current.timeRange.start).format('YYYY-MM-DD'),
                });
            }
            if (typeof current?.followerGains?.organicFollowerGain !== 'undefined') {
                all['Organic Followers'].push({
                    total: current?.followerGains?.organicFollowerGain,
                    date: (0, dayjs_1.default)(current.timeRange.start).format('YYYY-MM-DD'),
                });
            }
            if (typeof current?.followerGains?.paidFollowerGain !== 'undefined') {
                all['Paid Followers'].push({
                    total: current?.followerGains?.paidFollowerGain,
                    date: (0, dayjs_1.default)(current.timeRange.start).format('YYYY-MM-DD'),
                });
            }
            if (typeof current?.totalShareStatistics !== 'undefined') {
                all['Clicks'].push({
                    total: current?.totalShareStatistics.clickCount,
                    date: (0, dayjs_1.default)(current.timeRange.start).format('YYYY-MM-DD'),
                });
                all['Shares'].push({
                    total: current?.totalShareStatistics.shareCount,
                    date: (0, dayjs_1.default)(current.timeRange.start).format('YYYY-MM-DD'),
                });
                all['Engagement'].push({
                    total: current?.totalShareStatistics.engagement,
                    date: (0, dayjs_1.default)(current.timeRange.start).format('YYYY-MM-DD'),
                });
                all['Comments'].push({
                    total: current?.totalShareStatistics.commentCount,
                    date: (0, dayjs_1.default)(current.timeRange.start).format('YYYY-MM-DD'),
                });
            }
            return all;
        }, {
            'Page Views': [],
            Clicks: [],
            Shares: [],
            Engagement: [],
            Comments: [],
            'Organic Followers': [],
            'Paid Followers': [],
        });
        return Object.keys(analytics).map((key) => ({
            label: key,
            data: analytics[key],
            percentageChange: 5,
        }));
    }
    async autoRepostPost(integration, id, fields) {
        const { likesSummary: { totalLikes }, } = await (await this.fetch(`https://api.linkedin.com/v2/socialActions/${encodeURIComponent(id)}`, {
            method: 'GET',
            headers: {
                'X-Restli-Protocol-Version': '2.0.0',
                'Content-Type': 'application/json',
                'LinkedIn-Version': '202402',
                Authorization: `Bearer ${integration.token}`,
            },
        })).json();
        if (totalLikes >= +fields.likesAmount) {
            await (0, timer_1.timer)(2000);
            await this.fetch(`https://api.linkedin.com/rest/posts`, {
                body: JSON.stringify({
                    author: `urn:li:organization:${integration.internalId}`,
                    commentary: '',
                    visibility: 'PUBLIC',
                    distribution: {
                        feedDistribution: 'MAIN_FEED',
                        targetEntities: [],
                        thirdPartyDistributionChannels: [],
                    },
                    lifecycleState: 'PUBLISHED',
                    isReshareDisabledByAuthor: false,
                    reshareContext: {
                        parent: id,
                    },
                }),
                method: 'POST',
                headers: {
                    'X-Restli-Protocol-Version': '2.0.0',
                    'Content-Type': 'application/json',
                    'LinkedIn-Version': '202402',
                    Authorization: `Bearer ${integration.token}`,
                },
            });
            return true;
        }
        return false;
    }
    async autoPlugPost(integration, id, fields) {
        const { likesSummary: { totalLikes }, } = await (await this.fetch(`https://api.linkedin.com/v2/socialActions/${encodeURIComponent(id)}`, {
            method: 'GET',
            headers: {
                'X-Restli-Protocol-Version': '2.0.0',
                'Content-Type': 'application/json',
                'LinkedIn-Version': '202402',
                Authorization: `Bearer ${integration.token}`,
            },
        })).json();
        if (totalLikes >= fields.likesAmount) {
            await (0, timer_1.timer)(2000);
            await this.fetch(`https://api.linkedin.com/v2/socialActions/${decodeURIComponent(id)}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${integration.token}`,
                },
                body: JSON.stringify({
                    actor: `urn:li:organization:${integration.internalId}`,
                    object: id,
                    message: {
                        text: this.fixText(fields.post)
                    },
                }),
            });
            return true;
        }
        return false;
    }
}
exports.LinkedinPageProvider = LinkedinPageProvider;
tslib_1.__decorate([
    (0, plug_decorator_1.Plug)({
        identifier: 'linkedin-page-autoRepostPost',
        title: 'Auto Repost Posts',
        description: 'When a post reached a certain number of likes, repost it to increase engagement (1 week old posts)',
        runEveryMilliseconds: 21600000,
        totalRuns: 3,
        fields: [
            {
                name: 'likesAmount',
                type: 'number',
                placeholder: 'Amount of likes',
                description: 'The amount of likes to trigger the repost',
                validation: /^\d+$/,
            },
        ],
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LinkedinPageProvider.prototype, "autoRepostPost", null);
tslib_1.__decorate([
    (0, plug_decorator_1.Plug)({
        identifier: 'linkedin-page-autoPlugPost',
        title: 'Auto plug post',
        description: 'When a post reached a certain number of likes, add another post to it so you followers get a notification about your promotion',
        runEveryMilliseconds: 21600000,
        totalRuns: 3,
        fields: [
            {
                name: 'likesAmount',
                type: 'number',
                placeholder: 'Amount of likes',
                description: 'The amount of likes to trigger the repost',
                validation: /^\d+$/,
            },
            {
                name: 'post',
                type: 'richtext',
                placeholder: 'Post to plug',
                description: 'Message content to plug',
                validation: /^[\s\S]{3,}$/g,
            },
        ],
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LinkedinPageProvider.prototype, "autoPlugPost", null);


/***/ }),
/* 83 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThreadsProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const timer_1 = __webpack_require__(63);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const social_abstract_1 = __webpack_require__(62);
const lodash_1 = __webpack_require__(38);
const plug_decorator_1 = __webpack_require__(64);
class ThreadsProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'threads';
        this.name = 'Threads';
        this.isBetweenSteps = false;
        this.scopes = [
            'threads_basic',
            'threads_content_publish',
            'threads_manage_replies',
            'threads_manage_insights',
        ];
    }
    async refreshToken(refresh_token) {
        return {
            refreshToken: '',
            expiresIn: 0,
            accessToken: '',
            id: '',
            name: '',
            picture: '',
            username: '',
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        return {
            url: 'https://threads.net/oauth/authorize' +
                `?client_id=${process.env.THREADS_APP_ID}` +
                `&redirect_uri=${encodeURIComponent(`${process?.env.FRONTEND_URL?.indexOf('https') == -1
                    ? `https://redirectmeto.com/${process?.env.FRONTEND_URL}`
                    : `${process?.env.FRONTEND_URL}`}/integrations/social/threads`)}` +
                `&state=${state}` +
                `&scope=${encodeURIComponent(this.scopes.join(','))}`,
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async authenticate(params) {
        const getAccessToken = await (await this.fetch('https://graph.threads.net/oauth/access_token' +
            `?client_id=${process.env.THREADS_APP_ID}` +
            `&redirect_uri=${encodeURIComponent(`${process?.env.FRONTEND_URL?.indexOf('https') == -1
                ? `https://redirectmeto.com/${process?.env.FRONTEND_URL}`
                : `${process?.env.FRONTEND_URL}`}/integrations/social/threads`)}` +
            `&grant_type=authorization_code` +
            `&client_secret=${process.env.THREADS_APP_SECRET}` +
            `&code=${params.code}`)).json();
        const { access_token } = await (await this.fetch('https://graph.threads.net/access_token' +
            '?grant_type=th_exchange_token' +
            `&client_secret=${process.env.THREADS_APP_SECRET}` +
            `&access_token=${getAccessToken.access_token}&fields=access_token,expires_in`)).json();
        const { id, name, picture: { data: { url }, }, } = await this.fetchPageInformation(access_token);
        return {
            id,
            name,
            accessToken: access_token,
            refreshToken: access_token,
            expiresIn: (0, dayjs_1.default)().add(59, 'days').unix() - (0, dayjs_1.default)().unix(),
            picture: url,
            username: '',
        };
    }
    async checkLoaded(mediaContainerId, accessToken) {
        const { status, id, error_message } = await (await this.fetch(`https://graph.threads.net/v1.0/${mediaContainerId}?fields=status,error_message&access_token=${accessToken}`)).json();
        if (status === 'ERROR') {
            throw new Error(id);
        }
        if (status === 'FINISHED') {
            await (0, timer_1.timer)(2000);
            return true;
        }
        await (0, timer_1.timer)(2200);
        return this.checkLoaded(mediaContainerId, accessToken);
    }
    async fetchPageInformation(accessToken) {
        const { id, username, threads_profile_picture_url, access_token } = await (await this.fetch(`https://graph.threads.net/v1.0/me?fields=id,username,threads_profile_picture_url&access_token=${accessToken}`)).json();
        return {
            id,
            name: username,
            access_token,
            picture: { data: { url: threads_profile_picture_url } },
            username,
        };
    }
    async post(id, accessToken, postDetails) {
        const [firstPost, ...theRest] = postDetails;
        let globalThread = '';
        let link = '';
        if (firstPost?.media?.length <= 1) {
            const type = !firstPost?.media?.[0]?.url
                ? undefined
                : firstPost?.media[0].url.indexOf('.mp4') > -1
                    ? 'video_url'
                    : 'image_url';
            const media = new URLSearchParams({
                ...(type === 'video_url'
                    ? { video_url: firstPost?.media[0].url }
                    : {}),
                ...(type === 'image_url'
                    ? { image_url: firstPost?.media[0].url }
                    : {}),
                media_type: type === 'video_url'
                    ? 'VIDEO'
                    : type === 'image_url'
                        ? 'IMAGE'
                        : 'TEXT',
                text: firstPost?.message,
                access_token: accessToken,
            });
            const { id: containerId } = await (await this.fetch(`https://graph.threads.net/v1.0/${id}/threads?${media.toString()}`, {
                method: 'POST',
            })).json();
            await this.checkLoaded(containerId, accessToken);
            const { id: threadId } = await (await this.fetch(`https://graph.threads.net/v1.0/${id}/threads_publish?creation_id=${containerId}&access_token=${accessToken}`, {
                method: 'POST',
            })).json();
            const { permalink, ...all } = await (await this.fetch(`https://graph.threads.net/v1.0/${threadId}?fields=id,permalink&access_token=${accessToken}`)).json();
            globalThread = threadId;
            link = permalink;
        }
        else {
            const medias = [];
            for (const mediaLoad of firstPost.media) {
                const type = mediaLoad.url.indexOf('.mp4') > -1 ? 'video_url' : 'image_url';
                const media = new URLSearchParams({
                    ...(type === 'video_url' ? { video_url: mediaLoad.url } : {}),
                    ...(type === 'image_url' ? { image_url: mediaLoad.url } : {}),
                    is_carousel_item: 'true',
                    media_type: type === 'video_url'
                        ? 'VIDEO'
                        : type === 'image_url'
                            ? 'IMAGE'
                            : 'TEXT',
                    text: firstPost?.message,
                    access_token: accessToken,
                });
                const { id: mediaId } = await (await this.fetch(`https://graph.threads.net/v1.0/${id}/threads?${media.toString()}`, {
                    method: 'POST',
                })).json();
                medias.push(mediaId);
            }
            await Promise.all(medias.map((p) => this.checkLoaded(p, accessToken)));
            const { id: containerId } = await (await this.fetch(`https://graph.threads.net/v1.0/${id}/threads?text=${firstPost?.message}&media_type=CAROUSEL&children=${medias.join(',')}&access_token=${accessToken}`, {
                method: 'POST',
            })).json();
            await this.checkLoaded(containerId, accessToken);
            const { id: threadId } = await (await this.fetch(`https://graph.threads.net/v1.0/${id}/threads_publish?creation_id=${containerId}&access_token=${accessToken}`, {
                method: 'POST',
            })).json();
            const { permalink } = await (await this.fetch(`https://graph.threads.net/v1.0/${threadId}?fields=id,permalink&access_token=${accessToken}`)).json();
            globalThread = threadId;
            link = permalink;
        }
        let lastId = globalThread;
        for (const post of theRest) {
            const form = new FormData();
            form.append('media_type', 'TEXT');
            form.append('text', post.message);
            form.append('reply_to_id', lastId);
            form.append('access_token', accessToken);
            const { id: replyId } = await (await this.fetch('https://graph.threads.net/v1.0/me/threads', {
                method: 'POST',
                body: form,
            })).json();
            const { id: threadMediaId } = await (await this.fetch(`https://graph.threads.net/v1.0/${id}/threads_publish?creation_id=${replyId}&access_token=${accessToken}`, {
                method: 'POST',
            })).json();
            lastId = threadMediaId;
        }
        return [
            {
                id: firstPost.id,
                postId: String(globalThread),
                status: 'success',
                releaseURL: link,
            },
            ...theRest.map((p) => ({
                id: p.id,
                postId: String(globalThread),
                status: 'success',
                releaseURL: link,
            })),
        ];
    }
    async analytics(id, accessToken, date) {
        const until = (0, dayjs_1.default)().endOf('day').unix();
        const since = (0, dayjs_1.default)().subtract(date, 'day').unix();
        const { data, ...all } = await (await fetch(`https://graph.threads.net/v1.0/${id}/threads_insights?metric=views,likes,replies,reposts,quotes&access_token=${accessToken}&period=day&since=${since}&until=${until}`)).json();
        return (data?.map((d) => ({
            label: (0, lodash_1.capitalize)(d.name),
            percentageChange: 5,
            data: d.total_value
                ? [{ total: d.total_value.value, date: (0, dayjs_1.default)().format('YYYY-MM-DD') }]
                : d.values.map((v) => ({
                    total: v.value,
                    date: (0, dayjs_1.default)(v.end_time).format('YYYY-MM-DD'),
                })),
        })) || []);
    }
    async autoPlugPost(integration, id, fields) {
        const { data } = await (await fetch(`https://graph.threads.net/v1.0/${id}/insights?metric=likes&access_token=${integration.token}`)).json();
        const { values: [value], } = data.find((p) => p.name === 'likes');
        if (value.value >= fields.likesAmount) {
            await (0, timer_1.timer)(2000);
            const form = new FormData();
            form.append('media_type', 'TEXT');
            form.append('text', fields.post);
            form.append('reply_to_id', id);
            form.append('access_token', integration.token);
            const { id: replyId } = await (await this.fetch('https://graph.threads.net/v1.0/me/threads', {
                method: 'POST',
                body: form,
            })).json();
            await (await this.fetch(`https://graph.threads.net/v1.0/${integration.internalId}/threads_publish?creation_id=${replyId}&access_token=${integration.token}`, {
                method: 'POST',
            })).json();
            return true;
        }
        return false;
    }
}
exports.ThreadsProvider = ThreadsProvider;
tslib_1.__decorate([
    (0, plug_decorator_1.Plug)({
        identifier: 'threads-autoPlugPost',
        title: 'Auto plug post',
        description: 'When a post reached a certain number of likes, add another post to it so you followers get a notification about your promotion',
        runEveryMilliseconds: 21600000,
        totalRuns: 3,
        fields: [
            {
                name: 'likesAmount',
                type: 'number',
                placeholder: 'Amount of likes',
                description: 'The amount of likes to trigger the repost',
                validation: /^\d+$/,
            },
            {
                name: 'post',
                type: 'richtext',
                placeholder: 'Post to plug',
                description: 'Message content to plug',
                validation: /^[\s\S]{3,}$/g,
            },
        ],
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsProvider.prototype, "autoPlugPost", null);


/***/ }),
/* 84 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiscordProvider = void 0;
const make_is_1 = __webpack_require__(16);
const social_abstract_1 = __webpack_require__(62);
class DiscordProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'discord';
        this.name = 'Discord';
        this.isBetweenSteps = false;
        this.scopes = ['identify', 'guilds'];
    }
    async refreshToken(refreshToken) {
        const { access_token, expires_in, refresh_token } = await (await this.fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            body: new URLSearchParams({
                refresh_token: refreshToken,
                grant_type: 'refresh_token',
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(process.env.DISCORD_CLIENT_ID +
                    ':' +
                    process.env.DISCORD_CLIENT_SECRET).toString('base64')}`,
            },
        })).json();
        const { application } = await (await fetch('https://discord.com/api/oauth2/@me', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })).json();
        return {
            refreshToken: refresh_token,
            expiresIn: expires_in,
            accessToken: access_token,
            id: '',
            name: application.name,
            picture: '',
            username: '',
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        return {
            url: `https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&permissions=377957124096&response_type=code&redirect_uri=${encodeURIComponent(`${process.env.FRONTEND_URL}/integrations/social/discord`)}&integration_type=0&scope=bot+identify+guilds&state=${state}`,
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async authenticate(params) {
        const { access_token, expires_in, refresh_token, scope, guild } = await (await this.fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            body: new URLSearchParams({
                code: params.code,
                grant_type: 'authorization_code',
                redirect_uri: `${process.env.FRONTEND_URL}/integrations/social/discord`,
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(process.env.DISCORD_CLIENT_ID +
                    ':' +
                    process.env.DISCORD_CLIENT_SECRET).toString('base64')}`,
            },
        })).json();
        this.checkScopes(this.scopes, scope.split(' '));
        const { application } = await (await fetch('https://discord.com/api/oauth2/@me', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })).json();
        return {
            id: guild.id,
            name: application.name,
            accessToken: access_token,
            refreshToken: refresh_token,
            expiresIn: expires_in,
            picture: `https://cdn.discordapp.com/avatars/${application.bot.id}/${application.bot.avatar}.png`,
            username: application.bot.username,
        };
    }
    async channels(accessToken, params, id) {
        const list = await (await fetch(`https://discord.com/api/guilds/${id}/channels`, {
            headers: {
                Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN_ID}`,
            },
        })).json();
        return list
            .filter((p) => p.type === 0 || p.type === 5 || p.type === 15)
            .map((p) => ({
            id: String(p.id),
            name: p.name,
        }));
    }
    async post(id, accessToken, postDetails) {
        let channel = postDetails[0].settings.channel;
        if (postDetails.length > 1) {
            const { id: threadId } = await (await fetch(`https://discord.com/api/channels/${postDetails[0].settings.channel}/threads`, {
                method: 'POST',
                headers: {
                    Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN_ID}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: postDetails[0].message,
                    auto_archive_duration: 1440,
                    type: 11, // Public thread type
                }),
            })).json();
            channel = threadId;
        }
        const finalData = [];
        for (const post of postDetails) {
            const form = new FormData();
            form.append('payload_json', JSON.stringify({
                content: post.message,
                attachments: post.media?.map((p, index) => ({
                    id: index,
                    description: `Picture ${index}`,
                    filename: p.url.split('/').pop(),
                })),
            }));
            let index = 0;
            for (const media of post.media || []) {
                const loadMedia = await fetch(media.url);
                form.append(`files[${index}]`, await loadMedia.blob(), media.url.split('/').pop());
                index++;
            }
            const data = await (await fetch(`https://discord.com/api/channels/${channel}/messages`, {
                method: 'POST',
                headers: {
                    Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN_ID}`,
                },
                body: form,
            })).json();
            finalData.push({
                id: post.id,
                releaseURL: `https://discord.com/channels/${id}/${channel}/${data.id}`,
                postId: data.id,
                status: 'success',
            });
        }
        return finalData;
    }
    async changeNickname(id, accessToken, name) {
        await (await fetch(`https://discord.com/api/guilds/${id}/members/@me`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN_ID}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nick: name,
            })
        })).json();
        return {
            name,
        };
    }
}
exports.DiscordProvider = DiscordProvider;


/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SlackProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const social_abstract_1 = __webpack_require__(62);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
class SlackProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'slack';
        this.name = 'Slack';
        this.isBetweenSteps = false;
        this.scopes = [
            'channels:read',
            'chat:write',
            'users:read',
            'groups:read',
            'channels:join',
            'chat:write.customize',
        ];
    }
    async refreshToken(refreshToken) {
        return {
            refreshToken: '',
            expiresIn: 1000000,
            accessToken: '',
            id: '',
            name: '',
            picture: '',
            username: '',
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        return {
            url: `https://slack.com/oauth/v2/authorize?client_id=${process.env.SLACK_ID}&redirect_uri=${encodeURIComponent(`${process?.env?.FRONTEND_URL?.indexOf('https') === -1
                ? 'https://redirectmeto.com/'
                : ''}${process?.env?.FRONTEND_URL}/integrations/social/slack`)}&scope=channels:read,chat:write,users:read,groups:read,channels:join,chat:write.customize&state=${state}`,
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async authenticate(params) {
        const { access_token, team, bot_user_id, scope } = await (await this.fetch(`https://slack.com/api/oauth.v2.access`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: process.env.SLACK_ID,
                client_secret: process.env.SLACK_SECRET,
                code: params.code,
                redirect_uri: `${process?.env?.FRONTEND_URL?.indexOf('https') === -1
                    ? 'https://redirectmeto.com/'
                    : ''}${process?.env?.FRONTEND_URL}/integrations/social/slack${params.refresh ? `?refresh=${params.refresh}` : ''}`,
            }),
        })).json();
        this.checkScopes(this.scopes, scope.split(','));
        const { user } = await (await fetch(`https://slack.com/api/users.info?user=${bot_user_id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })).json();
        return {
            id: team.id,
            name: user.real_name,
            accessToken: access_token,
            refreshToken: 'null',
            expiresIn: (0, dayjs_1.default)().add(100, 'years').unix() - (0, dayjs_1.default)().unix(),
            picture: user.profile.image_original,
            username: user.name,
        };
    }
    async channels(accessToken, params, id) {
        const list = await (await fetch(`https://slack.com/api/conversations.list?types=public_channel,private_channel`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })).json();
        return list.channels.map((p) => ({
            id: p.id,
            name: p.name,
        }));
    }
    async post(id, accessToken, postDetails, integration) {
        await fetch(`https://slack.com/api/conversations.join`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                channel: postDetails[0].settings.channel,
            }),
        });
        let lastId = '';
        for (const post of postDetails) {
            const { ts } = await (await fetch(`https://slack.com/api/chat.postMessage`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    channel: postDetails[0].settings.channel,
                    username: integration.name,
                    icon_url: integration.picture,
                    ...(lastId ? { thread_ts: lastId } : {}),
                    blocks: [
                        {
                            type: 'section',
                            text: {
                                type: 'mrkdwn',
                                text: post.message,
                            },
                        },
                        ...(post.media?.length
                            ? post.media.map((m) => ({
                                type: 'image',
                                image_url: m.url,
                                alt_text: '',
                            }))
                            : []),
                    ],
                }),
            })).json();
            lastId = ts;
        }
        return [];
    }
    async changeProfilePicture(id, accessToken, url) {
        return {
            url,
        };
    }
    async changeNickname(id, accessToken, name) {
        return {
            name,
        };
    }
}
exports.SlackProvider = SlackProvider;


/***/ }),
/* 86 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MastodonProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const social_abstract_1 = __webpack_require__(62);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
class MastodonProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'mastodon';
        this.name = 'Mastodon';
        this.isBetweenSteps = false;
        this.scopes = ['write:statuses', 'profile', 'write:media'];
    }
    async refreshToken(refreshToken) {
        return {
            refreshToken: '',
            expiresIn: 0,
            accessToken: '',
            id: '',
            name: '',
            picture: '',
            username: '',
        };
    }
    generateUrlDynamic(customUrl, state, clientId, url) {
        return `${customUrl}/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(`${url}/integrations/social/mastodon`)}&scope=${this.scopes.join('+')}&state=${state}`;
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        const url = this.generateUrlDynamic('https://mastodon.social', state, process.env.MASTODON_CLIENT_ID, process.env.FRONTEND_URL);
        return {
            url,
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async dynamicAuthenticate(clientId, clientSecret, url, code) {
        const form = new FormData();
        form.append('client_id', clientId);
        form.append('client_secret', clientSecret);
        form.append('code', code);
        form.append('grant_type', 'authorization_code');
        form.append('redirect_uri', `${process.env.FRONTEND_URL}/integrations/social/mastodon`);
        form.append('scope', this.scopes.join(' '));
        const tokenInformation = await (await this.fetch(`${url}/oauth/token`, {
            method: 'POST',
            body: form,
        })).json();
        const personalInformation = await (await this.fetch(`${url}/api/v1/accounts/verify_credentials`, {
            headers: {
                Authorization: `Bearer ${tokenInformation.access_token}`,
            },
        })).json();
        return {
            id: personalInformation.id,
            name: personalInformation.display_name || personalInformation.acct,
            accessToken: tokenInformation.access_token,
            refreshToken: 'null',
            expiresIn: (0, dayjs_1.default)().add(100, 'years').unix() - (0, dayjs_1.default)().unix(),
            picture: personalInformation.avatar,
            username: personalInformation.username,
        };
    }
    async authenticate(params) {
        return this.dynamicAuthenticate(process.env.MASTODON_CLIENT_ID, process.env.MASTODON_CLIENT_SECRET, 'https://mastodon.social', params.code);
    }
    async uploadFile(instanceUrl, fileUrl, accessToken) {
        const form = new FormData();
        form.append('file', await fetch(fileUrl).then((r) => r.blob()));
        const media = await (await this.fetch(`${instanceUrl}/api/v1/media`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: form,
        })).json();
        return media.id;
    }
    async dynamicPost(id, accessToken, url, postDetails) {
        let loadId = '';
        const ids = [];
        for (const getPost of postDetails) {
            const uploadFiles = await Promise.all(getPost?.media?.map((media) => this.uploadFile(url, media.url, accessToken)) || []);
            const form = new FormData();
            form.append('status', getPost.message);
            form.append('visibility', 'public');
            if (loadId) {
                form.append('in_reply_to_id', loadId);
            }
            if (uploadFiles.length) {
                for (const file of uploadFiles) {
                    form.append('media_ids[]', file);
                }
            }
            const post = await (await this.fetch(`${url}/api/v1/statuses`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                body: form,
            })).json();
            ids.push(post.id);
            loadId = loadId || post.id;
        }
        return postDetails.map((p, i) => ({
            id: p.id,
            postId: ids[i],
            releaseURL: `${url}/statuses/${ids[i]}`,
            status: 'completed',
        }));
    }
    async post(id, accessToken, postDetails) {
        return this.dynamicPost(id, accessToken, 'https://mastodon.social', postDetails);
    }
}
exports.MastodonProvider = MastodonProvider;


/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlueskyProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const social_abstract_1 = __webpack_require__(62);
const api_1 = __webpack_require__(88);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const auth_service_1 = __webpack_require__(12);
const sharp_1 = tslib_1.__importDefault(__webpack_require__(59));
const plug_decorator_1 = __webpack_require__(64);
const timer_1 = __webpack_require__(63);
const axios_1 = tslib_1.__importDefault(__webpack_require__(51));
async function reduceImageBySize(url, maxSizeKB = 976) {
    try {
        // Fetch the image from the URL
        const response = await axios_1.default.get(url, { responseType: 'arraybuffer' });
        let imageBuffer = Buffer.from(response.data);
        // Use sharp to get the metadata of the image
        const metadata = await (0, sharp_1.default)(imageBuffer).metadata();
        let width = metadata.width;
        let height = metadata.height;
        // Resize iteratively until the size is below the threshold
        while (imageBuffer.length / 1024 > maxSizeKB) {
            width = Math.floor(width * 0.9); // Reduce dimensions by 10%
            height = Math.floor(height * 0.9);
            // Resize the image
            const resizedBuffer = await (0, sharp_1.default)(imageBuffer)
                .resize({ width, height })
                .toBuffer();
            imageBuffer = resizedBuffer;
            if (width < 10 || height < 10)
                break; // Prevent overly small dimensions
        }
        return imageBuffer;
    }
    catch (error) {
        console.error('Error processing image:', error);
        throw error;
    }
}
class BlueskyProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'bluesky';
        this.name = 'Bluesky';
        this.isBetweenSteps = false;
        this.scopes = ['write:statuses', 'profile', 'write:media'];
    }
    async customFields() {
        return [
            {
                key: 'service',
                label: 'Service',
                defaultValue: 'https://bsky.social',
                validation: `/^(https?:\\/\\/)?((([a-zA-Z0-9\\-_]{1,256}\\.[a-zA-Z]{2,6})|(([0-9]{1,3}\\.){3}[0-9]{1,3}))(:[0-9]{1,5})?)(\\/[^\\s]*)?$/`,
                type: 'text',
            },
            {
                key: 'identifier',
                label: 'Identifier',
                validation: `/^.+$/`,
                type: 'text',
            },
            {
                key: 'password',
                label: 'Password',
                validation: `/^.{3,}$/`,
                type: 'password',
            },
        ];
    }
    async refreshToken(refreshToken) {
        return {
            refreshToken: '',
            expiresIn: 0,
            accessToken: '',
            id: '',
            name: '',
            picture: '',
            username: '',
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        return {
            url: '',
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async authenticate(params) {
        const body = JSON.parse(Buffer.from(params.code, 'base64').toString());
        try {
            const agent = new api_1.BskyAgent({
                service: body.service,
            });
            const { data: { accessJwt, refreshJwt, handle, did }, } = await agent.login({
                identifier: body.identifier,
                password: body.password,
            });
            const profile = await agent.getProfile({
                actor: did,
            });
            return {
                refreshToken: refreshJwt,
                expiresIn: (0, dayjs_1.default)().add(100, 'years').unix() - (0, dayjs_1.default)().unix(),
                accessToken: accessJwt,
                id: did,
                name: profile.data.displayName,
                picture: profile.data.avatar,
                username: profile.data.handle,
            };
        }
        catch (e) {
            return 'Invalid credentials';
        }
    }
    async post(id, accessToken, postDetails, integration) {
        const body = JSON.parse(auth_service_1.AuthService.fixedDecryption(integration.customInstanceDetails));
        const agent = new api_1.BskyAgent({
            service: body.service,
        });
        try {
            await agent.login({
                identifier: body.identifier,
                password: body.password,
            });
        }
        catch (err) {
            throw new social_abstract_1.RefreshToken('bluesky', JSON.stringify(err), {});
        }
        let loadCid = '';
        let loadUri = '';
        const cidUrl = [];
        for (const post of postDetails) {
            const images = await Promise.all(post.media
                ?.filter((p) => p.url.indexOf('mp4') === -1)
                .map(async (p) => {
                return await agent.uploadBlob(new Blob([await reduceImageBySize(p.url)]));
            }) || []);
            const rt = new api_1.RichText({
                text: post.message,
            });
            await rt.detectFacets(agent);
            // @ts-ignore
            const { cid, uri, commit } = await agent.post({
                text: rt.text,
                facets: rt.facets,
                createdAt: new Date().toISOString(),
                ...(images.length
                    ? {
                        embed: {
                            $type: 'app.bsky.embed.images',
                            images: images.map((p) => ({
                                // can be an array up to 4 values
                                alt: 'image', // the alt text
                                image: p.data.blob,
                            })),
                        },
                    }
                    : {}),
                ...(loadCid
                    ? {
                        reply: {
                            root: {
                                uri: loadUri,
                                cid: loadCid,
                            },
                            parent: {
                                uri: loadUri,
                                cid: loadCid,
                            },
                        },
                    }
                    : {}),
            });
            loadCid = loadCid || cid;
            loadUri = loadUri || uri;
            cidUrl.push({ cid, url: uri, rev: commit.rev });
        }
        return postDetails.map((p, index) => ({
            id: p.id,
            postId: cidUrl[index].url,
            status: 'completed',
            releaseURL: `https://bsky.app/profile/${id}/post/${cidUrl[index].url
                .split('/')
                .pop()}`,
        }));
    }
    async autoRepostPost(integration, id, fields) {
        const body = JSON.parse(auth_service_1.AuthService.fixedDecryption(integration.customInstanceDetails));
        const agent = new api_1.BskyAgent({
            service: body.service,
        });
        await agent.login({
            identifier: body.identifier,
            password: body.password,
        });
        const getThread = await agent.getPostThread({
            uri: id,
            depth: 0,
        });
        // @ts-ignore
        if (getThread.data.thread.post?.likeCount >= +fields.likesAmount) {
            await (0, timer_1.timer)(2000);
            await agent.repost(
            // @ts-ignore
            getThread.data.thread.post?.uri, 
            // @ts-ignore
            getThread.data.thread.post?.cid);
            return true;
        }
        return true;
    }
    async autoPlugPost(integration, id, fields) {
        const body = JSON.parse(auth_service_1.AuthService.fixedDecryption(integration.customInstanceDetails));
        const agent = new api_1.BskyAgent({
            service: body.service,
        });
        await agent.login({
            identifier: body.identifier,
            password: body.password,
        });
        const getThread = await agent.getPostThread({
            uri: id,
            depth: 0,
        });
        // @ts-ignore
        if (getThread.data.thread.post?.likeCount >= +fields.likesAmount) {
            await (0, timer_1.timer)(2000);
            const rt = new api_1.RichText({
                text: fields.post,
            });
            await agent.post({
                text: rt.text,
                facets: rt.facets,
                createdAt: new Date().toISOString(),
                reply: {
                    root: {
                        // @ts-ignore
                        uri: getThread.data.thread.post?.uri,
                        // @ts-ignore
                        cid: getThread.data.thread.post?.cid,
                    },
                    parent: {
                        // @ts-ignore
                        uri: getThread.data.thread.post?.uri,
                        // @ts-ignore
                        cid: getThread.data.thread.post?.cid,
                    },
                },
            });
            return true;
        }
        return true;
    }
}
exports.BlueskyProvider = BlueskyProvider;
tslib_1.__decorate([
    (0, plug_decorator_1.Plug)({
        identifier: 'bluesky-autoRepostPost',
        title: 'Auto Repost Posts',
        description: 'When a post reached a certain number of likes, repost it to increase engagement (1 week old posts)',
        runEveryMilliseconds: 21600000,
        totalRuns: 3,
        fields: [
            {
                name: 'likesAmount',
                type: 'number',
                placeholder: 'Amount of likes',
                description: 'The amount of likes to trigger the repost',
                validation: /^\d+$/,
            },
        ],
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BlueskyProvider.prototype, "autoRepostPost", null);
tslib_1.__decorate([
    (0, plug_decorator_1.Plug)({
        identifier: 'bluesky-autoPlugPost',
        title: 'Auto plug post',
        description: 'When a post reached a certain number of likes, add another post to it so you followers get a notification about your promotion',
        runEveryMilliseconds: 21600000,
        totalRuns: 3,
        fields: [
            {
                name: 'likesAmount',
                type: 'number',
                placeholder: 'Amount of likes',
                description: 'The amount of likes to trigger the repost',
                validation: /^\d+$/,
            },
            {
                name: 'post',
                type: 'richtext',
                placeholder: 'Post to plug',
                description: 'Message content to plug',
                validation: /^[\s\S]{3,}$/g,
            },
        ],
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BlueskyProvider.prototype, "autoPlugPost", null);


/***/ }),
/* 88 */
/***/ ((module) => {

module.exports = require("@atproto/api");

/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LemmyProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const social_abstract_1 = __webpack_require__(62);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const auth_service_1 = __webpack_require__(12);
const lodash_1 = __webpack_require__(38);
class LemmyProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'lemmy';
        this.name = 'Lemmy';
        this.isBetweenSteps = false;
        this.scopes = [];
    }
    async customFields() {
        return [
            {
                key: 'service',
                label: 'Service',
                defaultValue: 'https://lemmy.world',
                validation: `/^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$/`,
                type: 'text',
            },
            {
                key: 'identifier',
                label: 'Identifier',
                validation: `/^.{3,}$/`,
                type: 'text',
            },
            {
                key: 'password',
                label: 'Password',
                validation: `/^.{3,}$/`,
                type: 'password',
            },
        ];
    }
    async refreshToken(refreshToken) {
        return {
            refreshToken: '',
            expiresIn: 0,
            accessToken: '',
            id: '',
            name: '',
            picture: '',
            username: '',
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        return {
            url: '',
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async authenticate(params) {
        const body = JSON.parse(Buffer.from(params.code, 'base64').toString());
        const load = await fetch(body.service + '/api/v3/user/login', {
            body: JSON.stringify({
                username_or_email: body.identifier,
                password: body.password,
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (load.status === 401) {
            return 'Invalid credentials';
        }
        const { jwt } = await load.json();
        try {
            const user = await (await fetch(body.service + `/api/v3/user?username=${body.identifier}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })).json();
            return {
                refreshToken: jwt,
                expiresIn: (0, dayjs_1.default)().add(100, 'years').unix() - (0, dayjs_1.default)().unix(),
                accessToken: jwt,
                id: String(user.person_view.person.id),
                name: user.person_view.person.display_name ||
                    user.person_view.person.name ||
                    '',
                picture: user.person_view.person.avatar || '',
                username: body.identifier || '',
            };
        }
        catch (e) {
            console.log(e);
            return 'Invalid credentials';
        }
    }
    async post(id, accessToken, postDetails, integration) {
        const [firstPost, ...restPosts] = postDetails;
        const body = JSON.parse(auth_service_1.AuthService.fixedDecryption(integration.customInstanceDetails));
        const { jwt } = await (await fetch(body.service + '/api/v3/user/login', {
            body: JSON.stringify({
                username_or_email: body.identifier,
                password: body.password,
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();
        const valueArray = [];
        for (const lemmy of firstPost.settings.subreddit) {
            const { post_view, ...all } = await (await fetch(body.service + '/api/v3/post', {
                body: JSON.stringify({
                    community_id: +lemmy.value.id,
                    name: lemmy.value.title,
                    body: firstPost.message,
                    ...(lemmy.value.url ? { url: lemmy.value.url } : {}),
                    ...(firstPost.media?.length
                        ? { custom_thumbnail: firstPost.media[0].url }
                        : {}),
                    nsfw: false,
                }),
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${jwt}`,
                    'Content-Type': 'application/json',
                },
            })).json();
            valueArray.push({
                postId: post_view.post.id,
                releaseURL: body.service + '/post/' + post_view.post.id,
                id: firstPost.id,
                status: 'published',
            });
            for (const comment of restPosts) {
                const { comment_view } = await (await fetch(body.service + '/api/v3/comment', {
                    body: JSON.stringify({
                        post_id: post_view.post.id,
                        content: comment.message,
                    }),
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                        'Content-Type': 'application/json',
                    },
                })).json();
                valueArray.push({
                    postId: comment_view.post.id,
                    releaseURL: body.service + '/comment/' + comment_view.comment.id,
                    id: comment.id,
                    status: 'published',
                });
            }
        }
        return Object.values((0, lodash_1.groupBy)(valueArray, (p) => p.id)).map((p) => ({
            id: p[0].id,
            postId: p.map((p) => String(p.postId)).join(','),
            releaseURL: p.map((p) => p.releaseURL).join(','),
            status: 'published',
        }));
    }
    async subreddits(accessToken, data, id, integration) {
        const body = JSON.parse(auth_service_1.AuthService.fixedDecryption(integration.customInstanceDetails));
        const { jwt } = await (await fetch(body.service + '/api/v3/user/login', {
            body: JSON.stringify({
                username_or_email: body.identifier,
                password: body.password,
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();
        const { communities } = await (await fetch(body.service +
            `/api/v3/search?type_=Communities&sort=Active&q=${data.word}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })).json();
        return communities.map((p) => ({
            title: p.community.title,
            name: p.community.title,
            id: p.community.id,
        }));
    }
}
exports.LemmyProvider = LemmyProvider;


/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InstagramStandaloneProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const social_abstract_1 = __webpack_require__(62);
const instagram_provider_1 = __webpack_require__(74);
const instagramProvider = new instagram_provider_1.InstagramProvider();
class InstagramStandaloneProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'instagram-standalone';
        this.name = 'Instagram\n(Standalone)';
        this.isBetweenSteps = false;
        this.scopes = [
            'instagram_business_basic',
            'instagram_business_content_publish',
            'instagram_business_manage_comments',
        ];
        this.toolTip = 'Standalone does not support insights or tagging';
    }
    async refreshToken(refresh_token) {
        return {
            refreshToken: '',
            expiresIn: 0,
            accessToken: '',
            id: '',
            name: '',
            picture: '',
            username: '',
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(6);
        return {
            url: `https://www.instagram.com/oauth/authorize?enable_fb_login=0&client_id=${process.env.INSTAGRAM_APP_ID}&redirect_uri=${encodeURIComponent(`${process?.env.FRONTEND_URL?.indexOf('https') == -1
                ? `https://redirectmeto.com/${process?.env.FRONTEND_URL}`
                : `${process?.env.FRONTEND_URL}`}/integrations/social/instagram-standalone`)}&response_type=code&scope=${encodeURIComponent(this.scopes.join(','))}` + `&state=${state}`,
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async authenticate(params) {
        const formData = new FormData();
        formData.append('client_id', process.env.INSTAGRAM_APP_ID);
        formData.append('client_secret', process.env.INSTAGRAM_APP_SECRET);
        formData.append('grant_type', 'authorization_code');
        formData.append('redirect_uri', `${process?.env.FRONTEND_URL?.indexOf('https') == -1
            ? `https://redirectmeto.com/${process?.env.FRONTEND_URL}`
            : `${process?.env.FRONTEND_URL}`}/integrations/social/instagram-standalone`);
        formData.append('code', params.code);
        const getAccessToken = await (await this.fetch('https://api.instagram.com/oauth/access_token', {
            method: 'POST',
            body: formData,
        })).json();
        const { access_token, expires_in, ...all } = await (await this.fetch('https://graph.instagram.com/access_token' +
            '?grant_type=ig_exchange_token' +
            `&client_id=${process.env.INSTAGRAM_APP_ID}` +
            `&client_secret=${process.env.INSTAGRAM_APP_SECRET}` +
            `&access_token=${getAccessToken.access_token}`)).json();
        this.checkScopes(this.scopes, getAccessToken.permissions);
        const { user_id, name, username, profile_picture_url, } = await (await this.fetch(`https://graph.instagram.com/v21.0/me?fields=user_id,username,name,profile_picture_url&access_token=${access_token}`)).json();
        return {
            id: user_id,
            name,
            accessToken: access_token,
            refreshToken: access_token,
            expiresIn: (0, dayjs_1.default)().add(59, 'days').unix() - (0, dayjs_1.default)().unix(),
            picture: profile_picture_url,
            username,
        };
    }
    async post(id, accessToken, postDetails, integration) {
        return instagramProvider.post(id, accessToken, postDetails, integration, 'graph.instagram.com');
    }
}
exports.InstagramStandaloneProvider = InstagramStandaloneProvider;


/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FarcasterProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const social_abstract_1 = __webpack_require__(62);
const nodejs_sdk_1 = __webpack_require__(92);
const lodash_1 = __webpack_require__(38);
const client = new nodejs_sdk_1.NeynarAPIClient({
    apiKey: process.env.NEYNAR_SECRET_KEY || '00000000-000-0000-000-000000000000',
});
class FarcasterProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'wrapcast';
        this.name = 'Warpcast';
        this.isBetweenSteps = false;
        this.isWeb3 = true;
        this.scopes = [];
    }
    async refreshToken(refresh_token) {
        return {
            refreshToken: '',
            expiresIn: 0,
            accessToken: '',
            id: '',
            name: '',
            picture: '',
            username: '',
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(17);
        return {
            url: `${process.env.NEYNAR_CLIENT_ID}||${state}` || '',
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async authenticate(params) {
        const data = JSON.parse(Buffer.from(params.code, 'base64').toString());
        return {
            id: String(data.fid),
            name: data.display_name,
            accessToken: data.signer_uuid,
            refreshToken: '',
            expiresIn: (0, dayjs_1.default)().add(200, 'year').unix() - (0, dayjs_1.default)().unix(),
            picture: data.pfp_url,
            username: data.username,
        };
    }
    async post(id, accessToken, postDetails) {
        const ids = [];
        const subreddit = !postDetails?.[0]?.settings?.subreddit ||
            postDetails?.[0]?.settings?.subreddit.length === 0
            ? [undefined]
            : postDetails?.[0]?.settings?.subreddit;
        for (const channel of subreddit) {
            let idHash = '';
            for (const post of postDetails) {
                const data = await client.publishCast({
                    embeds: post?.media?.map((media) => ({
                        url: media.url,
                    })) || [],
                    signerUuid: accessToken,
                    text: post.message,
                    ...(idHash ? { parent: idHash } : {}),
                    ...(channel?.value?.id ? { channelId: channel?.value?.id } : {}),
                });
                idHash = data.cast.hash;
                ids.push({
                    // @ts-ignore
                    releaseURL: `https://warpcast.com/${data.cast.author.username}/${idHash}`,
                    status: 'success',
                    id: post.id,
                    postId: data.cast.hash,
                    // @ts-ignore
                    author: data.cast.author.username,
                });
            }
        }
        const list = Object.values((0, lodash_1.groupBy)(ids, (p) => p.id)).map((p) => ({
            id: p[0].id,
            postId: p.map((p) => String(p.postId)).join(','),
            releaseURL: p.map((p) => p.releaseURL).join(','),
            status: 'published',
        }));
        return list;
    }
    async subreddits(accessToken, data, id, integration) {
        const search = await client.searchChannels({
            q: data.word,
            limit: 10,
        });
        return search.channels.map((p) => {
            return {
                title: p.name,
                name: p.name,
                id: p.id,
            };
        });
    }
}
exports.FarcasterProvider = FarcasterProvider;


/***/ }),
/* 92 */
/***/ ((module) => {

module.exports = require("@neynar/nodejs-sdk");

/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TelegramProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const social_abstract_1 = __webpack_require__(62);
//@ts-ignore
const mime_1 = tslib_1.__importDefault(__webpack_require__(50));
const node_telegram_bot_api_1 = tslib_1.__importDefault(__webpack_require__(94));
const telegramBot = new node_telegram_bot_api_1.default(process.env.TELEGRAM_TOKEN);
// Added to support local storage posting
const frontendURL = process.env.FRONTEND_URL || 'http://localhost:5000';
const mediaStorage = process.env.STORAGE_PROVIDER || 'local';
class TelegramProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'telegram';
        this.name = 'Telegram';
        this.isBetweenSteps = false;
        this.isWeb3 = true;
        this.scopes = [];
    }
    async refreshToken(refresh_token) {
        return {
            refreshToken: '',
            expiresIn: 0,
            accessToken: '',
            id: '',
            name: '',
            picture: '',
            username: '',
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(17);
        return {
            url: state,
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async authenticate(params) {
        const chat = await telegramBot.getChat(params.code);
        console.log(JSON.stringify(chat));
        if (!chat?.id) {
            return 'No chat found';
        }
        const photo = !chat?.photo?.big_file_id
            ? ''
            : await telegramBot.getFileLink(chat.photo.big_file_id);
        // Modified id to work with chat.username (public groups/channels) or chat.id (private groups/channels) when chat.username is not available
        return {
            id: String(chat.username ? chat.username : chat.id),
            name: chat.title,
            accessToken: String(chat.id),
            refreshToken: '',
            expiresIn: (0, dayjs_1.default)().add(200, 'year').unix() - (0, dayjs_1.default)().unix(),
            picture: photo,
            username: chat.username,
        };
    }
    async getBotId(query) {
        // Added allowed_updates Ensure only necessary updates are fetched
        const res = await telegramBot.getUpdates({
            ...(query.id ? { offset: query.id } : {}),
            allowed_updates: ['message', 'channel_post'],
        });
        //message.text is for groups, channel_post.text is for channels
        const match = res.find((p) => (p?.message?.text === `/connect ${query.word}` &&
            p?.message?.chat?.id) ||
            (p?.channel_post?.text === `/connect ${query.word}` &&
                p?.channel_post?.chat?.id));
        // get correct chatId based on the channel type
        const chatId = match?.message?.chat?.id || match?.channel_post?.chat?.id;
        // prevents the code from running while chatId is still undefined to avoid the error 'ETELEGRAM: 400 Bad Request: chat_id is empty'. the code would still work eventually but console spam is not pretty
        if (chatId) {
            //get the numberic ID of the bot
            const botId = (await telegramBot.getMe()).id;
            // check if the bot is an admin in the chat
            const isAdmin = await this.botIsAdmin(chatId, botId);
            // get the messageId of the message that triggered the connection
            const connectMessageId = match?.message?.message_id || match?.channel_post?.message_id;
            if (!isAdmin) {
                // alternatively you can replace this with a console.log if you do not want to inform the user of the bot's admin status
                telegramBot.sendMessage(chatId, "Connection Successful. I don't have admin privileges to delete these messages, please go ahead and remove them yourself.");
            }
            else {
                // Delete the message that triggered the connection
                await telegramBot.deleteMessage(chatId, connectMessageId);
                // Send success message to the chat
                const successMessage = await telegramBot.sendMessage(chatId, 'Connection Successful. Message will be deleted in 10 seconds.');
                // Delete the success message after 10 seconds
                setTimeout(async () => {
                    await telegramBot.deleteMessage(chatId, successMessage.message_id);
                    console.log('Success message deleted.');
                }, 10000);
            }
        }
        // modified lastChatId to work with any type of channel (private/public groups/channels)
        return chatId
            ? { chatId }
            : res.length > 0
                ? {
                    lastChatId: res?.[res.length - 1]?.message?.chat?.id ||
                        res?.[res.length - 1]?.channel_post?.chat?.id,
                }
                : {};
    }
    async post(id, accessToken, postDetails) {
        const ids = [];
        for (const message of postDetails) {
            let messageId = null;
            const mediaFiles = message.media || [];
            const text = message.message || '';
            // check if media is local to modify url
            const processedMedia = mediaFiles.map((media) => {
                let mediaUrl = media.url;
                if (mediaStorage === 'local' && mediaUrl.startsWith(frontendURL)) {
                    mediaUrl = mediaUrl.replace(frontendURL, '');
                }
                //get mime type to pass contentType to telegram api.
                //some photos and videos might not pass telegram api restrictions, so they are sent as documents instead of returning errors
                const mimeType = mime_1.default.getType(mediaUrl); // Detect MIME type
                let mediaType;
                if (mimeType?.startsWith('image/')) {
                    mediaType = 'photo';
                }
                else if (mimeType?.startsWith('video/')) {
                    mediaType = 'video';
                }
                else {
                    mediaType = 'document';
                }
                return {
                    type: mediaType,
                    media: mediaUrl,
                    fileOptions: {
                        filename: media.url.split('/').pop(),
                        contentType: mimeType || 'application/octet-stream',
                    },
                };
            });
            // if there's no media, bot sends a text message only
            if (processedMedia.length === 0) {
                const response = await telegramBot.sendMessage(accessToken, text);
                messageId = response.message_id;
            }
            // if there's only one media, bot sends the media with the text message as caption
            else if (processedMedia.length === 1) {
                const media = processedMedia[0];
                const response = media.type === 'video'
                    ? await telegramBot.sendVideo(accessToken, media.media, { caption: text }, media.fileOptions)
                    : media.type === 'photo'
                        ? await telegramBot.sendPhoto(accessToken, media.media, { caption: text }, media.fileOptions)
                        : await telegramBot.sendDocument(accessToken, media.media, { caption: text }, media.fileOptions);
                messageId = response.message_id;
            }
            // if there are multiple media, bot sends them as a media group - max 10 media per group - with the text as a caption (if there are more than 1 group, the caption will only be sent with the first group)
            else {
                const mediaGroups = this.chunkMedia(processedMedia, 10);
                for (let i = 0; i < mediaGroups.length; i++) {
                    const mediaGroup = mediaGroups[i].map((m, index) => ({
                        type: m.type === 'document' ? 'document' : m.type, // Documents are not allowed in media groups
                        media: m.media,
                        caption: i === 0 && index === 0 ? text : undefined,
                    }));
                    const response = await telegramBot.sendMediaGroup(accessToken, mediaGroup);
                    if (i === 0) {
                        messageId = response[0].message_id;
                    }
                }
            }
            // for private groups/channels message.id is undefined so the link generated by Postiz will be unusable "https://t.me/c/undefined/16"
            // to avoid that, we use accessToken instead of message.id and we generate the link manually removing the -100 from the start.
            if (messageId) {
                ids.push({
                    id: message.id,
                    postId: String(messageId),
                    releaseURL: `https://t.me/${id !== 'undefined' ? id : `c/${accessToken.replace('-100', '')}`}/${messageId}`,
                    status: 'completed',
                });
            }
        }
        return ids;
    }
    // chunkMedia is used to split media into groups of "size". 10 is used here because telegram api allows a maximum of 10 media per group
    chunkMedia(media, size) {
        const result = [];
        for (let i = 0; i < media.length; i += size) {
            result.push(media.slice(i, i + size));
        }
        return result;
    }
    async botIsAdmin(chatId, botId) {
        try {
            const chatMember = await telegramBot.getChatMember(chatId, botId);
            if (chatMember.status === 'administrator' ||
                chatMember.status === 'creator') {
                const permissions = chatMember.can_delete_messages;
                return !!permissions; // Return true if bot can delete messages
            }
            return false;
        }
        catch (error) {
            console.error('Error checking bot privileges:', error);
            return false;
        }
    }
}
exports.TelegramProvider = TelegramProvider;


/***/ }),
/* 94 */
/***/ ((module) => {

module.exports = require("node-telegram-bot-api");

/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NostrProvider = void 0;
const tslib_1 = __webpack_require__(1);
const make_is_1 = __webpack_require__(16);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const social_abstract_1 = __webpack_require__(62);
const nostr_tools_1 = __webpack_require__(96);
const ws_1 = tslib_1.__importDefault(__webpack_require__(97));
const auth_service_1 = __webpack_require__(12);
// @ts-ignore
global.WebSocket = ws_1.default;
const list = [
    'wss://relay.primal.net',
    'wss://relay.damus.io',
    'wss://relay.snort.social',
    'wss://nostr.wine',
    'wss://nos.lol',
    'wss://relay.primal.net',
];
class NostrProvider extends social_abstract_1.SocialAbstract {
    constructor() {
        super(...arguments);
        this.identifier = 'nostr';
        this.name = 'Nostr';
        this.isBetweenSteps = false;
        this.scopes = [];
    }
    async customFields() {
        return [
            {
                key: 'password',
                label: 'Nostr private key',
                validation: `/^.{3,}$/`,
                type: 'password',
            },
        ];
    }
    async refreshToken(refresh_token) {
        return {
            refreshToken: '',
            expiresIn: 0,
            accessToken: '',
            id: '',
            name: '',
            picture: '',
            username: '',
        };
    }
    async generateAuthUrl() {
        const state = (0, make_is_1.makeId)(17);
        return {
            url: '',
            codeVerifier: (0, make_is_1.makeId)(10),
            state,
        };
    }
    async findRelayInformation(pubkey) {
        for (const relay of list) {
            const relayInstance = await nostr_tools_1.Relay.connect(relay);
            const value = await new Promise((resolve) => {
                console.log('connecting');
                relayInstance.subscribe([{ kinds: [0], authors: [pubkey] }], {
                    eoseTimeout: 6000,
                    onevent: (event) => {
                        resolve(event);
                    },
                    oneose: () => {
                        resolve({});
                    },
                    onclose: () => {
                        resolve({});
                    },
                });
            });
            relayInstance.close();
            const content = JSON.parse(value?.content || '{}');
            if (content.name || content.displayName || content.display_name) {
                return content;
            }
        }
        return {};
    }
    async publish(pubkey, event) {
        let id = '';
        for (const relay of list) {
            try {
                const relayInstance = await nostr_tools_1.Relay.connect(relay);
                const value = new Promise((resolve) => {
                    relayInstance.subscribe([{ kinds: [1], authors: [pubkey] }], {
                        eoseTimeout: 6000,
                        onevent: (event) => {
                            resolve(event);
                        },
                        oneose: () => {
                            resolve({});
                        },
                        onclose: () => {
                            resolve({});
                        },
                    });
                });
                await relayInstance.publish(event);
                const all = await value;
                relayInstance.close();
                // relayInstance.close();
                id = id || all?.id;
            }
            catch (err) {
                /**empty**/
            }
        }
        return id;
    }
    async authenticate(params) {
        try {
            const body = JSON.parse(Buffer.from(params.code, 'base64').toString());
            const pubkey = (0, nostr_tools_1.getPublicKey)(Uint8Array.from(body.password.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))));
            const user = await this.findRelayInformation(pubkey);
            return {
                id: String(user.pubkey),
                name: user.display_name || user.displayName || 'No Name',
                accessToken: auth_service_1.AuthService.signJWT({ password: body.password }),
                refreshToken: '',
                expiresIn: (0, dayjs_1.default)().add(200, 'year').unix() - (0, dayjs_1.default)().unix(),
                picture: user.picture,
                username: user.name || 'nousername',
            };
        }
        catch (e) {
            console.log(e);
            return 'Invalid credentials';
        }
    }
    async post(id, accessToken, postDetails) {
        const { password } = auth_service_1.AuthService.verifyJWT(accessToken);
        let lastId = '';
        const ids = [];
        for (const post of postDetails) {
            const textEvent = (0, nostr_tools_1.finalizeEvent)({
                kind: 1, // Text note
                content: post.message + '\n\n' + post.media?.map((m) => m.url).join('\n\n'),
                tags: [
                    ...(lastId
                        ? [
                            ['e', lastId, '', 'reply'],
                            ['p', id],
                        ]
                        : []),
                ], // Include delegation token in the event
                created_at: Math.floor(Date.now() / 1000),
            }, password);
            lastId = await this.publish(id, textEvent);
            ids.push({
                id: post.id,
                postId: String(lastId),
                releaseURL: `https://primal.net/e/${lastId}`,
                status: 'completed',
            });
        }
        return ids;
    }
}
exports.NostrProvider = NostrProvider;


/***/ }),
/* 96 */
/***/ ((module) => {

module.exports = require("nostr-tools");

/***/ }),
/* 97 */
/***/ ((module) => {

module.exports = require("ws");

/***/ }),
/* 98 */
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const posts_repository_1 = __webpack_require__(100);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const integration_manager_1 = __webpack_require__(55);
const client_1 = __webpack_require__(10);
const notification_service_1 = __webpack_require__(18);
const lodash_1 = __webpack_require__(38);
const messages_service_1 = __webpack_require__(104);
const stripe_service_1 = __webpack_require__(106);
const integration_service_1 = __webpack_require__(43);
const make_is_1 = __webpack_require__(16);
const social_abstract_1 = __webpack_require__(62);
const client_2 = __webpack_require__(26);
const timer_1 = __webpack_require__(63);
const utc_1 = tslib_1.__importDefault(__webpack_require__(98));
const media_service_1 = __webpack_require__(111);
const short_link_service_1 = __webpack_require__(117);
const webhooks_service_1 = __webpack_require__(121);
dayjs_1.default.extend(utc_1.default);
let PostsService = class PostsService {
    constructor(_postRepository, _workerServiceProducer, _integrationManager, _notificationService, _messagesService, _stripeService, _integrationService, _mediaService, _shortLinkService, _webhookService) {
        this._postRepository = _postRepository;
        this._workerServiceProducer = _workerServiceProducer;
        this._integrationManager = _integrationManager;
        this._notificationService = _notificationService;
        this._messagesService = _messagesService;
        this._stripeService = _stripeService;
        this._integrationService = _integrationService;
        this._mediaService = _mediaService;
        this._shortLinkService = _shortLinkService;
        this._webhookService = _webhookService;
    }
    async getStatistics(orgId, id) {
        const getPost = await this.getPostsRecursively(id, true, orgId, true);
        const content = getPost.map((p) => p.content);
        const shortLinksTracking = await this._shortLinkService.getStatistics(content);
        return {
            clicks: shortLinksTracking,
        };
    }
    async getPostsRecursively(id, includeIntegration = false, orgId, isFirst) {
        const post = await this._postRepository.getPost(id, includeIntegration, orgId, isFirst);
        if (!post) {
            return [];
        }
        return [
            post,
            ...(post?.childrenPost?.length
                ? await this.getPostsRecursively(post?.childrenPost?.[0]?.id, false, orgId, false)
                : []),
        ];
    }
    async getPosts(orgId, query) {
        return this._postRepository.getPosts(orgId, query);
    }
    async updateMedia(id, imagesList) {
        let imageUpdateNeeded = false;
        const getImageList = (await Promise.all(imagesList.map(async (p) => {
            if (!p.path && p.id) {
                imageUpdateNeeded = true;
                return this._mediaService.getMediaById(p.id);
            }
            return p;
        }))).map((m) => {
            return {
                ...m,
                url: m.path.indexOf('http') === -1
                    ? process.env.FRONTEND_URL +
                        '/' +
                        process.env.NEXT_PUBLIC_UPLOAD_STATIC_DIRECTORY +
                        m.path
                    : m.path,
                type: 'image',
                path: m.path.indexOf('http') === -1
                    ? process.env.UPLOAD_DIRECTORY + m.path
                    : m.path,
            };
        });
        if (imageUpdateNeeded) {
            await this._postRepository.updateImages(id, JSON.stringify(getImageList));
        }
        return getImageList;
    }
    async getPost(orgId, id) {
        const posts = await this.getPostsRecursively(id, true, orgId, true);
        const list = {
            group: posts?.[0]?.group,
            posts: await Promise.all(posts.map(async (post) => ({
                ...post,
                image: await this.updateMedia(post.id, JSON.parse(post.image || '[]')),
            }))),
            integrationPicture: posts[0]?.integration?.picture,
            integration: posts[0].integrationId,
            settings: JSON.parse(posts[0].settings || '{}'),
        };
        return list;
    }
    async getOldPosts(orgId, date) {
        return this._postRepository.getOldPosts(orgId, date);
    }
    async post(id) {
        const [firstPost, ...morePosts] = await this.getPostsRecursively(id, true);
        if (!firstPost) {
            return;
        }
        if (firstPost.integration?.refreshNeeded) {
            await this._notificationService.inAppNotification(firstPost.organizationId, `We couldn't post to ${firstPost.integration?.providerIdentifier} for ${firstPost?.integration?.name}`, `We couldn't post to ${firstPost.integration?.providerIdentifier} for ${firstPost?.integration?.name} because you need to reconnect it. Please enable it and try again.`, true);
            return;
        }
        if (firstPost.integration?.disabled) {
            await this._notificationService.inAppNotification(firstPost.organizationId, `We couldn't post to ${firstPost.integration?.providerIdentifier} for ${firstPost?.integration?.name}`, `We couldn't post to ${firstPost.integration?.providerIdentifier} for ${firstPost?.integration?.name} because it's disabled. Please enable it and try again.`, true);
            return;
        }
        try {
            const finalPost = firstPost.integration?.type === 'article'
                ? await this.postArticle(firstPost.integration, [
                    firstPost,
                    ...morePosts,
                ])
                : await this.postSocial(firstPost.integration, [
                    firstPost,
                    ...morePosts,
                ]);
            if (firstPost?.intervalInDays) {
                this._workerServiceProducer.emit('post', {
                    id,
                    options: {
                        delay: firstPost.intervalInDays * 86400000,
                    },
                    payload: {
                        id: id,
                    },
                });
            }
            if (!finalPost?.postId || !finalPost?.releaseURL) {
                await this._postRepository.changeState(firstPost.id, 'ERROR');
                await this._notificationService.inAppNotification(firstPost.organizationId, `Error posting on ${firstPost.integration?.providerIdentifier} for ${firstPost?.integration?.name}`, `An error occurred while posting on ${firstPost.integration?.providerIdentifier}`, true);
                return;
            }
            if (firstPost.submittedForOrderId) {
                this._workerServiceProducer.emit('submit', {
                    payload: {
                        id: firstPost.id,
                        releaseURL: finalPost.releaseURL,
                    },
                });
            }
        }
        catch (err) {
            await this._postRepository.changeState(firstPost.id, 'ERROR', err);
            await this._notificationService.inAppNotification(firstPost.organizationId, `Error posting on ${firstPost.integration?.providerIdentifier} for ${firstPost?.integration?.name}`, `An error occurred while posting on ${firstPost.integration?.providerIdentifier} ${!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                ? err
                : ''}`, true);
            if (err instanceof social_abstract_1.BadBody) {
                console.error('[Error] posting on', firstPost.integration?.providerIdentifier, err.identifier, err.json, err.body, err);
                return;
            }
            console.error('[Error] posting on', firstPost.integration?.providerIdentifier, err);
        }
    }
    async updateTags(orgId, post) {
        const plainText = JSON.stringify(post);
        const extract = Array.from(plainText.match(/\(post:[a-zA-Z0-9-_]+\)/g) || []);
        if (!extract.length) {
            return post;
        }
        const ids = extract.map((e) => e.replace('(post:', '').replace(')', ''));
        const urls = await this._postRepository.getPostUrls(orgId, ids);
        const newPlainText = ids.reduce((acc, value) => {
            const findUrl = urls?.find?.((u) => u.id === value)?.releaseURL || '';
            return acc.replace(new RegExp(`\\(post:${value}\\)`, 'g'), findUrl.split(',')[0]);
        }, plainText);
        return this.updateTags(orgId, JSON.parse(newPlainText));
    }
    async postSocial(integration, posts, forceRefresh = false) {
        const getIntegration = this._integrationManager.getSocialIntegration(integration.providerIdentifier);
        if (!getIntegration) {
            return {};
        }
        if ((0, dayjs_1.default)(integration?.tokenExpiration).isBefore((0, dayjs_1.default)()) || forceRefresh) {
            const { accessToken, expiresIn, refreshToken, additionalSettings } = await new Promise((res) => {
                getIntegration
                    .refreshToken(integration.refreshToken)
                    .then((r) => res(r))
                    .catch(() => res({
                    accessToken: '',
                    expiresIn: 0,
                    refreshToken: '',
                    id: '',
                    name: '',
                    username: '',
                    picture: '',
                    additionalSettings: undefined,
                }));
            });
            if (!accessToken) {
                await this._integrationService.refreshNeeded(integration.organizationId, integration.id);
                await this._integrationService.informAboutRefreshError(integration.organizationId, integration);
                return {};
            }
            await this._integrationService.createOrUpdateIntegration(additionalSettings, !!getIntegration.oneTimeToken, integration.organizationId, integration.name, integration.picture, 'social', integration.internalId, integration.providerIdentifier, accessToken, refreshToken, expiresIn);
            integration.token = accessToken;
            if (getIntegration.refreshWait) {
                await (0, timer_1.timer)(10000);
            }
        }
        const newPosts = await this.updateTags(integration.organizationId, posts);
        try {
            const publishedPosts = await getIntegration.post(integration.internalId, integration.token, await Promise.all(newPosts.map(async (p) => ({
                id: p.id,
                message: p.content,
                settings: JSON.parse(p.settings || '{}'),
                media: await this.updateMedia(p.id, JSON.parse(p.image || '[]')),
            }))), integration);
            for (const post of publishedPosts) {
                await this._postRepository.updatePost(post.id, post.postId, post.releaseURL);
            }
            await this._notificationService.inAppNotification(integration.organizationId, `Your post has been published on ${(0, lodash_1.capitalize)(integration.providerIdentifier)}`, `Your post has been published on ${(0, lodash_1.capitalize)(integration.providerIdentifier)} at ${publishedPosts[0].releaseURL}`, true, true);
            await this._webhookService.digestWebhooks(integration.organizationId, (0, dayjs_1.default)(newPosts[0].publishDate).format('YYYY-MM-DDTHH:mm:00'));
            await this.checkPlugs(integration.organizationId, getIntegration.identifier, integration.id, publishedPosts[0].postId);
            await this.checkInternalPlug(integration, integration.organizationId, publishedPosts[0].postId, JSON.parse(newPosts[0].settings || '{}'));
            return {
                postId: publishedPosts[0].postId,
                releaseURL: publishedPosts[0].releaseURL,
            };
        }
        catch (err) {
            if (err instanceof social_abstract_1.RefreshToken) {
                return this.postSocial(integration, posts, true);
            }
            throw err;
        }
    }
    async checkInternalPlug(integration, orgId, id, settings) {
        const plugs = Object.entries(settings).filter(([key]) => {
            return key.indexOf('plug-') > -1;
        });
        if (plugs.length === 0) {
            return;
        }
        const parsePlugs = plugs.reduce((all, [key, value]) => {
            const [_, name, identifier] = key.split('--');
            all[name] = all[name] || { name };
            all[name][identifier] = value;
            return all;
        }, {});
        const list = Object.values(parsePlugs);
        for (const trigger of list || []) {
            for (const int of trigger?.integrations || []) {
                this._workerServiceProducer.emit('internal-plugs', {
                    id: 'plug_' + id + '_' + trigger.name + '_' + int.id,
                    options: {
                        delay: +trigger.delay,
                    },
                    payload: {
                        post: id,
                        originalIntegration: integration.id,
                        integration: int.id,
                        plugName: trigger.name,
                        orgId: orgId,
                        delay: +trigger.delay,
                        information: trigger,
                    },
                });
            }
        }
    }
    async checkPlugs(orgId, providerName, integrationId, postId) {
        const loadAllPlugs = this._integrationManager.getAllPlugs();
        const getPlugs = await this._integrationService.getPlugs(orgId, integrationId);
        const currentPlug = loadAllPlugs.find((p) => p.identifier === providerName);
        for (const plug of getPlugs) {
            const runPlug = currentPlug?.plugs?.find((p) => p.methodName === plug.plugFunction);
            if (!runPlug) {
                continue;
            }
            this._workerServiceProducer.emit('plugs', {
                id: 'plug_' + postId + '_' + runPlug.identifier,
                options: {
                    delay: runPlug.runEveryMilliseconds,
                },
                payload: {
                    plugId: plug.id,
                    postId,
                    delay: runPlug.runEveryMilliseconds,
                    totalRuns: runPlug.totalRuns,
                    currentRun: 1,
                },
            });
        }
    }
    async postArticle(integration, posts) {
        const getIntegration = this._integrationManager.getArticlesIntegration(integration.providerIdentifier);
        if (!getIntegration) {
            return;
        }
        const newPosts = await this.updateTags(integration.organizationId, posts);
        const { postId, releaseURL } = await getIntegration.post(integration.token, newPosts.map((p) => p.content).join('\n\n'), JSON.parse(newPosts[0].settings || '{}'));
        await this._notificationService.inAppNotification(integration.organizationId, `Your article has been published on ${(0, lodash_1.capitalize)(integration.providerIdentifier)}`, `Your article has been published at ${releaseURL}`, true);
        await this._postRepository.updatePost(newPosts[0].id, postId, releaseURL);
        return {
            postId,
            releaseURL,
        };
    }
    async deletePost(orgId, group) {
        const post = await this._postRepository.deletePost(orgId, group);
        if (post?.id) {
            await this._workerServiceProducer.delete('post', post.id);
            return { id: post.id };
        }
        return { error: true };
    }
    async countPostsFromDay(orgId, date) {
        return this._postRepository.countPostsFromDay(orgId, date);
    }
    async submit(id, order, message, integrationId) {
        if (!(await this._messagesService.canAddPost(id, order, integrationId))) {
            throw new Error('You can not add a post to this publication');
        }
        const getOrgByOrder = await this._messagesService.getOrgByOrder(order);
        const submit = await this._postRepository.submit(id, order, getOrgByOrder?.messageGroup?.buyerOrganizationId);
        const messageModel = await this._messagesService.createNewMessage(submit?.submittedForOrder?.messageGroupId || '', client_1.From.SELLER, '', {
            type: 'post',
            data: {
                id: order,
                postId: id,
                status: 'PENDING',
                integration: integrationId,
                description: message.slice(0, 300) + '...',
            },
        });
        await this._postRepository.updateMessage(id, messageModel.id);
        return messageModel;
    }
    async createPost(orgId, body) {
        const postList = [];
        for (const post of body.posts) {
            const messages = post.value.map((p) => p.content);
            const updateContent = !body.shortLink
                ? messages
                : await this._shortLinkService.convertTextToShortLinks(orgId, messages);
            post.value = post.value.map((p, i) => ({
                ...p,
                content: updateContent[i],
            }));
            const { previousPost, posts } = await this._postRepository.createOrUpdatePost(body.type, orgId, body.type === 'now'
                ? (0, dayjs_1.default)().format('YYYY-MM-DDTHH:mm:00')
                : body.date, post, body.tags, body.inter);
            if (!posts?.length) {
                return;
            }
            await this._workerServiceProducer.delete('post', previousPost ? previousPost : posts?.[0]?.id);
            if (body.order && body.type !== 'draft') {
                await this.submit(posts[0].id, body.order, post.value[0].content, post.integration.id);
                continue;
            }
            if (body.type === 'now' ||
                (body.type === 'schedule' && (0, dayjs_1.default)(body.date).isAfter((0, dayjs_1.default)()))) {
                this._workerServiceProducer.emit('post', {
                    id: posts[0].id,
                    options: {
                        delay: body.type === 'now'
                            ? 0
                            : (0, dayjs_1.default)(posts[0].publishDate).diff((0, dayjs_1.default)(), 'millisecond'),
                    },
                    payload: {
                        id: posts[0].id,
                        delay: body.type === 'now'
                            ? 0
                            : (0, dayjs_1.default)(posts[0].publishDate).diff((0, dayjs_1.default)(), 'millisecond'),
                    },
                });
            }
            postList.push({
                postId: posts[0].id,
                integration: post.integration.id,
            });
        }
        return postList;
    }
    async changeDate(orgId, id, date) {
        const getPostById = await this._postRepository.getPostById(id, orgId);
        if (getPostById?.submittedForOrderId &&
            getPostById.approvedSubmitForOrder !== 'NO') {
            throw new Error('You can not change the date of a post that has been submitted');
        }
        await this._workerServiceProducer.delete('post', id);
        if (getPostById?.state !== 'DRAFT' && !getPostById?.submittedForOrderId) {
            this._workerServiceProducer.emit('post', {
                id: id,
                options: {
                    delay: (0, dayjs_1.default)(date).diff((0, dayjs_1.default)(), 'millisecond'),
                },
                payload: {
                    id: id,
                    delay: (0, dayjs_1.default)(date).diff((0, dayjs_1.default)(), 'millisecond'),
                },
            });
        }
        return this._postRepository.changeDate(orgId, id, date);
    }
    async payout(id, url) {
        const getPost = await this._postRepository.getPostById(id);
        if (!getPost || !getPost.submittedForOrder) {
            return;
        }
        const findPrice = getPost.submittedForOrder.ordersItems.find((orderItem) => orderItem.integrationId === getPost.integrationId);
        await this._messagesService.createNewMessage(getPost.submittedForOrder.messageGroupId, client_1.From.SELLER, '', {
            type: 'published',
            data: {
                id: getPost.submittedForOrder.id,
                postId: id,
                status: 'PUBLISHED',
                integrationId: getPost.integrationId,
                integration: getPost.integration.providerIdentifier,
                picture: getPost.integration.picture,
                name: getPost.integration.name,
                url,
            },
        });
        const totalItems = getPost.submittedForOrder.ordersItems.reduce((all, p) => all + p.quantity, 0);
        const totalPosts = getPost.submittedForOrder.posts.length;
        if (totalItems === totalPosts) {
            await this._messagesService.completeOrder(getPost.submittedForOrder.id);
            await this._messagesService.createNewMessage(getPost.submittedForOrder.messageGroupId, client_1.From.SELLER, '', {
                type: 'order-completed',
                data: {
                    id: getPost.submittedForOrder.id,
                    postId: id,
                    status: 'PUBLISHED',
                },
            });
        }
        try {
            await this._stripeService.payout(getPost.submittedForOrder.id, getPost.submittedForOrder.captureId, getPost.submittedForOrder.seller.account, findPrice.price);
            return this._notificationService.inAppNotification(getPost.integration.organizationId, 'Payout completed', `You have received a payout of $${findPrice.price}`, true);
        }
        catch (err) {
            await this._messagesService.payoutProblem(getPost.submittedForOrder.id, getPost.submittedForOrder.seller.id, findPrice.price, id);
        }
    }
    async generatePostsDraft(orgId, body) {
        const getAllIntegrations = (await this._integrationService.getIntegrationsList(orgId)).filter((f) => !f.disabled && f.providerIdentifier !== 'reddit');
        // const posts = chunk(body.posts, getAllIntegrations.length);
        const allDates = (0, dayjs_1.default)()
            .isoWeek(body.week)
            .year(body.year)
            .startOf('isoWeek');
        const dates = [...new Array(7)].map((_, i) => {
            return allDates.add(i, 'day').format('YYYY-MM-DD');
        });
        const findTime = () => {
            const totalMinutes = Math.floor(Math.random() * 144) * 10;
            // Convert total minutes to hours and minutes
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            // Format hours and minutes to always be two digits
            const formattedHours = hours.toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');
            const randomDate = (0, lodash_1.shuffle)(dates)[0] + 'T' + `${formattedHours}:${formattedMinutes}:00`;
            if ((0, dayjs_1.default)(randomDate).isBefore((0, dayjs_1.default)())) {
                return findTime();
            }
            return randomDate;
        };
        for (const integration of getAllIntegrations) {
            for (const toPost of body.posts) {
                const group = (0, make_is_1.makeId)(10);
                const randomDate = findTime();
                await this.createPost(orgId, {
                    type: 'draft',
                    date: randomDate,
                    order: '',
                    shortLink: false,
                    tags: [],
                    posts: [
                        {
                            group,
                            integration: {
                                id: integration.id,
                            },
                            settings: {
                                subtitle: '',
                                title: '',
                                tags: [],
                                subreddit: [],
                            },
                            value: [
                                ...toPost.list.map((l) => ({
                                    id: '',
                                    content: l.post,
                                    image: [],
                                })),
                                {
                                    id: '',
                                    content: `Check out the full story here:\n${body.postId || body.url}`,
                                    image: [],
                                },
                            ],
                        },
                    ],
                });
            }
        }
    }
    findAllExistingCategories() {
        return this._postRepository.findAllExistingCategories();
    }
    findAllExistingTopicsOfCategory(category) {
        return this._postRepository.findAllExistingTopicsOfCategory(category);
    }
    findPopularPosts(category, topic) {
        return this._postRepository.findPopularPosts(category, topic);
    }
    async findFreeDateTime(orgId) {
        const findTimes = await this._integrationService.findFreeDateTime(orgId);
        return this.findFreeDateTimeRecursive(orgId, findTimes, dayjs_1.default.utc().startOf('day'));
    }
    async createPopularPosts(post) {
        return this._postRepository.createPopularPosts(post);
    }
    async findFreeDateTimeRecursive(orgId, times, date) {
        const list = await this._postRepository.getPostsCountsByDates(orgId, times, date);
        if (!list.length) {
            return this.findFreeDateTimeRecursive(orgId, times, date.add(1, 'day'));
        }
        const num = list.reduce((prev, curr) => {
            if (prev === null || prev > curr) {
                return curr;
            }
            return prev;
        }, null);
        return date.clone().add(num, 'minutes').format('YYYY-MM-DDTHH:mm:00');
    }
    getComments(postId) {
        return this._postRepository.getComments(postId);
    }
    getTags(orgId) {
        return this._postRepository.getTags(orgId);
    }
    createTag(orgId, body) {
        return this._postRepository.createTag(orgId, body);
    }
    editTag(id, orgId, body) {
        return this._postRepository.editTag(id, orgId, body);
    }
    createComment(orgId, userId, postId, comment) {
        return this._postRepository.createComment(orgId, userId, postId, comment);
    }
    async sendDigestEmail(subject, orgId, since) {
        const getNotificationsForOrgSince = await this._notificationService.getNotificationsSince(orgId, since);
        if (getNotificationsForOrgSince.length === 0) {
            return;
        }
        const message = getNotificationsForOrgSince
            .map((p) => p.content)
            .join('<br />');
        await this._notificationService.sendEmailsToOrg(orgId, getNotificationsForOrgSince.length === 1
            ? subject
            : '[Postiz] Your latest notifications', message);
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [posts_repository_1.PostsRepository,
        client_2.BullMqClient,
        integration_manager_1.IntegrationManager,
        notification_service_1.NotificationService,
        messages_service_1.MessagesService,
        stripe_service_1.StripeService,
        integration_service_1.IntegrationService,
        media_service_1.MediaService,
        short_link_service_1.ShortLinkService,
        webhooks_service_1.WebhooksService])
], PostsService);


/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsRepository = void 0;
const tslib_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(5);
const client_1 = __webpack_require__(10);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const isoWeek_1 = tslib_1.__importDefault(__webpack_require__(101));
const weekOfYear_1 = tslib_1.__importDefault(__webpack_require__(102));
const isSameOrAfter_1 = tslib_1.__importDefault(__webpack_require__(103));
const utc_1 = tslib_1.__importDefault(__webpack_require__(98));
const uuid_1 = __webpack_require__(31);
dayjs_1.default.extend(isoWeek_1.default);
dayjs_1.default.extend(weekOfYear_1.default);
dayjs_1.default.extend(isSameOrAfter_1.default);
dayjs_1.default.extend(utc_1.default);
let PostsRepository = class PostsRepository {
    constructor(_post, _popularPosts, _comments, _tags, _tagsPosts) {
        this._post = _post;
        this._popularPosts = _popularPosts;
        this._comments = _comments;
        this._tags = _tags;
        this._tagsPosts = _tagsPosts;
    }
    getOldPosts(orgId, date) {
        return this._post.model.post.findMany({
            where: {
                organizationId: orgId,
                publishDate: {
                    lte: (0, dayjs_1.default)(date).toDate(),
                },
                deletedAt: null,
                parentPostId: null,
            },
            orderBy: {
                publishDate: 'desc',
            },
            select: {
                id: true,
                content: true,
                publishDate: true,
                releaseURL: true,
                state: true,
                integration: {
                    select: {
                        id: true,
                        name: true,
                        providerIdentifier: true,
                        picture: true,
                        type: true,
                    },
                },
            },
        });
    }
    updateImages(id, images) {
        return this._post.model.post.update({
            where: {
                id,
            },
            data: {
                image: images,
            },
        });
    }
    getPostUrls(orgId, ids) {
        return this._post.model.post.findMany({
            where: {
                organizationId: orgId,
                id: {
                    in: ids,
                },
            },
            select: {
                id: true,
                releaseURL: true,
            },
        });
    }
    async getPosts(orgId, query) {
        const dateYear = (0, dayjs_1.default)().year(query.year);
        const date = query.display === 'day'
            ? dateYear.isoWeek(query.week).day(query.day)
            : query.display === 'week'
                ? dateYear.isoWeek(query.week)
                : dateYear.month(query.month - 1);
        const startDate = (query.display === 'day'
            ? date.startOf('day')
            : query.display === 'week'
                ? date.startOf('isoWeek')
                : date.startOf('month'))
            .subtract(2, 'hours')
            .toDate();
        const endDate = (query.display === 'day'
            ? date.endOf('day')
            : query.display === 'week'
                ? date.endOf('isoWeek')
                : date.endOf('month'))
            .add(2, 'hours')
            .toDate();
        const list = await this._post.model.post.findMany({
            where: {
                AND: [
                    {
                        OR: [
                            {
                                organizationId: orgId,
                            },
                            {
                                submittedForOrganizationId: orgId,
                            },
                        ],
                    },
                    {
                        OR: [
                            {
                                publishDate: {
                                    gte: startDate,
                                    lte: endDate,
                                },
                            },
                            {
                                intervalInDays: {
                                    not: null,
                                },
                            },
                        ],
                    },
                ],
                deletedAt: null,
                parentPostId: null,
                ...(query.customer
                    ? {
                        integration: {
                            customerId: query.customer,
                        },
                    }
                    : {}),
            },
            select: {
                id: true,
                content: true,
                publishDate: true,
                releaseURL: true,
                submittedForOrganizationId: true,
                submittedForOrderId: true,
                state: true,
                intervalInDays: true,
                tags: {
                    select: {
                        tag: true,
                    },
                },
                integration: {
                    select: {
                        id: true,
                        providerIdentifier: true,
                        name: true,
                        picture: true,
                    },
                },
            },
        });
        return list.reduce((all, post) => {
            if (!post.intervalInDays) {
                return [...all, post];
            }
            const addMorePosts = [];
            let startingDate = dayjs_1.default.utc(post.publishDate);
            while (dayjs_1.default.utc(endDate).isSameOrAfter(startingDate)) {
                if ((0, dayjs_1.default)(startingDate).isSameOrAfter(dayjs_1.default.utc(post.publishDate))) {
                    addMorePosts.push({
                        ...post,
                        publishDate: startingDate.toDate(),
                        actualDate: post.publishDate,
                    });
                }
                startingDate = startingDate.add(post.intervalInDays, 'days');
            }
            return [...all, ...addMorePosts];
        }, []);
    }
    async deletePost(orgId, group) {
        await this._post.model.post.updateMany({
            where: {
                organizationId: orgId,
                group,
            },
            data: {
                deletedAt: new Date(),
            },
        });
        return this._post.model.post.findFirst({
            where: {
                organizationId: orgId,
                group,
                parentPostId: null,
            },
            select: {
                id: true,
            },
        });
    }
    getPost(id, includeIntegration = false, orgId, isFirst) {
        return this._post.model.post.findUnique({
            where: {
                id,
                ...(orgId ? { organizationId: orgId } : {}),
                deletedAt: null,
            },
            include: {
                ...(includeIntegration
                    ? {
                        integration: true,
                        tags: {
                            select: {
                                tag: true,
                            },
                        },
                    }
                    : {}),
                childrenPost: true,
            },
        });
    }
    updatePost(id, postId, releaseURL) {
        return this._post.model.post.update({
            where: {
                id,
            },
            data: {
                state: 'PUBLISHED',
                releaseURL,
                releaseId: postId,
            },
        });
    }
    changeState(id, state, err) {
        return this._post.model.post.update({
            where: {
                id,
            },
            data: {
                state,
                error: typeof err === 'string' ? err : JSON.stringify(err),
            },
        });
    }
    async changeDate(orgId, id, date) {
        return this._post.model.post.update({
            where: {
                organizationId: orgId,
                id,
            },
            data: {
                publishDate: (0, dayjs_1.default)(date).toDate(),
            },
        });
    }
    countPostsFromDay(orgId, date) {
        return this._post.model.post.count({
            where: {
                organizationId: orgId,
                publishDate: {
                    gte: date,
                },
                OR: [
                    {
                        deletedAt: null,
                        state: {
                            in: ['QUEUE'],
                        },
                    },
                    {
                        state: 'PUBLISHED',
                    },
                ],
            },
        });
    }
    async createOrUpdatePost(state, orgId, date, body, tags, inter) {
        const posts = [];
        const uuid = (0, uuid_1.v4)();
        for (const value of body.value) {
            const updateData = (type) => ({
                publishDate: (0, dayjs_1.default)(date).toDate(),
                integration: {
                    connect: {
                        id: body.integration.id,
                        organizationId: orgId,
                    },
                },
                ...(posts?.[posts.length - 1]?.id
                    ? {
                        parentPost: {
                            connect: {
                                id: posts[posts.length - 1]?.id,
                            },
                        },
                    }
                    : type === 'update'
                        ? {
                            parentPost: {
                                disconnect: true,
                            },
                        }
                        : {}),
                content: value.content,
                group: uuid,
                intervalInDays: inter ? +inter : null,
                approvedSubmitForOrder: client_1.APPROVED_SUBMIT_FOR_ORDER.NO,
                state: state === 'draft' ? 'DRAFT' : 'QUEUE',
                image: JSON.stringify(value.image),
                settings: JSON.stringify(body.settings),
                organization: {
                    connect: {
                        id: orgId,
                    },
                },
            });
            posts.push(await this._post.model.post.upsert({
                where: {
                    id: value.id || (0, uuid_1.v4)(),
                },
                create: { ...updateData('create') },
                update: {
                    ...updateData('update'),
                    lastMessage: {
                        disconnect: true,
                    },
                    submittedForOrder: {
                        disconnect: true,
                    },
                },
            }));
            if (posts.length === 1) {
                await this._tagsPosts.model.tagsPosts.deleteMany({
                    where: {
                        post: {
                            id: posts[0].id,
                        },
                    },
                });
                if (tags.length) {
                    const tagsList = await this._tags.model.tags.findMany({
                        where: {
                            orgId: orgId,
                            name: {
                                in: tags.map((tag) => tag.label),
                            },
                        },
                    });
                    if (tagsList.length) {
                        await this._post.model.post.update({
                            where: {
                                id: posts[posts.length - 1].id,
                            },
                            data: {
                                tags: {
                                    createMany: {
                                        data: tagsList.map((tag) => ({
                                            tagId: tag.id,
                                        })),
                                    },
                                },
                            },
                        });
                    }
                }
            }
        }
        const previousPost = body.group
            ? (await this._post.model.post.findFirst({
                where: {
                    group: body.group,
                    deletedAt: null,
                    parentPostId: null,
                },
                select: {
                    id: true,
                },
            }))?.id
            : undefined;
        if (body.group) {
            await this._post.model.post.updateMany({
                where: {
                    group: body.group,
                    deletedAt: null,
                },
                data: {
                    parentPostId: null,
                    deletedAt: new Date(),
                },
            });
        }
        return { previousPost, posts };
    }
    async submit(id, order, buyerOrganizationId) {
        return this._post.model.post.update({
            where: {
                id,
            },
            data: {
                submittedForOrderId: order,
                approvedSubmitForOrder: 'WAITING_CONFIRMATION',
                submittedForOrganizationId: buyerOrganizationId,
            },
            select: {
                id: true,
                description: true,
                submittedForOrder: {
                    select: {
                        messageGroupId: true,
                    },
                },
            },
        });
    }
    updateMessage(id, messageId) {
        return this._post.model.post.update({
            where: {
                id,
            },
            data: {
                lastMessageId: messageId,
            },
        });
    }
    getPostById(id, org) {
        return this._post.model.post.findUnique({
            where: {
                id,
                ...(org ? { organizationId: org } : {}),
            },
            include: {
                integration: true,
                submittedForOrder: {
                    include: {
                        posts: {
                            where: {
                                state: 'PUBLISHED',
                            },
                        },
                        ordersItems: true,
                        seller: {
                            select: {
                                id: true,
                                account: true,
                            },
                        },
                    },
                },
            },
        });
    }
    findAllExistingCategories() {
        return this._popularPosts.model.popularPosts.findMany({
            select: {
                category: true,
            },
            distinct: ['category'],
        });
    }
    findAllExistingTopicsOfCategory(category) {
        return this._popularPosts.model.popularPosts.findMany({
            where: {
                category,
            },
            select: {
                topic: true,
            },
            distinct: ['topic'],
        });
    }
    findPopularPosts(category, topic) {
        return this._popularPosts.model.popularPosts.findMany({
            where: {
                category,
                ...(topic ? { topic } : {}),
            },
            select: {
                content: true,
                hook: true,
            },
        });
    }
    createPopularPosts(post) {
        return this._popularPosts.model.popularPosts.create({
            data: {
                category: 'category',
                topic: 'topic',
                content: 'content',
                hook: 'hook',
            },
        });
    }
    async getPostsCountsByDates(orgId, times, date) {
        const dates = await this._post.model.post.findMany({
            where: {
                deletedAt: null,
                organizationId: orgId,
                publishDate: {
                    in: times.map((time) => {
                        return date.clone().add(time, 'minutes').toDate();
                    }),
                },
            },
        });
        return times.filter((time) => date.clone().add(time, 'minutes').isAfter(dayjs_1.default.utc()) &&
            !dates.find((dateFind) => {
                return (dayjs_1.default
                    .utc(dateFind.publishDate)
                    .diff(date.clone().startOf('day'), 'minutes') == time);
            }));
    }
    async getComments(postId) {
        return this._comments.model.comments.findMany({
            where: {
                postId,
            },
            orderBy: {
                createdAt: 'asc',
            },
        });
    }
    async getTags(orgId) {
        return this._tags.model.tags.findMany({
            where: {
                orgId,
            },
        });
    }
    createTag(orgId, body) {
        return this._tags.model.tags.create({
            data: {
                orgId,
                name: body.name,
                color: body.color,
            },
        });
    }
    editTag(id, orgId, body) {
        return this._tags.model.tags.update({
            where: {
                id,
            },
            data: {
                name: body.name,
                color: body.color,
            },
        });
    }
    createComment(orgId, userId, postId, content) {
        return this._comments.model.comments.create({
            data: {
                organizationId: orgId,
                userId,
                postId,
                content,
            },
        });
    }
    async getPostsSince(orgId, since) {
        return this._post.model.post.findMany({
            where: {
                organizationId: orgId,
                publishDate: {
                    gte: new Date(since),
                },
                deletedAt: null,
                parentPostId: null,
            },
            select: {
                id: true,
                content: true,
                publishDate: true,
                releaseURL: true,
                state: true,
                integration: {
                    select: {
                        id: true,
                        name: true,
                        providerIdentifier: true,
                        picture: true,
                        type: true,
                    },
                },
            },
        });
    }
};
exports.PostsRepository = PostsRepository;
exports.PostsRepository = PostsRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository])
], PostsRepository);


/***/ }),
/* 101 */
/***/ ((module) => {

module.exports = require("dayjs/plugin/isoWeek");

/***/ }),
/* 102 */
/***/ ((module) => {

module.exports = require("dayjs/plugin/weekOfYear");

/***/ }),
/* 103 */
/***/ ((module) => {

module.exports = require("dayjs/plugin/isSameOrAfter");

/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const messages_repository_1 = __webpack_require__(105);
const organization_repository_1 = __webpack_require__(11);
const notification_service_1 = __webpack_require__(18);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const client_1 = __webpack_require__(26);
let MessagesService = class MessagesService {
    constructor(_workerServiceProducer, _messagesRepository, _organizationRepository, _inAppNotificationService) {
        this._workerServiceProducer = _workerServiceProducer;
        this._messagesRepository = _messagesRepository;
        this._organizationRepository = _organizationRepository;
        this._inAppNotificationService = _inAppNotificationService;
    }
    async createConversation(userId, organizationId, body) {
        const conversation = await this._messagesRepository.createConversation(userId, organizationId, body);
        const orgs = await this._organizationRepository.getOrgsByUserId(body.to);
        await Promise.all(orgs.map(async (org) => {
            return this._inAppNotificationService.inAppNotification(org.id, 'Request for service', 'A user has requested a service from you', true);
        }));
        return conversation;
    }
    getMessagesGroup(userId, organizationId) {
        return this._messagesRepository.getMessagesGroup(userId, organizationId);
    }
    async getMessages(userId, organizationId, groupId, page) {
        if (page === 1) {
            this._messagesRepository.updateOrderOnline(userId);
        }
        return this._messagesRepository.getMessages(userId, organizationId, groupId, page);
    }
    async createNewMessage(group, from, content, special) {
        const message = await this._messagesRepository.createNewMessage(group, from, content, special);
        const user = from === 'BUYER' ? message.group.seller : message.group.buyer;
        await Promise.all(user.organizations.map((p) => {
            return this.sendMessageNotification({
                id: p.organizationId,
                lastOnline: user.lastOnline,
            });
        }));
        return message;
    }
    async sendMessageNotification(user) {
        if ((0, dayjs_1.default)(user.lastOnline).add(5, 'minute').isBefore((0, dayjs_1.default)())) {
            await this._inAppNotificationService.inAppNotification(user.id, 'New message', 'You have a new message', true);
        }
    }
    async createMessage(userId, orgId, groupId, body) {
        const message = await this._messagesRepository.createMessage(userId, orgId, groupId, body);
        await Promise.all(message.organizations.map((p) => {
            return this.sendMessageNotification({
                id: p.organizationId,
                lastOnline: message.lastOnline,
            });
        }));
        return message;
    }
    createOffer(userId, body) {
        return this._messagesRepository.createOffer(userId, body);
    }
    getOrderDetails(userId, organizationId, orderId) {
        return this._messagesRepository.getOrderDetails(userId, organizationId, orderId);
    }
    canAddPost(id, order, integrationId) {
        return this._messagesRepository.canAddPost(id, order, integrationId);
    }
    changeOrderStatus(orderId, status, paymentIntent) {
        return this._messagesRepository.changeOrderStatus(orderId, status, paymentIntent);
    }
    getOrgByOrder(orderId) {
        return this._messagesRepository.getOrgByOrder(orderId);
    }
    getMarketplaceAvailableOffers(orgId, id) {
        return this._messagesRepository.getMarketplaceAvailableOffers(orgId, id);
    }
    getPost(userId, orgId, postId) {
        return this._messagesRepository.getPost(userId, orgId, postId);
    }
    requestRevision(userId, orgId, postId, message) {
        return this._messagesRepository.requestRevision(userId, orgId, postId, message);
    }
    async requestApproved(userId, orgId, postId, message) {
        const post = await this._messagesRepository.requestApproved(userId, orgId, postId, message);
        if (post) {
            this._workerServiceProducer.emit('post', {
                id: post.id,
                options: {
                    delay: 0, //dayjs(post.publishDate).diff(dayjs(), 'millisecond'),
                },
                payload: {
                    id: post.id,
                },
            });
        }
    }
    async requestCancel(orgId, postId) {
        const cancel = await this._messagesRepository.requestCancel(orgId, postId);
        await this._workerServiceProducer.delete('post', postId);
        return cancel;
    }
    async completeOrderAndPay(orgId, order) {
        const orderList = await this._messagesRepository.completeOrderAndPay(orgId, order);
        if (!orderList) {
            return false;
        }
        orderList.posts.forEach((post) => {
            this._workerServiceProducer.delete('post', post.id);
        });
        return orderList;
    }
    completeOrder(orderId) {
        return this._messagesRepository.completeOrder(orderId);
    }
    payoutProblem(orderId, sellerId, amount, postId) {
        return this._messagesRepository.payoutProblem(orderId, sellerId, amount, postId);
    }
    getOrders(userId, orgId, type) {
        return this._messagesRepository.getOrders(userId, orgId, type);
    }
};
exports.MessagesService = MessagesService;
exports.MessagesService = MessagesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [client_1.BullMqClient,
        messages_repository_1.MessagesRepository,
        organization_repository_1.OrganizationRepository,
        notification_service_1.NotificationService])
], MessagesService);


/***/ }),
/* 105 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesRepository = void 0;
const tslib_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(5);
const client_1 = __webpack_require__(10);
let MessagesRepository = class MessagesRepository {
    constructor(_messagesGroup, _messages, _orders, _organizations, _post, _payoutProblems, _users) {
        this._messagesGroup = _messagesGroup;
        this._messages = _messages;
        this._orders = _orders;
        this._organizations = _organizations;
        this._post = _post;
        this._payoutProblems = _payoutProblems;
        this._users = _users;
    }
    async createConversation(userId, organizationId, body) {
        const { id } = (await this._messagesGroup.model.messagesGroup.findFirst({
            where: {
                buyerOrganizationId: organizationId,
                buyerId: userId,
                sellerId: body.to,
            },
        })) ||
            (await this._messagesGroup.model.messagesGroup.create({
                data: {
                    buyerOrganizationId: organizationId,
                    buyerId: userId,
                    sellerId: body.to,
                },
            }));
        await this._messagesGroup.model.messagesGroup.update({
            where: {
                id,
            },
            data: {
                updatedAt: new Date(),
            },
        });
        await this._messages.model.messages.create({
            data: {
                groupId: id,
                from: client_1.From.BUYER,
                content: body.message,
            },
        });
        return { id };
    }
    getOrgByOrder(orderId) {
        return this._orders.model.orders.findFirst({
            where: {
                id: orderId,
            },
            select: {
                messageGroup: {
                    select: {
                        buyerOrganizationId: true,
                    },
                },
            },
        });
    }
    async getMessagesGroup(userId, organizationId) {
        return this._messagesGroup.model.messagesGroup.findMany({
            where: {
                OR: [
                    {
                        buyerOrganizationId: organizationId,
                        buyerId: userId,
                    },
                    {
                        sellerId: userId,
                    },
                ],
            },
            orderBy: {
                updatedAt: 'desc',
            },
            include: {
                seller: {
                    select: {
                        id: true,
                        name: true,
                        picture: {
                            select: {
                                id: true,
                                path: true,
                            },
                        },
                    },
                },
                buyer: {
                    select: {
                        id: true,
                        name: true,
                        picture: {
                            select: {
                                id: true,
                                path: true,
                            },
                        },
                    },
                },
                orders: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                    take: 1,
                },
                messages: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                    take: 1,
                },
            },
        });
    }
    async createMessage(userId, orgId, groupId, body) {
        const group = await this._messagesGroup.model.messagesGroup.findFirst({
            where: {
                id: groupId,
                OR: [
                    {
                        buyerOrganizationId: orgId,
                        buyerId: userId,
                    },
                    {
                        sellerId: userId,
                    },
                ],
            },
        });
        if (!group) {
            throw new Error('Group not found');
        }
        const create = await this.createNewMessage(groupId, group.buyerId === userId ? client_1.From.BUYER : client_1.From.SELLER, body.message);
        await this._messagesGroup.model.messagesGroup.update({
            where: {
                id: groupId,
            },
            data: {
                updatedAt: new Date(),
            },
        });
        if (userId === group.buyerId) {
            return create.group.seller;
        }
        return create.group.buyer;
    }
    async updateOrderOnline(userId) {
        await this._users.model.user.update({
            where: {
                id: userId,
            },
            data: {
                lastOnline: new Date(),
            },
        });
    }
    async getMessages(userId, organizationId, groupId, page) {
        return this._messagesGroup.model.messagesGroup.findFirst({
            where: {
                id: groupId,
                OR: [
                    {
                        buyerOrganizationId: organizationId,
                        buyerId: userId,
                    },
                    {
                        sellerId: userId,
                    },
                ],
            },
            include: {
                messages: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                    take: 10,
                    skip: (page - 1) * 10,
                },
            },
        });
    }
    async createOffer(userId, body) {
        const messageGroup = await this._messagesGroup.model.messagesGroup.findFirst({
            where: {
                id: body.group,
                sellerId: userId,
            },
            select: {
                id: true,
                buyer: {
                    select: {
                        id: true,
                    },
                },
                orders: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                    take: 1,
                },
            },
        });
        if (!messageGroup?.id) {
            throw new Error('Group not found');
        }
        if (messageGroup.orders.length &&
            messageGroup.orders[0].status !== 'COMPLETED' &&
            messageGroup.orders[0].status !== 'CANCELED') {
            throw new Error('Order already exists');
        }
        const data = await this._orders.model.orders.create({
            data: {
                sellerId: userId,
                buyerId: messageGroup.buyer.id,
                messageGroupId: messageGroup.id,
                ordersItems: {
                    createMany: {
                        data: body.socialMedia.map((item) => ({
                            quantity: item.total,
                            integrationId: item.value,
                            price: item.price,
                        })),
                    },
                },
                status: 'PENDING',
            },
            select: {
                id: true,
                ordersItems: {
                    select: {
                        quantity: true,
                        price: true,
                        integration: {
                            select: {
                                name: true,
                                providerIdentifier: true,
                                picture: true,
                                id: true,
                            },
                        },
                    },
                },
            },
        });
        await this._messages.model.messages.create({
            data: {
                groupId: body.group,
                from: client_1.From.SELLER,
                content: '',
                special: JSON.stringify({ type: 'offer', data: data }),
            },
        });
        return { success: true };
    }
    async createNewMessage(group, from, content, special) {
        return this._messages.model.messages.create({
            data: {
                groupId: group,
                from,
                content,
                special: JSON.stringify(special),
            },
            select: {
                id: true,
                group: {
                    select: {
                        buyer: {
                            select: {
                                lastOnline: true,
                                id: true,
                                organizations: true,
                            },
                        },
                        seller: {
                            select: {
                                lastOnline: true,
                                id: true,
                                organizations: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async getOrderDetails(userId, organizationId, orderId) {
        const order = await this._messagesGroup.model.messagesGroup.findFirst({
            where: {
                buyerId: userId,
                buyerOrganizationId: organizationId,
            },
            select: {
                buyer: true,
                seller: true,
                orders: {
                    include: {
                        ordersItems: {
                            select: {
                                quantity: true,
                                integration: true,
                                price: true,
                            },
                        },
                    },
                    where: {
                        id: orderId,
                        status: 'PENDING',
                    },
                },
            },
        });
        if (!order?.orders[0]?.id) {
            throw new Error('Order not found');
        }
        return {
            buyer: order.buyer,
            seller: order.seller,
            order: order.orders[0],
        };
    }
    async canAddPost(id, order, integrationId) {
        const findOrder = await this._orders.model.orders.findFirst({
            where: {
                id: order,
                status: 'ACCEPTED',
            },
            select: {
                posts: true,
                ordersItems: true,
            },
        });
        if (!findOrder) {
            return false;
        }
        if (findOrder.posts.find((p) => p.id === id && p.approvedSubmitForOrder === 'YES')) {
            return false;
        }
        if (findOrder.posts.find((p) => p.id === id && p.approvedSubmitForOrder === 'WAITING_CONFIRMATION')) {
            return true;
        }
        const postsForIntegration = findOrder.ordersItems.filter((p) => p.integrationId === integrationId);
        const totalPostsRequired = postsForIntegration.reduce((acc, item) => acc + item.quantity, 0);
        const usedPosts = findOrder.posts.filter((p) => p.integrationId === integrationId &&
            ['WAITING_CONFIRMATION', 'YES'].indexOf(p.approvedSubmitForOrder) > -1).length;
        return totalPostsRequired > usedPosts;
    }
    changeOrderStatus(orderId, status, paymentIntent) {
        return this._orders.model.orders.update({
            where: {
                id: orderId,
            },
            data: {
                status,
                captureId: paymentIntent,
            },
        });
    }
    async getMarketplaceAvailableOffers(orgId, id) {
        const offers = await this._organizations.model.organization.findFirst({
            where: {
                id: orgId,
            },
            select: {
                users: {
                    select: {
                        user: {
                            select: {
                                orderSeller: {
                                    where: {
                                        status: 'ACCEPTED',
                                    },
                                    select: {
                                        id: true,
                                        posts: {
                                            where: {
                                                deletedAt: null,
                                            },
                                            select: {
                                                id: true,
                                                integrationId: true,
                                                approvedSubmitForOrder: true,
                                            },
                                        },
                                        messageGroup: {
                                            select: {
                                                buyerOrganizationId: true,
                                            },
                                        },
                                        buyer: {
                                            select: {
                                                id: true,
                                                name: true,
                                                picture: {
                                                    select: {
                                                        id: true,
                                                        path: true,
                                                    },
                                                },
                                            },
                                        },
                                        ordersItems: {
                                            select: {
                                                quantity: true,
                                                integration: {
                                                    select: {
                                                        id: true,
                                                        name: true,
                                                        providerIdentifier: true,
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        const allOrders = offers?.users.flatMap((user) => user.user.orderSeller) || [];
        const onlyValidItems = allOrders.filter((order) => (order.posts.find((p) => p.id === id)
            ? 0
            : order.posts.filter((f) => f.approvedSubmitForOrder !== 'NO')
                .length) <
            order.ordersItems.reduce((acc, item) => acc + item.quantity, 0));
        return onlyValidItems
            .map((order) => {
            const postsNumbers = order.posts
                .filter((p) => ['WAITING_CONFIRMATION', 'YES'].indexOf(p.approvedSubmitForOrder) > -1)
                .reduce((acc, post) => {
                acc[post.integrationId] = acc[post.integrationId] + 1 || 1;
                return acc;
            }, {});
            const missing = order.ordersItems.map((item) => {
                return {
                    integration: item,
                    missing: item.quantity - (postsNumbers[item.integration.id] || 0),
                };
            });
            return {
                id: order.id,
                usedIds: order.posts.map((p) => ({
                    id: p.id,
                    status: p.approvedSubmitForOrder,
                })),
                buyer: order.buyer,
                missing,
            };
        })
            .filter((f) => f.missing.length);
    }
    async requestRevision(userId, orgId, postId, message) {
        const loadMessage = await this._messages.model.messages.findFirst({
            where: {
                id: message,
                group: {
                    buyerOrganizationId: orgId,
                },
            },
            select: {
                id: true,
                special: true,
            },
        });
        const post = await this._post.model.post.findFirst({
            where: {
                id: postId,
                approvedSubmitForOrder: 'WAITING_CONFIRMATION',
                deletedAt: null,
            },
        });
        if (post && loadMessage) {
            const special = JSON.parse(loadMessage.special);
            special.data.status = 'REVISION';
            await this._messages.model.messages.update({
                where: {
                    id: message,
                },
                data: {
                    special: JSON.stringify(special),
                },
            });
            await this._post.model.post.update({
                where: {
                    id: postId,
                    deletedAt: null,
                },
                data: {
                    approvedSubmitForOrder: 'NO',
                },
            });
        }
    }
    async requestCancel(orgId, postId) {
        const getPost = await this._post.model.post.findFirst({
            where: {
                id: postId,
                organizationId: orgId,
                approvedSubmitForOrder: {
                    in: ['WAITING_CONFIRMATION', 'YES'],
                },
            },
            select: {
                lastMessage: true,
            },
        });
        if (!getPost) {
            throw new Error('Post not found');
        }
        await this._post.model.post.update({
            where: {
                id: postId,
            },
            data: {
                approvedSubmitForOrder: 'NO',
                submittedForOrganizationId: null,
            },
        });
        const special = JSON.parse(getPost.lastMessage.special);
        special.data.status = 'CANCELED';
        await this._messages.model.messages.update({
            where: {
                id: getPost.lastMessage.id,
            },
            data: {
                special: JSON.stringify(special),
            },
        });
    }
    async requestApproved(userId, orgId, postId, message) {
        const loadMessage = await this._messages.model.messages.findFirst({
            where: {
                id: message,
                group: {
                    buyerOrganizationId: orgId,
                },
            },
            select: {
                id: true,
                special: true,
            },
        });
        const post = await this._post.model.post.findFirst({
            where: {
                id: postId,
                approvedSubmitForOrder: 'WAITING_CONFIRMATION',
                deletedAt: null,
            },
        });
        if (post && loadMessage) {
            const special = JSON.parse(loadMessage.special);
            special.data.status = 'APPROVED';
            await this._messages.model.messages.update({
                where: {
                    id: message,
                },
                data: {
                    special: JSON.stringify(special),
                },
            });
            await this._post.model.post.update({
                where: {
                    id: postId,
                    deletedAt: null,
                },
                data: {
                    approvedSubmitForOrder: 'YES',
                },
            });
            return post;
        }
        return false;
    }
    completeOrder(orderId) {
        return this._orders.model.orders.update({
            where: {
                id: orderId,
            },
            data: {
                status: 'COMPLETED',
            },
        });
    }
    async completeOrderAndPay(orgId, order) {
        const findOrder = await this._orders.model.orders.findFirst({
            where: {
                id: order,
                messageGroup: {
                    buyerOrganizationId: orgId,
                },
            },
            select: {
                captureId: true,
                seller: {
                    select: {
                        account: true,
                        id: true,
                    },
                },
                ordersItems: true,
                posts: true,
            },
        });
        if (!findOrder) {
            return false;
        }
        const releasedPosts = findOrder.posts.filter((p) => p.releaseURL);
        const nonReleasedPosts = findOrder.posts.filter((p) => !p.releaseURL);
        const totalPosts = releasedPosts.reduce((acc, item) => {
            acc[item.integrationId] = (acc[item.integrationId] || 0) + 1;
            return acc;
        }, {});
        const totalOrderItems = findOrder.ordersItems.reduce((acc, item) => {
            acc[item.integrationId] = (acc[item.integrationId] || 0) + item.quantity;
            return acc;
        }, {});
        const calculate = Object.keys(totalOrderItems).reduce((acc, key) => {
            acc.push({
                price: findOrder.ordersItems.find((p) => p.integrationId === key)
                    .price,
                quantity: totalOrderItems[key] - (totalPosts[key] || 0),
            });
            return acc;
        }, []);
        const price = calculate.reduce((acc, item) => {
            acc += item.price * item.quantity;
            return acc;
        }, 0);
        return {
            price,
            account: findOrder.seller.account,
            charge: findOrder.captureId,
            posts: nonReleasedPosts,
            sellerId: findOrder.seller.id,
        };
    }
    payoutProblem(orderId, sellerId, amount, postId) {
        return this._payoutProblems.model.payoutProblems.create({
            data: {
                amount,
                orderId,
                ...(postId ? { postId } : {}),
                userId: sellerId,
                status: 'PAYMENT_ERROR',
            },
        });
    }
    async getOrders(userId, orgId, type) {
        const orders = await this._orders.model.orders.findMany({
            where: {
                status: {
                    in: ['ACCEPTED', 'PENDING', 'COMPLETED'],
                },
                ...(type === 'seller'
                    ? {
                        sellerId: userId,
                    }
                    : {
                        messageGroup: {
                            buyerOrganizationId: orgId,
                        },
                    }),
            },
            orderBy: {
                updatedAt: 'desc',
            },
            select: {
                id: true,
                status: true,
                ...(type === 'seller'
                    ? {
                        buyer: {
                            select: {
                                name: true,
                            },
                        },
                    }
                    : {
                        seller: {
                            select: {
                                name: true,
                            },
                        },
                    }),
                ordersItems: {
                    select: {
                        id: true,
                        quantity: true,
                        price: true,
                        integration: {
                            select: {
                                id: true,
                                picture: true,
                                name: true,
                                providerIdentifier: true,
                            },
                        },
                    },
                },
                posts: {
                    select: {
                        id: true,
                        integrationId: true,
                        releaseURL: true,
                        approvedSubmitForOrder: true,
                        state: true,
                    },
                },
            },
        });
        return {
            orders: await Promise.all(orders.map(async (order) => {
                return {
                    id: order.id,
                    status: order.status,
                    // @ts-ignore
                    name: type === 'seller' ? order?.buyer?.name : order?.seller?.name,
                    price: order.ordersItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
                    details: await Promise.all(order.ordersItems.map((item) => {
                        return {
                            posted: order.posts.filter((p) => p.releaseURL && p.integrationId === item.integration.id).length,
                            submitted: order.posts.filter((p) => !p.releaseURL &&
                                (p.approvedSubmitForOrder === 'WAITING_CONFIRMATION' ||
                                    p.approvedSubmitForOrder === 'YES') &&
                                p.integrationId === item.integration.id).length,
                            integration: item.integration,
                            total: item.quantity,
                            price: item.price,
                        };
                    })),
                };
            })),
        };
    }
    getPost(userId, orgId, postId) {
        return this._post.model.post.findFirst({
            where: {
                id: postId,
                submittedForOrder: {
                    messageGroup: {
                        OR: [{ sellerId: userId }, { buyerOrganizationId: orgId }],
                    },
                },
            },
            select: {
                organizationId: true,
                integration: {
                    select: {
                        providerIdentifier: true,
                    },
                },
            },
        });
    }
};
exports.MessagesRepository = MessagesRepository;
exports.MessagesRepository = MessagesRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository])
], MessagesRepository);


/***/ }),
/* 106 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StripeService = void 0;
const tslib_1 = __webpack_require__(1);
const stripe_1 = tslib_1.__importDefault(__webpack_require__(107));
const common_1 = __webpack_require__(5);
const subscription_service_1 = __webpack_require__(40);
const organization_service_1 = __webpack_require__(17);
const make_is_1 = __webpack_require__(16);
const lodash_1 = __webpack_require__(38);
const messages_service_1 = __webpack_require__(104);
const pricing_1 = __webpack_require__(41);
const auth_service_1 = __webpack_require__(12);
const track_service_1 = __webpack_require__(108);
const users_service_1 = __webpack_require__(33);
const track_enum_1 = __webpack_require__(109);
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-04-10',
});
let StripeService = class StripeService {
    constructor(_subscriptionService, _organizationService, _userService, _messagesService, _trackService) {
        this._subscriptionService = _subscriptionService;
        this._organizationService = _organizationService;
        this._userService = _userService;
        this._messagesService = _messagesService;
        this._trackService = _trackService;
    }
    validateRequest(rawBody, signature, endpointSecret) {
        return stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);
    }
    async updateAccount(event) {
        if (!event.account) {
            return;
        }
        const accountCharges = event.data.object.payouts_enabled &&
            event.data.object.charges_enabled &&
            !event?.data?.object?.requirements?.disabled_reason;
        await this._subscriptionService.updateConnectedStatus(event.account, accountCharges);
    }
    async checkValidCard(event) {
        if (event.data.object.status === 'incomplete') {
            return false;
        }
        const getOrgFromCustomer = await this._organizationService.getOrgByCustomerId(event.data.object.customer);
        if (!getOrgFromCustomer?.allowTrial) {
            return true;
        }
        console.log('Checking card');
        const paymentMethods = await stripe.paymentMethods.list({
            customer: event.data.object.customer,
        });
        // find the last one created
        const latestMethod = paymentMethods.data.reduce((prev, current) => {
            if (prev.created < current.created) {
                return current;
            }
            return prev;
        });
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: 100,
                currency: 'usd',
                payment_method: latestMethod.id,
                customer: event.data.object.customer,
                automatic_payment_methods: {
                    allow_redirects: 'never',
                    enabled: true,
                },
                capture_method: 'manual', // Authorize without capturing
                confirm: true, // Confirm the PaymentIntent
            });
            if (paymentIntent.status !== 'requires_capture') {
                console.error('Cant charge');
                await stripe.paymentMethods.detach(paymentMethods.data[0].id);
                await stripe.subscriptions.cancel(event.data.object.id);
                return false;
            }
            await stripe.paymentIntents.cancel(paymentIntent.id);
            return true;
        }
        catch (err) {
            try {
                await stripe.paymentMethods.detach(paymentMethods.data[0].id);
                await stripe.subscriptions.cancel(event.data.object.id);
            }
            catch (err) {
                /*dont do anything*/
            }
            return false;
        }
    }
    async createSubscription(event) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { uniqueId, billing, period, } = event.data.object.metadata;
        try {
            const check = await this.checkValidCard(event);
            if (!check) {
                return { ok: false };
            }
        }
        catch (err) {
            return { ok: false };
        }
        return this._subscriptionService.createOrUpdateSubscription(uniqueId, event.data.object.customer, pricing_1.pricing[billing].channel, billing, period, event.data.object.cancel_at);
    }
    async updateSubscription(event) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { uniqueId, billing, period, } = event.data.object.metadata;
        const check = await this.checkValidCard(event);
        if (!check) {
            return { ok: false };
        }
        return this._subscriptionService.createOrUpdateSubscription(uniqueId, event.data.object.customer, pricing_1.pricing[billing].channel, billing, period, event.data.object.cancel_at);
    }
    async deleteSubscription(event) {
        await this._subscriptionService.deleteSubscription(event.data.object.customer);
    }
    async createOrGetCustomer(organization) {
        if (organization.paymentId) {
            return organization.paymentId;
        }
        const customer = await stripe.customers.create({
            name: organization.name,
        });
        await this._subscriptionService.updateCustomerId(organization.id, customer.id);
        return customer.id;
    }
    async getPackages() {
        const products = await stripe.prices.list({
            active: true,
            expand: ['data.tiers', 'data.product'],
            lookup_keys: [
                'standard_monthly',
                'standard_yearly',
                'pro_monthly',
                'pro_yearly',
            ],
        });
        const productsList = (0, lodash_1.groupBy)(products.data.map((p) => ({
            // @ts-ignore
            name: p.product?.name,
            recurring: p?.recurring?.interval,
            price: p?.tiers?.[0]?.unit_amount / 100,
        })), 'recurring');
        return { ...productsList };
    }
    async prorate(organizationId, body) {
        const org = await this._organizationService.getOrgById(organizationId);
        const customer = await this.createOrGetCustomer(org);
        const priceData = pricing_1.pricing[body.billing];
        const allProducts = await stripe.products.list({
            active: true,
            expand: ['data.prices'],
        });
        const findProduct = allProducts.data.find((product) => product.name.toUpperCase() === body.billing.toUpperCase()) ||
            (await stripe.products.create({
                active: true,
                name: body.billing,
            }));
        const pricesList = await stripe.prices.list({
            active: true,
            product: findProduct.id,
        });
        const findPrice = pricesList.data.find((p) => p?.recurring?.interval?.toLowerCase() ===
            (body.period === 'MONTHLY' ? 'month' : 'year') &&
            p?.nickname === body.billing + ' ' + body.period &&
            p?.unit_amount ===
                (body.period === 'MONTHLY'
                    ? priceData.month_price
                    : priceData.year_price) *
                    100) ||
            (await stripe.prices.create({
                active: true,
                product: findProduct.id,
                currency: 'usd',
                nickname: body.billing + ' ' + body.period,
                unit_amount: (body.period === 'MONTHLY'
                    ? priceData.month_price
                    : priceData.year_price) * 100,
                recurring: {
                    interval: body.period === 'MONTHLY' ? 'month' : 'year',
                },
            }));
        const proration_date = Math.floor(Date.now() / 1000);
        const currentUserSubscription = {
            data: (await stripe.subscriptions.list({
                customer,
                status: 'all',
            })).data.filter((f) => f.status === 'active' || f.status === 'trialing'),
        };
        try {
            const price = await stripe.invoices.retrieveUpcoming({
                customer,
                subscription: currentUserSubscription?.data?.[0]?.id,
                subscription_proration_behavior: 'create_prorations',
                subscription_billing_cycle_anchor: 'now',
                subscription_items: [
                    {
                        id: currentUserSubscription?.data?.[0]?.items?.data?.[0]?.id,
                        price: findPrice?.id,
                        quantity: 1,
                    },
                ],
                subscription_proration_date: proration_date,
            });
            return {
                price: price?.amount_remaining ? price?.amount_remaining / 100 : 0,
            };
        }
        catch (err) {
            return { price: 0 };
        }
    }
    async getCustomerSubscriptions(organizationId) {
        const org = (await this._organizationService.getOrgById(organizationId));
        const customer = org.paymentId;
        return stripe.subscriptions.list({
            customer: customer,
            status: 'all',
        });
    }
    async setToCancel(organizationId) {
        const id = (0, make_is_1.makeId)(10);
        const org = await this._organizationService.getOrgById(organizationId);
        const customer = await this.createOrGetCustomer(org);
        const currentUserSubscription = {
            data: (await stripe.subscriptions.list({
                customer,
                status: 'all',
            })).data.filter((f) => f.status !== 'canceled'),
        };
        const { cancel_at } = await stripe.subscriptions.update(currentUserSubscription.data[0].id, {
            cancel_at_period_end: !currentUserSubscription.data[0].cancel_at_period_end,
            metadata: {
                service: 'gitroom',
                id,
            },
        });
        return {
            id,
            cancel_at: cancel_at ? new Date(cancel_at * 1000) : undefined,
        };
    }
    async getCustomerByOrganizationId(organizationId) {
        const org = (await this._organizationService.getOrgById(organizationId));
        return org.paymentId;
    }
    async createBillingPortalLink(customer) {
        return stripe.billingPortal.sessions.create({
            customer,
            flow_data: {
                after_completion: {
                    type: 'redirect',
                    redirect: {
                        return_url: process.env['FRONTEND_URL'] + '/billing',
                    },
                },
                type: 'payment_method_update',
            },
        });
    }
    async createCheckoutSession(ud, uniqueId, customer, body, price, userId, allowTrial) {
        const isUtm = body.utm ? `&utm_source=${body.utm}` : '';
        const { url } = await stripe.checkout.sessions.create({
            customer,
            cancel_url: process.env['FRONTEND_URL'] + `/billing?cancel=true${isUtm}`,
            success_url: process.env['FRONTEND_URL'] +
                `/launches?onboarding=true&check=${uniqueId}${isUtm}`,
            mode: 'subscription',
            subscription_data: {
                ...(allowTrial ? { trial_period_days: 7 } : {}),
                metadata: {
                    service: 'gitroom',
                    ...body,
                    userId,
                    uniqueId,
                    ud,
                },
            },
            ...(body.tolt
                ? {
                    metadata: {
                        tolt_referral: body.tolt,
                    },
                }
                : {}),
            allow_promotion_codes: true,
            line_items: [
                {
                    price,
                    quantity: 1,
                },
            ],
        });
        return { url };
    }
    async createAccountProcess(userId, email, country) {
        const account = await this._subscriptionService.getUserAccount(userId);
        if (account?.account && account?.connectedAccount) {
            return { url: await this.addBankAccount(account.account) };
        }
        if (account?.account && !account?.connectedAccount) {
            await stripe.accounts.del(account.account);
        }
        const createAccount = await this.createAccount(userId, email, country);
        return { url: await this.addBankAccount(createAccount) };
    }
    async createAccount(userId, email, country) {
        const account = await stripe.accounts.create({
            type: 'custom',
            capabilities: {
                transfers: {
                    requested: true,
                },
                card_payments: {
                    requested: true,
                },
            },
            tos_acceptance: {
                service_agreement: 'full',
            },
            metadata: {
                service: 'gitroom',
            },
            country,
            email,
        });
        await this._subscriptionService.updateAccount(userId, account.id);
        return account.id;
    }
    async addBankAccount(userId) {
        const accountLink = await stripe.accountLinks.create({
            account: userId,
            refresh_url: process.env['FRONTEND_URL'] + '/marketplace/seller',
            return_url: process.env['FRONTEND_URL'] + '/marketplace/seller',
            type: 'account_onboarding',
            collection_options: {
                fields: 'eventually_due',
            },
        });
        return accountLink.url;
    }
    async checkSubscription(organizationId, subscriptionId) {
        const orgValue = await this._subscriptionService.checkSubscription(organizationId, subscriptionId);
        if (orgValue) {
            return 2;
        }
        const getCustomerSubscriptions = await this.getCustomerSubscriptions(organizationId);
        if (getCustomerSubscriptions.data.length === 0) {
            return 0;
        }
        if (getCustomerSubscriptions.data.find((p) => p.metadata.uniqueId === subscriptionId)?.canceled_at) {
            return 1;
        }
        return 0;
    }
    async payAccountStepOne(userId, organization, seller, orderId, ordersItems, groupId) {
        const customer = (await this.createOrGetCustomer(organization));
        const price = ordersItems.reduce((all, current) => {
            return all + current.price * current.quantity;
        }, 0);
        const { url } = await stripe.checkout.sessions.create({
            customer,
            mode: 'payment',
            currency: 'usd',
            success_url: process.env['FRONTEND_URL'] + `/messages/${groupId}`,
            metadata: {
                orderId,
                service: 'gitroom',
                type: 'marketplace',
            },
            line_items: [
                ...ordersItems,
                {
                    integrationType: `Gitroom Fee (${+process.env.FEE_AMOUNT * 100}%)`,
                    quantity: 1,
                    price: price * +process.env.FEE_AMOUNT,
                },
            ].map((item) => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        // @ts-ignore
                        name: (!item.price ? 'Platform: ' : '') +
                            (0, lodash_1.capitalize)(item.integrationType),
                    },
                    // @ts-ignore
                    unit_amount: item.price * 100,
                },
                quantity: item.quantity,
            })),
            payment_intent_data: {
                transfer_group: orderId,
            },
        });
        return { url };
    }
    async subscribe(uniqueId, organizationId, userId, body, allowTrial) {
        const id = (0, make_is_1.makeId)(10);
        const priceData = pricing_1.pricing[body.billing];
        const org = await this._organizationService.getOrgById(organizationId);
        const customer = await this.createOrGetCustomer(org);
        const allProducts = await stripe.products.list({
            active: true,
            expand: ['data.prices'],
        });
        const findProduct = allProducts.data.find((product) => product.name.toUpperCase() === body.billing.toUpperCase()) ||
            (await stripe.products.create({
                active: true,
                name: body.billing,
            }));
        const pricesList = await stripe.prices.list({
            active: true,
            product: findProduct.id,
        });
        const findPrice = pricesList.data.find((p) => p?.recurring?.interval?.toLowerCase() ===
            (body.period === 'MONTHLY' ? 'month' : 'year') &&
            p?.unit_amount ===
                (body.period === 'MONTHLY'
                    ? priceData.month_price
                    : priceData.year_price) *
                    100) ||
            (await stripe.prices.create({
                active: true,
                product: findProduct.id,
                currency: 'usd',
                nickname: body.billing + ' ' + body.period,
                unit_amount: (body.period === 'MONTHLY'
                    ? priceData.month_price
                    : priceData.year_price) * 100,
                recurring: {
                    interval: body.period === 'MONTHLY' ? 'month' : 'year',
                },
            }));
        const getCurrentSubscriptions = await this._subscriptionService.getSubscription(organizationId);
        if (!getCurrentSubscriptions) {
            return this.createCheckoutSession(uniqueId, id, customer, body, findPrice.id, userId, allowTrial);
        }
        const currentUserSubscription = {
            data: (await stripe.subscriptions.list({
                customer,
                status: 'all',
            })).data.filter((f) => f.status === 'active' || f.status === 'trialing'),
        };
        try {
            await stripe.subscriptions.update(currentUserSubscription.data[0].id, {
                cancel_at_period_end: false,
                metadata: {
                    service: 'gitroom',
                    ...body,
                    userId,
                    id,
                    ud: uniqueId,
                },
                proration_behavior: 'always_invoice',
                items: [
                    {
                        id: currentUserSubscription.data[0].items.data[0].id,
                        price: findPrice.id,
                        quantity: 1,
                    },
                ],
            });
            return { id };
        }
        catch (err) {
            const { url } = await this.createBillingPortalLink(customer);
            return {
                portal: url,
            };
        }
    }
    async paymentSucceeded(event) {
        // get subscription from payment
        const subscription = await stripe.subscriptions.retrieve(event.data.object.subscription);
        const { userId, ud } = subscription.metadata;
        const user = await this._userService.getUserById(userId);
        if (user && user.ip && user.agent) {
            this._trackService.track(ud, user.ip, user.agent, track_enum_1.TrackEnum.Purchase, {
                value: event.data.object.amount_paid / 100,
            });
        }
        return { ok: true };
    }
    async updateOrder(event) {
        if (event?.data?.object?.metadata?.type !== 'marketplace') {
            return { ok: true };
        }
        const { orderId } = event?.data?.object?.metadata || { orderId: '' };
        if (!orderId) {
            return;
        }
        const charge = (await stripe.paymentIntents.retrieve(event.data.object.payment_intent)).latest_charge;
        const id = typeof charge === 'string' ? charge : charge?.id;
        await this._messagesService.changeOrderStatus(orderId, 'ACCEPTED', id);
        return { ok: true };
    }
    async payout(orderId, charge, account, price) {
        return stripe.transfers.create({
            amount: price * 100,
            currency: 'usd',
            destination: account,
            source_transaction: charge,
            transfer_group: orderId,
        });
    }
    async lifetimeDeal(organizationId, code) {
        const getCurrentSubscription = await this._subscriptionService.getSubscriptionByOrganizationId(organizationId);
        if (getCurrentSubscription && !getCurrentSubscription?.isLifetime) {
            throw new Error('You already have a non lifetime subscription');
        }
        try {
            const testCode = auth_service_1.AuthService.fixedDecryption(code);
            const findCode = await this._subscriptionService.getCode(testCode);
            if (findCode) {
                return {
                    success: false,
                };
            }
            const nextPackage = !getCurrentSubscription ? 'STANDARD' : 'PRO';
            const findPricing = pricing_1.pricing[nextPackage];
            await this._subscriptionService.createOrUpdateSubscription((0, make_is_1.makeId)(10), organizationId, getCurrentSubscription?.subscriptionTier === 'PRO'
                ? getCurrentSubscription.totalChannels + 5
                : findPricing.channel, nextPackage, 'MONTHLY', null, testCode, organizationId);
            return {
                success: true,
            };
        }
        catch (err) {
            console.log(err);
            return {
                success: false,
            };
        }
    }
};
exports.StripeService = StripeService;
exports.StripeService = StripeService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [subscription_service_1.SubscriptionService,
        organization_service_1.OrganizationService,
        users_service_1.UsersService,
        messages_service_1.MessagesService,
        track_service_1.TrackService])
], StripeService);


/***/ }),
/* 107 */
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),
/* 108 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrackService = void 0;
const tslib_1 = __webpack_require__(1);
const track_enum_1 = __webpack_require__(109);
const common_1 = __webpack_require__(5);
const facebook_nodejs_business_sdk_1 = __webpack_require__(110);
const crypto_1 = __webpack_require__(15);
const access_token = process.env.FACEBOOK_PIXEL_ACCESS_TOKEN;
const pixel_id = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL;
if (access_token && pixel_id) {
    facebook_nodejs_business_sdk_1.FacebookAdsApi.init(access_token || '');
}
let TrackService = class TrackService {
    hashValue(value) {
        return (0, crypto_1.createHash)('sha256').update(value).digest('hex');
    }
    track(uniqueId, ip, agent, tt, additional, fbclid, user) {
        if (!access_token || !pixel_id) {
            return;
        }
        // @ts-ignore
        const current_timestamp = Math.floor(new Date() / 1000);
        const userData = new facebook_nodejs_business_sdk_1.UserData();
        if (ip || user?.ip) {
            userData.setClientIpAddress(ip || user?.ip || '');
        }
        if (agent || user?.agent) {
            userData.setClientUserAgent(agent || user?.agent || '');
        }
        if (fbclid) {
            userData.setFbc(fbclid);
        }
        if (user && user.email) {
            userData.setEmail(this.hashValue(user.email));
        }
        let customData = null;
        if (additional?.value) {
            customData = new facebook_nodejs_business_sdk_1.CustomData();
            customData.setValue(additional.value).setCurrency('USD');
        }
        const serverEvent = new facebook_nodejs_business_sdk_1.ServerEvent()
            .setEventName(track_enum_1.TrackEnum[tt])
            .setEventTime(current_timestamp)
            .setActionSource('website');
        if (user && user.id) {
            serverEvent.setEventId(uniqueId || user.id);
        }
        if (userData) {
            serverEvent.setUserData(userData);
        }
        if (customData) {
            serverEvent.setCustomData(customData);
        }
        const eventsData = [serverEvent];
        const eventRequest = new facebook_nodejs_business_sdk_1.EventRequest(access_token, pixel_id).setEvents(eventsData);
        return eventRequest.execute();
    }
};
exports.TrackService = TrackService;
exports.TrackService = TrackService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], TrackService);


/***/ }),
/* 109 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrackEnum = void 0;
var TrackEnum;
(function (TrackEnum) {
    TrackEnum[TrackEnum["ViewContent"] = 0] = "ViewContent";
    TrackEnum[TrackEnum["CompleteRegistration"] = 1] = "CompleteRegistration";
    TrackEnum[TrackEnum["InitiateCheckout"] = 2] = "InitiateCheckout";
    TrackEnum[TrackEnum["StartTrial"] = 3] = "StartTrial";
    TrackEnum[TrackEnum["Purchase"] = 4] = "Purchase";
})(TrackEnum || (exports.TrackEnum = TrackEnum = {}));


/***/ }),
/* 110 */
/***/ ((module) => {

module.exports = require("facebook-nodejs-business-sdk");

/***/ }),
/* 111 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const media_repository_1 = __webpack_require__(112);
const openai_service_1 = __webpack_require__(113);
const subscription_service_1 = __webpack_require__(40);
let MediaService = class MediaService {
    constructor(_mediaRepository, _openAi, _subscriptionService) {
        this._mediaRepository = _mediaRepository;
        this._openAi = _openAi;
        this._subscriptionService = _subscriptionService;
    }
    async deleteMedia(org, id) {
        return this._mediaRepository.deleteMedia(org, id);
    }
    getMediaById(id) {
        return this._mediaRepository.getMediaById(id);
    }
    async generateImage(prompt, org, generatePromptFirst) {
        if (generatePromptFirst) {
            prompt = await this._openAi.generatePromptForPicture(prompt);
            console.log('Prompt:', prompt);
        }
        const image = await this._openAi.generateImage(prompt, !!generatePromptFirst);
        await this._subscriptionService.useCredit(org);
        return image;
    }
    saveFile(org, fileName, filePath) {
        return this._mediaRepository.saveFile(org, fileName, filePath);
    }
    getMedia(org, page) {
        return this._mediaRepository.getMedia(org, page);
    }
};
exports.MediaService = MediaService;
exports.MediaService = MediaService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [media_repository_1.MediaRepository,
        openai_service_1.OpenaiService,
        subscription_service_1.SubscriptionService])
], MediaService);


/***/ }),
/* 112 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaRepository = void 0;
const tslib_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(5);
let MediaRepository = class MediaRepository {
    constructor(_media) {
        this._media = _media;
    }
    saveFile(org, fileName, filePath) {
        return this._media.model.media.create({
            data: {
                organization: {
                    connect: {
                        id: org,
                    },
                },
                name: fileName,
                path: filePath,
            },
        });
    }
    getMediaById(id) {
        return this._media.model.media.findUnique({
            where: {
                id,
            },
        });
    }
    deleteMedia(org, id) {
        return this._media.model.media.update({
            where: {
                id,
                organizationId: org,
            },
            data: {
                deletedAt: new Date(),
            }
        });
    }
    async getMedia(org, page) {
        const pageNum = (page || 1) - 1;
        const query = {
            where: {
                organization: {
                    id: org,
                },
            },
        };
        const pages = pageNum === 0
            ? Math.ceil((await this._media.model.media.count(query)) / 28)
            : 0;
        const results = await this._media.model.media.findMany({
            where: {
                organizationId: org,
                deletedAt: null,
            },
            orderBy: {
                createdAt: 'desc',
            },
            skip: pageNum * 28,
            take: 28,
        });
        return {
            pages,
            results,
        };
    }
};
exports.MediaRepository = MediaRepository;
exports.MediaRepository = MediaRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaRepository])
], MediaRepository);


/***/ }),
/* 113 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenaiService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const openai_1 = tslib_1.__importDefault(__webpack_require__(114));
const lodash_1 = __webpack_require__(38);
const zod_1 = __webpack_require__(115);
const zod_2 = __webpack_require__(116);
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY || 'sk-proj-',
});
const PicturePrompt = zod_2.z.object({
    prompt: zod_2.z.string(),
});
let OpenaiService = class OpenaiService {
    async generateImage(prompt, isUrl) {
        const generate = (await openai.images.generate({
            prompt,
            response_format: isUrl ? 'url' : 'b64_json',
            model: 'dall-e-3',
        })).data[0];
        return isUrl ? generate.url : generate.b64_json;
    }
    async generatePromptForPicture(prompt) {
        return ((await openai.beta.chat.completions.parse({
            model: 'gpt-4o-2024-08-06',
            messages: [
                {
                    role: 'system',
                    content: `You are an assistant that take a description and style and generate a prompt that will be used later to generate images, make it a very long and descriptive explanation, and write a lot of things for the renderer like, if it${"'"}s realistic describe the camera`,
                },
                {
                    role: 'user',
                    content: `prompt: ${prompt}`,
                },
            ],
            response_format: (0, zod_1.zodResponseFormat)(PicturePrompt, 'picturePrompt'),
        })).choices[0].message.parsed?.prompt || '');
    }
    async generatePosts(content) {
        const posts = (await Promise.all([
            openai.chat.completions.create({
                messages: [
                    {
                        role: 'assistant',
                        content: 'Generate a Twitter post from the content without emojis in the following JSON format: { "post": string } put it in an array with one element',
                    },
                    {
                        role: 'user',
                        content: content,
                    },
                ],
                n: 5,
                temperature: 1,
                model: 'gpt-4o',
            }),
            openai.chat.completions.create({
                messages: [
                    {
                        role: 'assistant',
                        content: 'Generate a thread for social media in the following JSON format: Array<{ "post": string }> without emojis',
                    },
                    {
                        role: 'user',
                        content: content,
                    },
                ],
                n: 5,
                temperature: 1,
                model: 'gpt-4o',
            }),
        ])).flatMap((p) => p.choices);
        return (0, lodash_1.shuffle)(posts.map((choice) => {
            const { content } = choice.message;
            const start = content?.indexOf('[');
            const end = content?.lastIndexOf(']');
            try {
                return JSON.parse('[' +
                    content
                        ?.slice(start + 1, end)
                        .replace(/\n/g, ' ')
                        .replace(/ {2,}/g, ' ') +
                    ']');
            }
            catch (e) {
                return [];
            }
        }));
    }
    async extractWebsiteText(content) {
        const websiteContent = await openai.chat.completions.create({
            messages: [
                {
                    role: 'assistant',
                    content: 'You take a full website text, and extract only the article content',
                },
                {
                    role: 'user',
                    content,
                },
            ],
            model: 'gpt-4o',
        });
        const { content: articleContent } = websiteContent.choices[0].message;
        return this.generatePosts(articleContent);
    }
};
exports.OpenaiService = OpenaiService;
exports.OpenaiService = OpenaiService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], OpenaiService);


/***/ }),
/* 114 */
/***/ ((module) => {

module.exports = require("openai");

/***/ }),
/* 115 */
/***/ ((module) => {

module.exports = require("openai/helpers/zod");

/***/ }),
/* 116 */
/***/ ((module) => {

module.exports = require("zod");

/***/ }),
/* 117 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ShortLinkService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShortLinkService = void 0;
const tslib_1 = __webpack_require__(1);
const dub_1 = __webpack_require__(118);
const empty_1 = __webpack_require__(119);
const common_1 = __webpack_require__(5);
const short_io_1 = __webpack_require__(120);
const getProvider = () => {
    if (process.env.DUB_TOKEN) {
        return new dub_1.Dub();
    }
    if (process.env.SHORT_IO_SECRET_KEY) {
        return new short_io_1.ShortIo();
    }
    return new empty_1.Empty();
};
let ShortLinkService = ShortLinkService_1 = class ShortLinkService {
    askShortLinkedin(messages) {
        if (ShortLinkService_1.provider.shortLinkDomain === 'empty') {
            return false;
        }
        const mergeMessages = messages.join(' ');
        const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
        const urls = mergeMessages.match(urlRegex);
        if (!urls) {
            // No URLs found, return the original text
            return false;
        }
        return urls.some((url) => url.indexOf(ShortLinkService_1.provider.shortLinkDomain) === -1);
    }
    async convertTextToShortLinks(id, messages) {
        if (ShortLinkService_1.provider.shortLinkDomain === 'empty') {
            return messages;
        }
        const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
        return Promise.all(messages.map(async (text) => {
            const urls = text.match(urlRegex);
            if (!urls) {
                // No URLs found, return the original text
                return text;
            }
            const replacementMap = {};
            // Process each URL asynchronously
            await Promise.all(urls.map(async (url) => {
                if (url.indexOf(ShortLinkService_1.provider.shortLinkDomain) === -1) {
                    replacementMap[url] =
                        await ShortLinkService_1.provider.convertLinkToShortLink(id, url);
                }
                else {
                    replacementMap[url] = url; // Keep the original URL if it matches the prefix
                }
            }));
            // Replace the URLs in the text with their replacements
            return text.replace(urlRegex, (url) => replacementMap[url]);
        }));
    }
    async convertShortLinksToLinks(messages) {
        if (ShortLinkService_1.provider.shortLinkDomain === 'empty') {
            return messages;
        }
        const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
        return Promise.all(messages.map(async (text) => {
            const urls = text.match(urlRegex);
            if (!urls) {
                // No URLs found, return the original text
                return text;
            }
            const replacementMap = {};
            // Process each URL asynchronously
            await Promise.all(urls.map(async (url) => {
                if (url.indexOf(ShortLinkService_1.provider.shortLinkDomain) > -1) {
                    replacementMap[url] =
                        await ShortLinkService_1.provider.convertShortLinkToLink(url);
                }
                else {
                    replacementMap[url] = url; // Keep the original URL if it matches the prefix
                }
            }));
            // Replace the URLs in the text with their replacements
            return text.replace(urlRegex, (url) => replacementMap[url]);
        }));
    }
    async getStatistics(messages) {
        if (ShortLinkService_1.provider.shortLinkDomain === 'empty') {
            return [];
        }
        const mergeMessages = messages.join(' ');
        const regex = new RegExp(`https?://${ShortLinkService_1.provider.shortLinkDomain.replace('.', '\\.')}/[^\\s]*`, 'g');
        const urls = mergeMessages.match(regex);
        if (!urls) {
            // No URLs found, return the original text
            return [];
        }
        return ShortLinkService_1.provider.linksStatistics(urls);
    }
    async getAllLinks(id) {
        if (ShortLinkService_1.provider.shortLinkDomain === 'empty') {
            return [];
        }
        return ShortLinkService_1.provider.getAllLinksStatistics(id, 1);
    }
};
exports.ShortLinkService = ShortLinkService;
ShortLinkService.provider = getProvider();
exports.ShortLinkService = ShortLinkService = ShortLinkService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ShortLinkService);


/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dub = void 0;
const options = {
    headers: {
        Authorization: `Bearer ${process.env.DUB_TOKEN}`,
        'Content-Type': 'application/json',
    },
};
class Dub {
    constructor() {
        this.shortLinkDomain = 'dub.sh';
    }
    async linksStatistics(links) {
        return Promise.all(links.map(async (link) => {
            const response = await (await fetch(`https://api.dub.co/links/info?domain=${this.shortLinkDomain}&key=${link.split('/').pop()}`, options)).json();
            return {
                short: link,
                original: response.url,
                clicks: response.clicks,
            };
        }));
    }
    async convertLinkToShortLink(id, link) {
        return (await (await fetch(`https://api.dub.co/links`, {
            ...options,
            method: 'POST',
            body: JSON.stringify({
                url: link,
                tenantId: id,
                domain: this.shortLinkDomain,
            }),
        })).json()).shortLink;
    }
    async convertShortLinkToLink(shortLink) {
        return await (await (await fetch(`https://api.dub.co/links/info?domain=${shortLink}`, options)).json()).url;
    }
    // recursive functions that gets maximum 100 links per request if there are less than 100 links stop the recursion
    async getAllLinksStatistics(id, page = 1) {
        const response = await (await fetch(`https://api.dub.co/links?tenantId=${id}&page=${page}&pageSize=100`, options)).json();
        const mapLinks = response.links.map((link) => ({
            short: link,
            original: response.url,
            clicks: response.clicks,
        }));
        if (mapLinks.length < 100) {
            return mapLinks;
        }
        return [...mapLinks, ...(await this.getAllLinksStatistics(id, page + 1))];
    }
}
exports.Dub = Dub;


/***/ }),
/* 119 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Empty = void 0;
class Empty {
    constructor() {
        this.shortLinkDomain = 'empty';
    }
    async linksStatistics(links) {
        return [];
    }
    async convertLinkToShortLink(link) {
        return '';
    }
    async convertShortLinkToLink(shortLink) {
        return '';
    }
    getAllLinksStatistics(id, page) {
        return Promise.resolve([]);
    }
}
exports.Empty = Empty;


/***/ }),
/* 120 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShortIo = void 0;
const options = {
    headers: {
        Authorization: `Bearer ${process.env.SHORT_IO_SECRET_KEY}`,
        'Content-Type': 'application/json',
    },
};
class ShortIo {
    constructor() {
        this.shortLinkDomain = 'short.io';
    }
    async linksStatistics(links) {
        return Promise.all(links.map(async (link) => {
            const url = `https://api.short.io/links/expand?domain=${this.shortLinkDomain}&path=${link.split('/').pop()}`;
            const response = await (fetch(url, options)
                .then(res => res.json()));
            const linkStatisticsUrl = `https://statistics.short.io/statistics/link/${response.id}?period=last30&tz=UTC`;
            const statResponse = await (fetch(linkStatisticsUrl, options).then((res) => res.json()));
            return {
                short: response.shortURL,
                original: response.originalURL,
                clicks: statResponse.totalClicks,
            };
        }));
    }
    async convertLinkToShortLink(id, link) {
        const response = await fetch(`https://api.short.io/links`, {
            ...options,
            method: 'POST',
            body: JSON.stringify({
                url: link,
                tenantId: id,
                domain: this.shortLinkDomain,
                originalURL: link
            }),
        }).then((res) => res.json());
        return response.shortURL;
    }
    async convertShortLinkToLink(shortLink) {
        return await (await (await fetch(`https://api.short.io/links/expand?domain=${this.shortLinkDomain}&path=${shortLink.split('/').pop()}`, options)).json()).originalURL;
    }
    // recursive functions that gets maximum 100 links per request if there are less than 100 links stop the recursion
    async getAllLinksStatistics(id, page = 1) {
        const response = await (await fetch(`https://api.short.io/api/links?domain_id=${id}&limit=150`, options)).json();
        const mapLinks = response.links.map(async (link) => {
            const linkStatisticsUrl = `https://statistics.short.io/statistics/link/${response.id}?period=last30&tz=UTC`;
            const statResponse = await (fetch(linkStatisticsUrl, options).then((res) => res.json()));
            return {
                short: link,
                original: response.url,
                clicks: statResponse.totalClicks,
            };
        });
        if (mapLinks.length < 100) {
            return mapLinks;
        }
        return [...mapLinks, ...(await this.getAllLinksStatistics(id, page + 1))];
    }
}
exports.ShortIo = ShortIo;


/***/ }),
/* 121 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebhooksService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const webhooks_repository_1 = __webpack_require__(122);
const redis_service_1 = __webpack_require__(29);
const client_1 = __webpack_require__(26);
const posts_repository_1 = __webpack_require__(100);
let WebhooksService = class WebhooksService {
    constructor(_webhooksRepository, _postsRepository, _workerServiceProducer) {
        this._webhooksRepository = _webhooksRepository;
        this._postsRepository = _postsRepository;
        this._workerServiceProducer = _workerServiceProducer;
    }
    getTotal(orgId) {
        return this._webhooksRepository.getTotal(orgId);
    }
    getWebhooks(orgId) {
        return this._webhooksRepository.getWebhooks(orgId);
    }
    createWebhook(orgId, body) {
        return this._webhooksRepository.createWebhook(orgId, body);
    }
    deleteWebhook(orgId, id) {
        return this._webhooksRepository.deleteWebhook(orgId, id);
    }
    async digestWebhooks(orgId, since) {
        const date = new Date().toISOString();
        await redis_service_1.ioRedis.watch('webhook_' + orgId);
        const value = await redis_service_1.ioRedis.get('webhook_' + orgId);
        if (value) {
            return;
        }
        await redis_service_1.ioRedis
            .multi()
            .set('webhook_' + orgId, date)
            .expire('webhook_' + orgId, 60)
            .exec();
        this._workerServiceProducer.emit('webhooks', {
            id: 'digest_' + orgId,
            options: {
                delay: 60000,
            },
            payload: {
                org: orgId,
                since,
            },
        });
    }
    async fireWebhooks(orgId, since) {
        const list = await this._postsRepository.getPostsSince(orgId, since);
        const webhooks = await this._webhooksRepository.getWebhooks(orgId);
        const sendList = [];
        for (const webhook of webhooks) {
            const toSend = [];
            if (webhook.integrations.length === 0) {
                toSend.push(...list);
            }
            else {
                toSend.push(...list.filter((post) => webhook.integrations.some((i) => i.integration.id === post.integration.id)));
            }
            if (toSend.length) {
                sendList.push({
                    url: webhook.url,
                    data: toSend,
                });
            }
        }
        return Promise.all(sendList.map(async (s) => {
            try {
                await fetch(s.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(s.data),
                });
            }
            catch (e) {
                /**empty**/
            }
        }));
    }
};
exports.WebhooksService = WebhooksService;
exports.WebhooksService = WebhooksService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [webhooks_repository_1.WebhooksRepository,
        posts_repository_1.PostsRepository,
        client_1.BullMqClient])
], WebhooksService);


/***/ }),
/* 122 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebhooksRepository = void 0;
const tslib_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(5);
const uuid_1 = __webpack_require__(31);
let WebhooksRepository = class WebhooksRepository {
    constructor(_webhooks) {
        this._webhooks = _webhooks;
    }
    getTotal(orgId) {
        return this._webhooks.model.webhooks.count({
            where: {
                organizationId: orgId,
                deletedAt: null,
            },
        });
    }
    getWebhooks(orgId) {
        return this._webhooks.model.webhooks.findMany({
            where: {
                organizationId: orgId,
                deletedAt: null,
            },
            include: {
                integrations: {
                    select: {
                        integration: {
                            select: {
                                id: true,
                                picture: true,
                                name: true,
                            },
                        },
                    },
                },
            },
        });
    }
    deleteWebhook(orgId, id) {
        return this._webhooks.model.webhooks.update({
            where: {
                id,
                organizationId: orgId,
            },
            data: {
                deletedAt: new Date(),
            },
        });
    }
    async createWebhook(orgId, body) {
        const { id } = await this._webhooks.model.webhooks.upsert({
            where: {
                id: body.id || (0, uuid_1.v4)(),
                organizationId: orgId,
            },
            create: {
                organizationId: orgId,
                url: body.url,
                name: body.name,
            },
            update: {
                url: body.url,
                name: body.name,
            },
        });
        await this._webhooks.model.webhooks.update({
            where: {
                id,
                organizationId: orgId,
            },
            data: {
                integrations: {
                    deleteMany: {},
                    create: body.integrations.map((integration) => ({
                        integrationId: integration.id,
                    })),
                },
            },
        });
        return { id };
    }
};
exports.WebhooksRepository = WebhooksRepository;
exports.WebhooksRepository = WebhooksRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaRepository])
], WebhooksRepository);


/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemUserRepository = void 0;
const tslib_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(5);
let ItemUserRepository = class ItemUserRepository {
    constructor(_itemUser) {
        this._itemUser = _itemUser;
    }
    addOrRemoveItem(add, userId, item) {
        if (!add) {
            return this._itemUser.model.itemUser.deleteMany({
                where: {
                    user: {
                        id: userId,
                    },
                    key: item,
                },
            });
        }
        return this._itemUser.model.itemUser.create({
            data: {
                key: item,
                user: {
                    connect: {
                        id: userId,
                    },
                },
            },
        });
    }
    getItems(userId) {
        return this._itemUser.model.itemUser.findMany({
            where: {
                user: {
                    id: userId,
                },
            },
        });
    }
};
exports.ItemUserRepository = ItemUserRepository;
exports.ItemUserRepository = ItemUserRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaRepository])
], ItemUserRepository);


/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemUserService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const item_user_repository_1 = __webpack_require__(123);
let ItemUserService = class ItemUserService {
    constructor(_itemUserRepository) {
        this._itemUserRepository = _itemUserRepository;
    }
    addOrRemoveItem(add, userId, item) {
        return this._itemUserRepository.addOrRemoveItem(add, userId, item);
    }
    getItems(userId) {
        return this._itemUserRepository.getItems(userId);
    }
};
exports.ItemUserService = ItemUserService;
exports.ItemUserService = ItemUserService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [item_user_repository_1.ItemUserRepository])
], ItemUserService);


/***/ }),
/* 125 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExtractContentService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const jsdom_1 = __webpack_require__(126);
function findDepth(element) {
    let depth = 0;
    let elementer = element;
    while (elementer.parentNode) {
        depth++;
        // @ts-ignore
        elementer = elementer.parentNode;
    }
    return depth;
}
let ExtractContentService = class ExtractContentService {
    async extractContent(url) {
        const load = await (await fetch(url)).text();
        const dom = new jsdom_1.JSDOM(load);
        // only element that has a title
        const allTitles = Array.from(dom.window.document.querySelectorAll('*'))
            .filter((f) => {
            return (f.querySelector('h1') ||
                f.querySelector('h2') ||
                f.querySelector('h3') ||
                f.querySelector('h4') ||
                f.querySelector('h5') ||
                f.querySelector('h6'));
        })
            .reverse();
        const findTheOneWithMostTitles = allTitles.reduce((all, current) => {
            const depth = findDepth(current);
            const calculate = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce((total, tag) => {
                if (current.querySelector(tag)) {
                    return total + 1;
                }
                return total;
            }, 0);
            if (calculate > all.total) {
                return { total: calculate, depth, element: current };
            }
            if (depth > all.depth) {
                return { total: calculate, depth, element: current };
            }
            return all;
        }, { total: 0, depth: 0, element: null });
        return findTheOneWithMostTitles?.element?.textContent?.replace(/\n/g, ' ').replace(/ {2,}/g, ' ');
        //
        // const allElements = Array.from(
        //   dom.window.document.querySelectorAll('*')
        // ).filter((f) => f.tagName !== 'SCRIPT');
        // const findIndex = allElements.findIndex((element) => {
        //   return (
        //     ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(
        //       element.tagName.toLowerCase()
        //     ) > -1
        //   );
        // });
        //
        // if (!findIndex) {
        //   return false;
        // }
        //
        // return allElements
        //   .slice(findIndex)
        //   .map((element) => element.textContent)
        //   .filter((f) => {
        //     const trim = f?.trim();
        //     return (trim?.length || 0) > 0 && trim !== '\n';
        //   })
        //   .map((f) => f?.trim())
        //   .join('')
        //   .replace(/\n/g, ' ')
        //   .replace(/ {2,}/g, ' ');
    }
};
exports.ExtractContentService = ExtractContentService;
exports.ExtractContentService = ExtractContentService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ExtractContentService);


/***/ }),
/* 126 */
/***/ ((module) => {

module.exports = require("jsdom");

/***/ }),
/* 127 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgenciesService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const agencies_repository_1 = __webpack_require__(128);
const notification_service_1 = __webpack_require__(18);
let AgenciesService = class AgenciesService {
    constructor(_agenciesRepository, _notificationService) {
        this._agenciesRepository = _agenciesRepository;
        this._notificationService = _notificationService;
    }
    getAgencyByUser(user) {
        return this._agenciesRepository.getAgencyByUser(user);
    }
    getCount() {
        return this._agenciesRepository.getCount();
    }
    getAllAgencies() {
        return this._agenciesRepository.getAllAgencies();
    }
    getAllAgenciesSlug() {
        return this._agenciesRepository.getAllAgenciesSlug();
    }
    getAgencyInformation(agency) {
        return this._agenciesRepository.getAgencyInformation(agency);
    }
    async approveOrDecline(email, action, id) {
        await this._agenciesRepository.approveOrDecline(action, id);
        const agency = await this._agenciesRepository.getAgencyById(id);
        if (action === 'approve') {
            await this._notificationService.sendEmail(agency?.user?.email, 'Your Agency has been approved and added to Postiz 🚀', `
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Agency has been approved and added to Postiz 🚀</title>
</head>

<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
  Hi there, <br /><br />
  Your agency ${agency?.name} has been added to Postiz!<br />
  You can <a href="https://postiz.com/agencies/${agency?.slug}">check it here</a><br />
  It will appear on the main agency of Postiz in the next 24 hours.<br /><br />
</body>
</html>`);
            return;
        }
        await this._notificationService.sendEmail(agency?.user?.email, 'Your Agency has been declined 😔', `
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Agency has been declined</title>
</head>

<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
  Hi there, <br /><br />
  Your agency ${agency?.name} has been declined to Postiz!<br />
  If you think we have made a mistake, please reply to this email and let us know
</body>
</html>`);
        return;
    }
    async createAgency(user, body) {
        const agency = await this._agenciesRepository.createAgency(user, body);
        await this._notificationService.sendEmail('nevo@postiz.com', 'New agency created', `
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
</head>

<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
    <table align="center" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; margin-top: 20px; border: 1px solid #ddd;">
        <tr>
            <td style="padding: 0 20px 20px 20px; text-align: center;">
                <!-- Website -->
                <a href="${body.website}" style="text-decoration: none; color: #007bff;">${body.website}</a>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; text-align: center;">
                <!-- Social Media Links -->
                <p style="margin: 10px 0; font-size: 16px;">
                    Social Medias:
                    <a href="${body.facebook}" style="margin: 0 10px; text-decoration: none; color: #007bff;">${body.facebook}</a><br />
                    <a href="${body.instagram}" style="margin: 0 10px; text-decoration: none; color: #007bff;">${body.instagram}</a><br />
                    <a href="${body.twitter}" style="margin: 0 10px; text-decoration: none; color: #007bff;">${body.twitter}</a><br />
                    <a href="${body.linkedIn}" style="margin: 0 10px; text-decoration: none; color: #007bff;">${body.linkedIn}</a><br />
                    <a href="${body.youtube}" style="margin: 0 10px; text-decoration: none; color: #007bff;">${body.youtube}</a><br />
                    <a href="${body.tiktok}" style="margin: 0 10px; text-decoration: none; color: #007bff;">${body.tiktok}</a>
                </p>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <!-- Short Description -->
                <h2 style="text-align: center; color: #333;">Logo</h2>
                <p style="text-align: center; color: #555; font-size: 16px;">
                  <img src="${body.logo.path}" width="60" height="60" />
                </p>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <!-- Short Description -->
                <h2 style="text-align: center; color: #333;">Name</h2>
                <p style="text-align: center; color: #555; font-size: 16px;">${body.name}</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <!-- Short Description -->
                <h2 style="text-align: center; color: #333;">Short Description</h2>
                <p style="text-align: center; color: #555; font-size: 16px;">${body.shortDescription}</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <!-- Description -->
                <h2 style="text-align: center; color: #333;">Description</h2>
                <p style="text-align: center; color: #555; font-size: 16px;">${body.description}</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <!-- Niches -->
                <h2 style="text-align: center; color: #333;">Niches</h2>
                <p style="text-align: center; color: #555; font-size: 16px;">${body.niches.join(',')}</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; text-align: center; background-color: #000;">
                <a href="https://postiz.com/agencies/action/approve/${agency.id}" style="margin: 0 10px; text-decoration: none; color: #007bff;">To approve click here</a><br /><br /><br />
                <a href="https://postiz.com/agencies/action/decline/${agency.id}" style="margin: 0 10px; text-decoration: none; color: #007bff;">To decline click here</a><br /><br /><br />
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; text-align: center; background-color: #f4f4f4;">
                <p style="color: #777; font-size: 14px;">&copy; 2024 Your Gitroom Limited All rights reserved.</p>
            </td>
        </tr>
    </table>
</body>

</html>
    `);
        return agency;
    }
};
exports.AgenciesService = AgenciesService;
exports.AgenciesService = AgenciesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [agencies_repository_1.AgenciesRepository,
        notification_service_1.NotificationService])
], AgenciesService);


/***/ }),
/* 128 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgenciesRepository = void 0;
const tslib_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(5);
let AgenciesRepository = class AgenciesRepository {
    constructor(_socialMediaAgencies, _socialMediaAgenciesNiche) {
        this._socialMediaAgencies = _socialMediaAgencies;
        this._socialMediaAgenciesNiche = _socialMediaAgenciesNiche;
    }
    getAllAgencies() {
        return this._socialMediaAgencies.model.socialMediaAgency.findMany({
            where: {
                deletedAt: null,
                approved: true,
            },
            include: {
                logo: true,
                niches: true,
            },
            orderBy: {
                createdAt: 'desc',
            }
        });
    }
    getCount() {
        return this._socialMediaAgencies.model.socialMediaAgency.count({
            where: {
                deletedAt: null,
                approved: true,
            },
        });
    }
    getAllAgenciesSlug() {
        return this._socialMediaAgencies.model.socialMediaAgency.findMany({
            where: {
                deletedAt: null,
                approved: true,
            },
            select: {
                slug: true,
            },
        });
    }
    approveOrDecline(action, id) {
        return this._socialMediaAgencies.model.socialMediaAgency.update({
            where: {
                id,
            },
            data: {
                approved: action === 'approve',
            },
        });
    }
    getAgencyById(id) {
        return this._socialMediaAgencies.model.socialMediaAgency.findFirst({
            where: {
                id,
                deletedAt: null,
                approved: true,
            },
            include: {
                logo: true,
                niches: true,
                user: true,
            },
        });
    }
    getAgencyInformation(agency) {
        return this._socialMediaAgencies.model.socialMediaAgency.findFirst({
            where: {
                slug: agency,
                deletedAt: null,
                approved: true,
            },
            include: {
                logo: true,
                niches: true,
            },
        });
    }
    getAgencyByUser(user) {
        return this._socialMediaAgencies.model.socialMediaAgency.findFirst({
            where: {
                userId: user.id,
                deletedAt: null,
            },
            include: {
                logo: true,
                niches: true,
            },
        });
    }
    async createAgency(user, body) {
        const insertAgency = await this._socialMediaAgencies.model.socialMediaAgency.upsert({
            where: {
                userId: user.id,
            },
            update: {
                userId: user.id,
                name: body.name,
                website: body.website,
                facebook: body.facebook,
                instagram: body.instagram,
                twitter: body.twitter,
                linkedIn: body.linkedIn,
                youtube: body.youtube,
                tiktok: body.tiktok,
                logoId: body.logo.id,
                shortDescription: body.shortDescription,
                description: body.description,
                approved: false,
            },
            create: {
                userId: user.id,
                name: body.name,
                website: body.website,
                facebook: body.facebook,
                instagram: body.instagram,
                twitter: body.twitter,
                linkedIn: body.linkedIn,
                youtube: body.youtube,
                tiktok: body.tiktok,
                logoId: body.logo.id,
                shortDescription: body.shortDescription,
                description: body.description,
                slug: body.name.toLowerCase().replace(/ /g, '-'),
                approved: false,
            },
            select: {
                id: true,
            },
        });
        await this._socialMediaAgenciesNiche.model.socialMediaAgencyNiche.deleteMany({
            where: {
                agencyId: insertAgency.id,
                niche: {
                    notIn: body.niches,
                },
            },
        });
        const currentNiche = await this._socialMediaAgenciesNiche.model.socialMediaAgencyNiche.findMany({
            where: {
                agencyId: insertAgency.id,
            },
            select: {
                niche: true,
            },
        });
        const addNewNiche = body.niches.filter((n) => !currentNiche.some((c) => c.niche === n));
        await this._socialMediaAgenciesNiche.model.socialMediaAgencyNiche.createMany({
            data: addNewNiche.map((n) => ({
                agencyId: insertAgency.id,
                niche: n,
            })),
        });
        return insertAgency;
    }
};
exports.AgenciesRepository = AgenciesRepository;
exports.AgenciesRepository = AgenciesRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaRepository,
        prisma_service_1.PrismaRepository])
], AgenciesRepository);


/***/ }),
/* 129 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignatureRepository = void 0;
const tslib_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(5);
const uuid_1 = __webpack_require__(31);
let SignatureRepository = class SignatureRepository {
    constructor(_signatures) {
        this._signatures = _signatures;
    }
    getSignaturesByOrgId(orgId) {
        return this._signatures.model.signatures.findMany({
            where: { organizationId: orgId, deletedAt: null },
        });
    }
    getDefaultSignature(orgId) {
        return this._signatures.model.signatures.findFirst({
            where: { organizationId: orgId, autoAdd: true, deletedAt: null },
        });
    }
    async createOrUpdateSignature(orgId, signature, id) {
        const values = {
            organizationId: orgId,
            content: signature.content,
            autoAdd: signature.autoAdd,
        };
        const { id: updatedId } = await this._signatures.model.signatures.upsert({
            where: { id: id || (0, uuid_1.v4)(), organizationId: orgId },
            update: values,
            create: values,
        });
        if (values.autoAdd) {
            await this._signatures.model.signatures.updateMany({
                where: { organizationId: orgId, id: { not: updatedId } },
                data: { autoAdd: false },
            });
        }
        return { id: updatedId };
    }
};
exports.SignatureRepository = SignatureRepository;
exports.SignatureRepository = SignatureRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaRepository])
], SignatureRepository);


/***/ }),
/* 130 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignatureService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const signature_repository_1 = __webpack_require__(129);
let SignatureService = class SignatureService {
    constructor(_signatureRepository) {
        this._signatureRepository = _signatureRepository;
    }
    getSignaturesByOrgId(orgId) {
        return this._signatureRepository.getSignaturesByOrgId(orgId);
    }
    getDefaultSignature(orgId) {
        return this._signatureRepository.getDefaultSignature(orgId);
    }
    createOrUpdateSignature(orgId, signature, id) {
        return this._signatureRepository.createOrUpdateSignature(orgId, signature, id);
    }
};
exports.SignatureService = SignatureService;
exports.SignatureService = SignatureService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [signature_repository_1.SignatureRepository])
], SignatureService);


/***/ }),
/* 131 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const auth_controller_1 = __webpack_require__(132);
const auth_service_1 = __webpack_require__(136);
const users_controller_1 = __webpack_require__(151);
const auth_middleware_1 = __webpack_require__(160);
const stripe_controller_1 = __webpack_require__(161);
const stripe_service_1 = __webpack_require__(106);
const analytics_controller_1 = __webpack_require__(163);
const permissions_guard_1 = __webpack_require__(165);
const permissions_service_1 = __webpack_require__(155);
const integrations_controller_1 = __webpack_require__(167);
const integration_manager_1 = __webpack_require__(55);
const settings_controller_1 = __webpack_require__(175);
const posts_controller_1 = __webpack_require__(177);
const media_controller_1 = __webpack_require__(202);
const upload_module_1 = __webpack_require__(207);
const billing_controller_1 = __webpack_require__(208);
const notifications_controller_1 = __webpack_require__(211);
const marketplace_controller_1 = __webpack_require__(212);
const messages_controller_1 = __webpack_require__(219);
const openai_service_1 = __webpack_require__(113);
const extract_content_service_1 = __webpack_require__(125);
const codes_service_1 = __webpack_require__(162);
const copilot_controller_1 = __webpack_require__(221);
const agencies_controller_1 = __webpack_require__(223);
const public_controller_1 = __webpack_require__(225);
const root_controller_1 = __webpack_require__(229);
const track_service_1 = __webpack_require__(108);
const short_link_service_1 = __webpack_require__(117);
const nowpayments_1 = __webpack_require__(210);
const webhooks_controller_1 = __webpack_require__(230);
const signature_controller_1 = __webpack_require__(232);
const authenticatedController = [
    users_controller_1.UsersController,
    analytics_controller_1.AnalyticsController,
    integrations_controller_1.IntegrationsController,
    settings_controller_1.SettingsController,
    posts_controller_1.PostsController,
    media_controller_1.MediaController,
    billing_controller_1.BillingController,
    notifications_controller_1.NotificationsController,
    marketplace_controller_1.MarketplaceController,
    messages_controller_1.MessagesController,
    copilot_controller_1.CopilotController,
    agencies_controller_1.AgenciesController,
    webhooks_controller_1.WebhookController,
    signature_controller_1.SignatureController,
];
let ApiModule = class ApiModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes(...authenticatedController);
    }
};
exports.ApiModule = ApiModule;
exports.ApiModule = ApiModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [upload_module_1.UploadModule],
        controllers: [
            root_controller_1.RootController,
            stripe_controller_1.StripeController,
            auth_controller_1.AuthController,
            public_controller_1.PublicController,
            ...authenticatedController,
        ],
        providers: [
            auth_service_1.AuthService,
            stripe_service_1.StripeService,
            openai_service_1.OpenaiService,
            extract_content_service_1.ExtractContentService,
            auth_middleware_1.AuthMiddleware,
            permissions_guard_1.PoliciesGuard,
            permissions_service_1.PermissionsService,
            codes_service_1.CodesService,
            integration_manager_1.IntegrationManager,
            track_service_1.TrackService,
            short_link_service_1.ShortLinkService,
            nowpayments_1.Nowpayments,
        ],
        get exports() {
            return [...this.imports, ...this.providers];
        },
    })
], ApiModule);


/***/ }),
/* 132 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const create_org_user_dto_1 = __webpack_require__(133);
const login_user_dto_1 = __webpack_require__(135);
const auth_service_1 = __webpack_require__(136);
const forgot_return_password_dto_1 = __webpack_require__(145);
const forgot_password_dto_1 = __webpack_require__(146);
const swagger_1 = __webpack_require__(3);
const subdomain_management_1 = __webpack_require__(147);
const email_service_1 = __webpack_require__(20);
const nestjs_real_ip_1 = __webpack_require__(149);
const user_agent_1 = __webpack_require__(150);
let AuthController = class AuthController {
    constructor(_authService, _emailService) {
        this._authService = _authService;
        this._emailService = _emailService;
    }
    async canRegister() {
        return { register: await this._authService.canRegister() };
    }
    async register(req, body, response, ip, userAgent) {
        try {
            const getOrgFromCookie = this._authService.getOrgFromCookie(req?.cookies?.org);
            const { jwt, addedOrg } = await this._authService.routeAuth(body.provider, body, ip, userAgent, getOrgFromCookie);
            const activationRequired = body.provider === 'LOCAL' && this._emailService.hasProvider();
            if (activationRequired) {
                response.header('activate', 'true');
                response.status(200).json({ activate: true });
                return;
            }
            response.cookie('auth', jwt, {
                domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
                ...(!process.env.NOT_SECURED
                    ? {
                        secure: true,
                        httpOnly: true,
                        sameSite: 'none',
                    }
                    : {}),
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
            });
            if (process.env.NOT_SECURED) {
                response.header('auth', jwt);
            }
            if (typeof addedOrg !== 'boolean' && addedOrg?.organizationId) {
                response.cookie('showorg', addedOrg.organizationId, {
                    domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
                    ...(!process.env.NOT_SECURED
                        ? {
                            secure: true,
                            httpOnly: true,
                            sameSite: 'none',
                        }
                        : {}),
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
                });
                if (process.env.NOT_SECURED) {
                    response.header('showorg', addedOrg.organizationId);
                }
            }
            response.header('onboarding', 'true');
            response.status(200).json({
                register: true,
            });
        }
        catch (e) {
            response.status(400).send(e.message);
        }
    }
    async login(req, body, response, ip, userAgent) {
        try {
            const getOrgFromCookie = this._authService.getOrgFromCookie(req?.cookies?.org);
            const { jwt, addedOrg } = await this._authService.routeAuth(body.provider, body, ip, userAgent, getOrgFromCookie);
            response.cookie('auth', jwt, {
                domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
                ...(!process.env.NOT_SECURED
                    ? {
                        secure: true,
                        httpOnly: true,
                        sameSite: 'none',
                    }
                    : {}),
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
            });
            if (process.env.NOT_SECURED) {
                response.header('auth', jwt);
            }
            if (typeof addedOrg !== 'boolean' && addedOrg?.organizationId) {
                response.cookie('showorg', addedOrg.organizationId, {
                    domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
                    ...(!process.env.NOT_SECURED
                        ? {
                            secure: true,
                            httpOnly: true,
                            sameSite: 'none',
                        }
                        : {}),
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
                });
                if (process.env.NOT_SECURED) {
                    response.header('showorg', addedOrg.organizationId);
                }
            }
            response.header('reload', 'true');
            response.status(200).json({
                login: true,
            });
        }
        catch (e) {
            response.status(400).send(e.message);
        }
    }
    async forgot(body) {
        try {
            await this._authService.forgot(body.email);
            return {
                forgot: true,
            };
        }
        catch (e) {
            return {
                forgot: false,
            };
        }
    }
    async forgotReturn(body) {
        const reset = await this._authService.forgotReturn(body);
        return {
            reset: !!reset,
        };
    }
    async oauthLink(provider, query) {
        return this._authService.oauthLink(provider, query);
    }
    async activate(code, response) {
        const activate = await this._authService.activate(code);
        if (!activate) {
            return response.status(200).send({ can: false });
        }
        response.cookie('auth', activate, {
            domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
            ...(!process.env.NOT_SECURED
                ? {
                    secure: true,
                    httpOnly: true,
                    sameSite: 'none',
                }
                : {}),
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        });
        if (process.env.NOT_SECURED) {
            response.header('auth', activate);
        }
        response.header('onboarding', 'true');
        return response.status(200).send({ can: true });
    }
    async oauthExists(code, provider, response) {
        const { jwt, token } = await this._authService.checkExists(provider, code);
        if (token) {
            return response.json({ token });
        }
        response.cookie('auth', jwt, {
            domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
            ...(!process.env.NOT_SECURED
                ? {
                    secure: true,
                    httpOnly: true,
                    sameSite: 'none',
                }
                : {}),
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        });
        if (process.env.NOT_SECURED) {
            response.header('auth', jwt);
        }
        response.header('reload', 'true');
        response.status(200).json({
            login: true,
        });
    }
};
exports.AuthController = AuthController;
tslib_1.__decorate([
    (0, common_1.Get)('/can-register'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "canRegister", null);
tslib_1.__decorate([
    (0, common_1.Post)('/register'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__param(3, (0, nestjs_real_ip_1.RealIP)()),
    tslib_1.__param(4, (0, user_agent_1.UserAgent)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, create_org_user_dto_1.CreateOrgUserDto, Object, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
tslib_1.__decorate([
    (0, common_1.Post)('/login'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__param(3, (0, nestjs_real_ip_1.RealIP)()),
    tslib_1.__param(4, (0, user_agent_1.UserAgent)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, login_user_dto_1.LoginUserDto, Object, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.Post)('/forgot'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [forgot_password_dto_1.ForgotPasswordDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "forgot", null);
tslib_1.__decorate([
    (0, common_1.Post)('/forgot-return'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [forgot_return_password_dto_1.ForgotReturnPasswordDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "forgotReturn", null);
tslib_1.__decorate([
    (0, common_1.Get)('/oauth/:provider'),
    openapi.ApiResponse({ status: 200, type: String }),
    tslib_1.__param(0, (0, common_1.Param)('provider')),
    tslib_1.__param(1, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "oauthLink", null);
tslib_1.__decorate([
    (0, common_1.Post)('/activate'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Body)('code')),
    tslib_1.__param(1, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "activate", null);
tslib_1.__decorate([
    (0, common_1.Post)('/oauth/:provider/exists'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Body)('code')),
    tslib_1.__param(1, (0, common_1.Param)('provider')),
    tslib_1.__param(2, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "oauthExists", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('/auth'),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService,
        email_service_1.EmailService])
], AuthController);


/***/ }),
/* 133 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateOrgUserDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const client_1 = __webpack_require__(10);
class CreateOrgUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { password: { required: true, type: () => String, minLength: 3, maxLength: 64 }, provider: { required: true, type: () => Object }, providerToken: { required: true, type: () => String }, email: { required: true, type: () => String }, company: { required: true, type: () => String, minLength: 3, maxLength: 128 } };
    }
}
exports.CreateOrgUserDto = CreateOrgUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(64),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateIf)((o) => !o.providerToken),
    tslib_1.__metadata("design:type", String)
], CreateOrgUserDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], CreateOrgUserDto.prototype, "provider", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateIf)((o) => !o.password),
    tslib_1.__metadata("design:type", String)
], CreateOrgUserDto.prototype, "providerToken", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateIf)((o) => !o.providerToken),
    tslib_1.__metadata("design:type", String)
], CreateOrgUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(128),
    tslib_1.__metadata("design:type", String)
], CreateOrgUserDto.prototype, "company", void 0);


/***/ }),
/* 134 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 135 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginUserDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const client_1 = __webpack_require__(10);
class LoginUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { password: { required: true, type: () => String, minLength: 3 }, provider: { required: true, type: () => Object }, providerToken: { required: true, type: () => String }, email: { required: true, type: () => String } };
    }
}
exports.LoginUserDto = LoginUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateIf)(o => !o.providerToken),
    (0, class_validator_1.MinLength)(3),
    tslib_1.__metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], LoginUserDto.prototype, "provider", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateIf)(o => !o.password),
    tslib_1.__metadata("design:type", String)
], LoginUserDto.prototype, "providerToken", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], LoginUserDto.prototype, "email", void 0);


/***/ }),
/* 136 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const client_1 = __webpack_require__(10);
const create_org_user_dto_1 = __webpack_require__(133);
const users_service_1 = __webpack_require__(33);
const organization_service_1 = __webpack_require__(17);
const auth_service_1 = __webpack_require__(12);
const providers_factory_1 = __webpack_require__(137);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const newsletter_service_1 = __webpack_require__(144);
const notification_service_1 = __webpack_require__(18);
const email_service_1 = __webpack_require__(20);
let AuthService = class AuthService {
    constructor(_userService, _organizationService, _notificationService, _emailService) {
        this._userService = _userService;
        this._organizationService = _organizationService;
        this._notificationService = _notificationService;
        this._emailService = _emailService;
    }
    async canRegister() {
        if (!process.env.DISABLE_REGISTRATION) {
            return true;
        }
        return (await this._organizationService.getCount()) === 0;
    }
    async routeAuth(provider, body, ip, userAgent, addToOrg) {
        if (provider === client_1.Provider.LOCAL) {
            const user = await this._userService.getUserByEmail(body.email);
            if (body instanceof create_org_user_dto_1.CreateOrgUserDto) {
                if (user) {
                    throw new Error('User already exists');
                }
                if (!(await this.canRegister())) {
                    throw new Error('Registration is disabled');
                }
                const create = await this._organizationService.createOrgAndUser(body, ip, userAgent);
                const addedOrg = addToOrg && typeof addToOrg !== 'boolean'
                    ? await this._organizationService.addUserToOrg(create.users[0].user.id, addToOrg.id, addToOrg.orgId, addToOrg.role)
                    : false;
                const obj = { addedOrg, jwt: await this.jwt(create.users[0].user) };
                await this._emailService.sendEmail(body.email, 'Activate your account', `Click <a href="${process.env.FRONTEND_URL}/auth/activate/${obj.jwt}">here</a> to activate your account`);
                return obj;
            }
            if (!user || !auth_service_1.AuthService.comparePassword(body.password, user.password)) {
                throw new Error('Invalid user name or password');
            }
            if (!user.activated) {
                throw new Error('User is not activated');
            }
            return { addedOrg: false, jwt: await this.jwt(user) };
        }
        const user = await this.loginOrRegisterProvider(provider, body, ip, userAgent);
        const addedOrg = addToOrg && typeof addToOrg !== 'boolean'
            ? await this._organizationService.addUserToOrg(user.id, addToOrg.id, addToOrg.orgId, addToOrg.role)
            : false;
        return { addedOrg, jwt: await this.jwt(user) };
    }
    getOrgFromCookie(cookie) {
        if (!cookie) {
            return false;
        }
        try {
            const getOrg = auth_service_1.AuthService.verifyJWT(cookie);
            if ((0, dayjs_1.default)(getOrg.timeLimit).isBefore((0, dayjs_1.default)())) {
                return false;
            }
            return getOrg;
        }
        catch (err) {
            return false;
        }
    }
    async loginOrRegisterProvider(provider, body, ip, userAgent) {
        const providerInstance = providers_factory_1.ProvidersFactory.loadProvider(provider);
        const providerUser = await providerInstance.getUser(body.providerToken);
        if (!providerUser) {
            throw new Error('Invalid provider token');
        }
        const user = await this._userService.getUserByProvider(providerUser.id, provider);
        if (user) {
            return user;
        }
        if (!(await this.canRegister())) {
            throw new Error('Registration is disabled');
        }
        const create = await this._organizationService.createOrgAndUser({
            company: body.company,
            email: providerUser.email,
            password: '',
            provider,
            providerId: providerUser.id,
        }, ip, userAgent);
        await newsletter_service_1.NewsletterService.register(providerUser.email);
        return create.users[0].user;
    }
    async forgot(email) {
        const user = await this._userService.getUserByEmail(email);
        if (!user || user.providerName !== client_1.Provider.LOCAL) {
            return false;
        }
        const resetValues = auth_service_1.AuthService.signJWT({
            id: user.id,
            expires: (0, dayjs_1.default)().add(20, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        });
        await this._notificationService.sendEmail(user.email, 'Reset your password', `You have requested to reset your passsord. <br />Click <a href="${process.env.FRONTEND_URL}/auth/forgot/${resetValues}">here</a> to reset your password<br />The link will expire in 20 minutes`);
    }
    forgotReturn(body) {
        const user = auth_service_1.AuthService.verifyJWT(body.token);
        if ((0, dayjs_1.default)(user.expires).isBefore((0, dayjs_1.default)())) {
            return false;
        }
        return this._userService.updatePassword(user.id, body.password);
    }
    async activate(code) {
        const user = auth_service_1.AuthService.verifyJWT(code);
        if (user.id && !user.activated) {
            const getUserAgain = await this._userService.getUserByEmail(user.email);
            if (getUserAgain.activated) {
                return false;
            }
            await this._userService.activateUser(user.id);
            user.activated = true;
            await newsletter_service_1.NewsletterService.register(user.email);
            return this.jwt(user);
        }
        return false;
    }
    oauthLink(provider, query) {
        const providerInstance = providers_factory_1.ProvidersFactory.loadProvider(provider);
        return providerInstance.generateLink(query);
    }
    async checkExists(provider, code) {
        const providerInstance = providers_factory_1.ProvidersFactory.loadProvider(provider);
        const token = await providerInstance.getToken(code);
        const user = await providerInstance.getUser(token);
        if (!user) {
            throw new Error('Invalid user');
        }
        const checkExists = await this._userService.getUserByProvider(user.id, provider);
        if (checkExists) {
            return { jwt: await this.jwt(checkExists) };
        }
        return { token };
    }
    async jwt(user) {
        return auth_service_1.AuthService.signJWT(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [users_service_1.UsersService,
        organization_service_1.OrganizationService,
        notification_service_1.NotificationService,
        email_service_1.EmailService])
], AuthService);


/***/ }),
/* 137 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProvidersFactory = void 0;
const client_1 = __webpack_require__(10);
const github_provider_1 = __webpack_require__(138);
const google_provider_1 = __webpack_require__(139);
const farcaster_provider_1 = __webpack_require__(140);
const wallet_provider_1 = __webpack_require__(141);
class ProvidersFactory {
    static loadProvider(provider) {
        switch (provider) {
            case client_1.Provider.GITHUB:
                return new github_provider_1.GithubProvider();
            case client_1.Provider.GOOGLE:
                return new google_provider_1.GoogleProvider();
            case client_1.Provider.FARCASTER:
                return new farcaster_provider_1.FarcasterProvider();
            case client_1.Provider.WALLET:
                return new wallet_provider_1.WalletProvider();
        }
    }
}
exports.ProvidersFactory = ProvidersFactory;


/***/ }),
/* 138 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GithubProvider = void 0;
class GithubProvider {
    generateLink() {
        return `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=user:email&redirect_uri=${encodeURIComponent(`${process.env.FRONTEND_URL}/settings`)}`;
    }
    async getToken(code) {
        const { access_token } = await (await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
                redirect_uri: `${process.env.FRONTEND_URL}/settings`,
            }),
        })).json();
        return access_token;
    }
    async getUser(access_token) {
        const data = await (await fetch('https://api.github.com/user', {
            headers: {
                Authorization: `token ${access_token}`,
            },
        })).json();
        const [{ email }] = await (await fetch('https://api.github.com/user/emails', {
            headers: {
                Authorization: `token ${access_token}`,
            },
        })).json();
        return {
            email: email,
            id: String(data.id),
        };
    }
}
exports.GithubProvider = GithubProvider;


/***/ }),
/* 139 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleProvider = void 0;
const make_is_1 = __webpack_require__(16);
const googleapis_1 = __webpack_require__(76);
const clientAndYoutube = () => {
    const client = new googleapis_1.google.auth.OAuth2({
        clientId: process.env.YOUTUBE_CLIENT_ID,
        clientSecret: process.env.YOUTUBE_CLIENT_SECRET,
        redirectUri: `${process.env.FRONTEND_URL}/integrations/social/youtube`,
    });
    const youtube = (newClient) => googleapis_1.google.youtube({
        version: 'v3',
        auth: newClient,
    });
    const youtubeAnalytics = (newClient) => googleapis_1.google.youtubeAnalytics({
        version: 'v2',
        auth: newClient,
    });
    const oauth2 = (newClient) => googleapis_1.google.oauth2({
        version: 'v2',
        auth: newClient,
    });
    return { client, youtube, oauth2, youtubeAnalytics };
};
class GoogleProvider {
    generateLink() {
        const state = (0, make_is_1.makeId)(7);
        const { client } = clientAndYoutube();
        return client.generateAuthUrl({
            access_type: 'online',
            prompt: 'consent',
            state,
            redirect_uri: `${process.env.FRONTEND_URL}/integrations/social/youtube`,
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email',
            ],
        });
    }
    async getToken(code) {
        const { client, oauth2 } = clientAndYoutube();
        const { tokens } = await client.getToken(code);
        return tokens.access_token;
    }
    async getUser(providerToken) {
        const { client, oauth2 } = clientAndYoutube();
        client.setCredentials({ access_token: providerToken });
        const user = oauth2(client);
        const { data } = await user.userinfo.get();
        return {
            id: data.id,
            email: data.email,
        };
    }
}
exports.GoogleProvider = GoogleProvider;


/***/ }),
/* 140 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FarcasterProvider = void 0;
const nodejs_sdk_1 = __webpack_require__(92);
const client = new nodejs_sdk_1.NeynarAPIClient({
    apiKey: process.env.NEYNAR_SECRET_KEY || '00000000-000-0000-000-000000000000',
});
class FarcasterProvider {
    generateLink() {
        return '';
    }
    async getToken(code) {
        const data = JSON.parse(Buffer.from(code, 'base64').toString());
        const status = await client.lookupSigner({ signerUuid: data.signer_uuid });
        if (status.status === 'approved') {
            return data.signer_uuid;
        }
        return '';
    }
    async getUser(providerToken) {
        const status = await client.lookupSigner({ signerUuid: providerToken });
        if (status.status !== 'approved') {
            return {
                id: '',
                email: '',
            };
        }
        // const { client, oauth2 } = clientAndYoutube();
        // client.setCredentials({ access_token: providerToken });
        // const user = oauth2(client);
        // const { data } = await user.userinfo.get();
        return {
            id: String('farcaster_' + status.fid),
            email: String('farcaster_' + status.fid),
        };
    }
}
exports.FarcasterProvider = FarcasterProvider;


/***/ }),
/* 141 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletProvider = void 0;
const tslib_1 = __webpack_require__(1);
const crypto_1 = __webpack_require__(15);
const redis_service_1 = __webpack_require__(29);
const bs58_1 = tslib_1.__importDefault(__webpack_require__(142));
const tweetnacl_1 = tslib_1.__importDefault(__webpack_require__(143));
function hexToUint8Array(hex) {
    // Remove any potential "0x" prefix
    if (hex.startsWith('0x')) {
        hex = hex.slice(2);
    }
    // Ensure the hex string has an even length
    if (hex.length % 2 !== 0) {
        throw new Error('Invalid hex string. It must have an even length.');
    }
    const byteLength = hex.length / 2;
    const uint8Array = new Uint8Array(byteLength);
    for (let i = 0; i < byteLength; i++) {
        // Get two characters from the hex string
        const byteHex = hex.substr(i * 2, 2);
        // Parse the two characters as a hexadecimal number
        uint8Array[i] = parseInt(byteHex, 16);
    }
    return uint8Array;
}
class WalletProvider {
    async generateLink(params) {
        if (!params.publicKey) {
            return;
        }
        const challenge = (0, crypto_1.randomBytes)(32).toString('hex');
        await redis_service_1.ioRedis.set(`wallet:${params.publicKey}`, challenge, 'EX', 60);
        return challenge;
    }
    async getToken(code) {
        const { publicKey, challenge, signature } = JSON.parse(Buffer.from(code, 'base64').toString());
        if (!publicKey || !challenge || !signature) {
            return '';
        }
        const redisGet = await redis_service_1.ioRedis.get(`wallet:${publicKey}`);
        if (redisGet !== challenge) {
            return '';
        }
        const publicKeyUint8 = bs58_1.default.decode(publicKey);
        const messageUint8 = new TextEncoder().encode(challenge);
        const signatureUint8 = hexToUint8Array(signature);
        const isValid = tweetnacl_1.default.sign.detached.verify(messageUint8, signatureUint8, publicKeyUint8);
        if (!isValid) {
            return '';
        }
        return code;
    }
    async getUser(providerToken) {
        if ((await this.getToken(providerToken)) === '') {
            return {
                id: '',
                email: '',
            };
        }
        const { publicKey } = JSON.parse(Buffer.from(providerToken, 'base64').toString());
        return {
            id: String(`wallet_${publicKey}`),
            email: String(`wallet_${publicKey}`),
        };
    }
}
exports.WalletProvider = WalletProvider;


/***/ }),
/* 142 */
/***/ ((module) => {

module.exports = require("bs58");

/***/ }),
/* 143 */
/***/ ((module) => {

module.exports = require("tweetnacl");

/***/ }),
/* 144 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewsletterService = void 0;
class NewsletterService {
    static async register(email) {
        if (!process.env.BEEHIIVE_API_KEY ||
            !process.env.BEEHIIVE_PUBLICATION_ID ||
            process.env.NODE_ENV === 'development' ||
            email.indexOf('@') === -1) {
            return;
        }
        const body = {
            email,
            reactivate_existing: false,
            send_welcome_email: true,
            utm_source: 'gitroom_platform',
        };
        await fetch(`https://api.beehiiv.com/v2/publications/${process.env.BEEHIIVE_PUBLICATION_ID}/subscriptions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${process.env.BEEHIIVE_API_KEY}`,
            },
            body: JSON.stringify(body),
        });
    }
}
exports.NewsletterService = NewsletterService;


/***/ }),
/* 145 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ForgotReturnPasswordDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const make_is_1 = __webpack_require__(16);
class ForgotReturnPasswordDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { password: { required: true, type: () => String, minLength: 3 }, repeatPassword: { required: true, type: () => String, enum: [(0, make_is_1.makeId)(10)] }, token: { required: true, type: () => String, minLength: 5 } };
    }
}
exports.ForgotReturnPasswordDto = ForgotReturnPasswordDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.MinLength)(3),
    tslib_1.__metadata("design:type", String)
], ForgotReturnPasswordDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsIn)([(0, make_is_1.makeId)(10)], {
        message: 'Passwords do not match',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.password !== o.repeatPassword),
    tslib_1.__metadata("design:type", String)
], ForgotReturnPasswordDto.prototype, "repeatPassword", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.MinLength)(5),
    tslib_1.__metadata("design:type", String)
], ForgotReturnPasswordDto.prototype, "token", void 0);


/***/ }),
/* 146 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ForgotPasswordDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class ForgotPasswordDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String } };
    }
}
exports.ForgotPasswordDto = ForgotPasswordDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], ForgotPasswordDto.prototype, "email", void 0);


/***/ }),
/* 147 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCookieUrlFromDomain = getCookieUrlFromDomain;
const tldts_1 = __webpack_require__(148);
function getCookieUrlFromDomain(domain) {
    const url = (0, tldts_1.parse)(domain);
    return url.domain ? "." + url.domain : url.hostname;
}


/***/ }),
/* 148 */
/***/ ((module) => {

module.exports = require("tldts");

/***/ }),
/* 149 */
/***/ ((module) => {

module.exports = require("nestjs-real-ip");

/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAgent = void 0;
const common_1 = __webpack_require__(5);
exports.UserAgent = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers['user-agent'];
});


/***/ }),
/* 151 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const user_from_request_1 = __webpack_require__(152);
const subscription_service_1 = __webpack_require__(40);
const org_from_request_1 = __webpack_require__(153);
const stripe_service_1 = __webpack_require__(106);
const auth_service_1 = __webpack_require__(136);
const organization_service_1 = __webpack_require__(17);
const permissions_ability_1 = __webpack_require__(154);
const permissions_service_1 = __webpack_require__(155);
const subdomain_management_1 = __webpack_require__(147);
const pricing_1 = __webpack_require__(41);
const swagger_1 = __webpack_require__(3);
const users_service_1 = __webpack_require__(33);
const user_details_dto_1 = __webpack_require__(157);
const exception_filter_1 = __webpack_require__(159);
const nestjs_real_ip_1 = __webpack_require__(149);
const user_agent_1 = __webpack_require__(150);
const track_service_1 = __webpack_require__(108);
const make_is_1 = __webpack_require__(16);
let UsersController = class UsersController {
    constructor(_subscriptionService, _stripeService, _authService, _orgService, _userService, _trackService) {
        this._subscriptionService = _subscriptionService;
        this._stripeService = _stripeService;
        this._authService = _authService;
        this._orgService = _orgService;
        this._userService = _userService;
        this._trackService = _trackService;
    }
    async getSelf(user, organization, req) {
        if (!organization) {
            throw new exception_filter_1.HttpForbiddenException();
        }
        const impersonate = req.cookies.impersonate || req.headers.impersonate;
        // @ts-ignore
        return {
            ...user,
            orgId: organization.id,
            // @ts-ignore
            totalChannels: !process.env.STRIPE_PUBLISHABLE_KEY ? 10000 : organization?.subscription?.totalChannels || pricing_1.pricing.FREE.channel,
            // @ts-ignore
            tier: organization?.subscription?.subscriptionTier ||
                (!process.env.STRIPE_PUBLISHABLE_KEY ? 'ULTIMATE' : 'FREE'),
            // @ts-ignore
            role: organization?.users[0]?.role,
            // @ts-ignore
            isLifetime: !!organization?.subscription?.isLifetime,
            admin: !!user.isSuperAdmin,
            impersonate: !!impersonate,
            allowTrial: organization?.allowTrial,
            // @ts-ignore
            publicApi: organization?.users[0]?.role === 'SUPERADMIN' || organization?.users[0]?.role === 'ADMIN' ? organization?.apiKey : '',
        };
    }
    async getPersonal(user) {
        return this._userService.getPersonal(user.id);
    }
    async getImpersonate(user, name) {
        if (!user.isSuperAdmin) {
            throw new common_1.HttpException('Unauthorized', 400);
        }
        return this._userService.getImpersonateUser(name);
    }
    async setImpersonate(user, id, response) {
        if (!user.isSuperAdmin) {
            throw new common_1.HttpException('Unauthorized', 400);
        }
        response.cookie('impersonate', id, {
            domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
            ...(!process.env.NOT_SECURED
                ? {
                    secure: true,
                    httpOnly: true,
                    sameSite: 'none',
                }
                : {}),
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        });
        if (process.env.NOT_SECURED) {
            response.header('impersonate', id);
        }
    }
    async changePersonal(user, body) {
        return this._userService.changePersonal(user.id, body);
    }
    async getSubscription(organization) {
        const subscription = await this._subscriptionService.getSubscriptionByOrganizationId(organization.id);
        return subscription ? { subscription } : { subscription: undefined };
    }
    async tiers() {
        return this._stripeService.getPackages();
    }
    async joinOrg(user, org, response) {
        const getOrgFromCookie = this._authService.getOrgFromCookie(org);
        if (!getOrgFromCookie) {
            return response.status(200).json({ id: null });
        }
        const addedOrg = await this._orgService.addUserToOrg(user.id, getOrgFromCookie.id, getOrgFromCookie.orgId, getOrgFromCookie.role);
        response.status(200).json({
            id: typeof addedOrg !== 'boolean' ? addedOrg.organizationId : null,
        });
    }
    async getOrgs(user) {
        return (await this._orgService.getOrgsByUserId(user.id)).filter((f) => !f.users[0].disabled);
    }
    changeOrg(id, response) {
        response.cookie('showorg', id, {
            domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
            ...(!process.env.NOT_SECURED
                ? {
                    secure: true,
                    httpOnly: true,
                    sameSite: 'none',
                }
                : {}),
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        });
        if (process.env.NOT_SECURED) {
            response.header('showorg', id);
        }
        response.status(200).send();
    }
    logout(response) {
        response.cookie('auth', '', {
            domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
            ...(!process.env.NOT_SECURED
                ? {
                    secure: true,
                    httpOnly: true,
                    sameSite: 'none',
                }
                : {}),
            maxAge: -1,
            expires: new Date(0),
        });
        response.cookie('showorg', '', {
            domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
            ...(!process.env.NOT_SECURED
                ? {
                    secure: true,
                    httpOnly: true,
                    sameSite: 'none',
                }
                : {}),
            maxAge: -1,
            expires: new Date(0),
        });
        response.cookie('impersonate', '', {
            domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
            ...(!process.env.NOT_SECURED
                ? {
                    secure: true,
                    httpOnly: true,
                    sameSite: 'none',
                }
                : {}),
            maxAge: -1,
            expires: new Date(0),
        });
        response.status(200).send();
    }
    async trackEvent(res, req, user, ip, userAgent, body) {
        const uniqueId = req?.cookies?.track || (0, make_is_1.makeId)(10);
        const fbclid = req?.cookies?.fbclid || body.fbclid;
        await this._trackService.track(uniqueId, ip, userAgent, body.tt, body.additional, fbclid, user);
        if (!req.cookies.track) {
            res.cookie('track', uniqueId, {
                domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
                ...(!process.env.NOT_SECURED
                    ? {
                        secure: true,
                        httpOnly: true,
                        sameSite: 'none',
                    }
                    : {}),
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
            });
        }
        res.status(200).json({
            track: uniqueId,
        });
    }
};
exports.UsersController = UsersController;
tslib_1.__decorate([
    (0, common_1.Get)('/self'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(2, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getSelf", null);
tslib_1.__decorate([
    (0, common_1.Get)('/personal'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getPersonal", null);
tslib_1.__decorate([
    (0, common_1.Get)('/impersonate'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, common_1.Query)('name')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getImpersonate", null);
tslib_1.__decorate([
    (0, common_1.Post)('/impersonate'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)('id')),
    tslib_1.__param(2, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "setImpersonate", null);
tslib_1.__decorate([
    (0, common_1.Post)('/personal'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, user_details_dto_1.UserDetailDto]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "changePersonal", null);
tslib_1.__decorate([
    (0, common_1.Get)('/subscription'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.ADMIN]),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getSubscription", null);
tslib_1.__decorate([
    (0, common_1.Get)('/subscription/tiers'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.ADMIN]),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "tiers", null);
tslib_1.__decorate([
    (0, common_1.Post)('/join-org'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)('org')),
    tslib_1.__param(2, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "joinOrg", null);
tslib_1.__decorate([
    (0, common_1.Get)('/organizations'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getOrgs", null);
tslib_1.__decorate([
    (0, common_1.Post)('/change-org'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Body)('id')),
    tslib_1.__param(1, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "changeOrg", null);
tslib_1.__decorate([
    (0, common_1.Post)('/logout'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "logout", null);
tslib_1.__decorate([
    (0, common_1.Post)('/t'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__param(2, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(3, (0, nestjs_real_ip_1.RealIP)()),
    tslib_1.__param(4, (0, user_agent_1.UserAgent)()),
    tslib_1.__param(5, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, String, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "trackEvent", null);
exports.UsersController = UsersController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('/user'),
    tslib_1.__metadata("design:paramtypes", [subscription_service_1.SubscriptionService,
        stripe_service_1.StripeService,
        auth_service_1.AuthService,
        organization_service_1.OrganizationService,
        users_service_1.UsersService,
        track_service_1.TrackService])
], UsersController);


/***/ }),
/* 152 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetUserFromRequest = void 0;
const common_1 = __webpack_require__(5);
exports.GetUserFromRequest = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),
/* 153 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetOrgFromRequest = void 0;
const common_1 = __webpack_require__(5);
exports.GetOrgFromRequest = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.org;
});


/***/ }),
/* 154 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckPolicies = exports.CHECK_POLICIES_KEY = void 0;
const common_1 = __webpack_require__(5);
exports.CHECK_POLICIES_KEY = 'check_policy';
const CheckPolicies = (...handlers) => (0, common_1.SetMetadata)(exports.CHECK_POLICIES_KEY, handlers);
exports.CheckPolicies = CheckPolicies;


/***/ }),
/* 155 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermissionsService = exports.AuthorizationActions = exports.Sections = void 0;
const tslib_1 = __webpack_require__(1);
const ability_1 = __webpack_require__(156);
const common_1 = __webpack_require__(5);
const pricing_1 = __webpack_require__(41);
const subscription_service_1 = __webpack_require__(40);
const posts_service_1 = __webpack_require__(99);
const integration_service_1 = __webpack_require__(43);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const webhooks_service_1 = __webpack_require__(121);
var Sections;
(function (Sections) {
    Sections["CHANNEL"] = "channel";
    Sections["POSTS_PER_MONTH"] = "posts_per_month";
    Sections["TEAM_MEMBERS"] = "team_members";
    Sections["COMMUNITY_FEATURES"] = "community_features";
    Sections["FEATURED_BY_GITROOM"] = "featured_by_gitroom";
    Sections["AI"] = "ai";
    Sections["IMPORT_FROM_CHANNELS"] = "import_from_channels";
    Sections["ADMIN"] = "admin";
    Sections["WEBHOOKS"] = "webhooks";
})(Sections || (exports.Sections = Sections = {}));
var AuthorizationActions;
(function (AuthorizationActions) {
    AuthorizationActions["Create"] = "create";
    AuthorizationActions["Read"] = "read";
    AuthorizationActions["Update"] = "update";
    AuthorizationActions["Delete"] = "delete";
})(AuthorizationActions || (exports.AuthorizationActions = AuthorizationActions = {}));
let PermissionsService = class PermissionsService {
    constructor(_subscriptionService, _postsService, _integrationService, _webhooksService) {
        this._subscriptionService = _subscriptionService;
        this._postsService = _postsService;
        this._integrationService = _integrationService;
        this._webhooksService = _webhooksService;
    }
    async getPackageOptions(orgId) {
        const subscription = await this._subscriptionService.getSubscriptionByOrganizationId(orgId);
        const tier = subscription?.subscriptionTier ||
            (!process.env.STRIPE_PUBLISHABLE_KEY ? 'PRO' : 'FREE');
        const { channel, ...all } = pricing_1.pricing[tier];
        return {
            subscription,
            options: {
                ...all,
                ...{ channel: tier === 'FREE' ? channel : -10 },
            },
        };
    }
    async check(orgId, created_at, permission, requestedPermission) {
        const { can, build } = new ability_1.AbilityBuilder(ability_1.Ability);
        if (requestedPermission.length === 0 ||
            !process.env.STRIPE_PUBLISHABLE_KEY) {
            for (const [action, section] of requestedPermission) {
                can(action, section);
            }
            return build({
                detectSubjectType: (item) => 
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                item.constructor,
            });
        }
        const { subscription, options } = await this.getPackageOptions(orgId);
        for (const [action, section] of requestedPermission) {
            // check for the amount of channels
            if (section === Sections.CHANNEL) {
                const totalChannels = (await this._integrationService.getIntegrationsList(orgId)).filter(f => !f.refreshNeeded).length;
                if ((options.channel && options.channel > totalChannels) ||
                    (subscription?.totalChannels || 0) > totalChannels) {
                    can(action, section);
                    continue;
                }
            }
            if (section === Sections.WEBHOOKS) {
                const totalWebhooks = await this._webhooksService.getTotal(orgId);
                if (totalWebhooks < options.webhooks) {
                    can(AuthorizationActions.Create, section);
                    continue;
                }
            }
            // check for posts per month
            if (section === Sections.POSTS_PER_MONTH) {
                const createdAt = (await this._subscriptionService.getSubscription(orgId))?.createdAt ||
                    created_at;
                const totalMonthPast = Math.abs((0, dayjs_1.default)(createdAt).diff((0, dayjs_1.default)(), 'month'));
                const checkFrom = (0, dayjs_1.default)(createdAt).add(totalMonthPast, 'month');
                const count = await this._postsService.countPostsFromDay(orgId, checkFrom.toDate());
                if (count < options.posts_per_month) {
                    can(action, section);
                    continue;
                }
            }
            if (section === Sections.TEAM_MEMBERS && options.team_members) {
                can(action, section);
                continue;
            }
            if (section === Sections.ADMIN &&
                ['ADMIN', 'SUPERADMIN'].includes(permission)) {
                can(action, section);
                continue;
            }
            if (section === Sections.COMMUNITY_FEATURES &&
                options.community_features) {
                can(action, section);
                continue;
            }
            if (section === Sections.FEATURED_BY_GITROOM &&
                options.featured_by_gitroom) {
                can(action, section);
                continue;
            }
            if (section === Sections.AI && options.ai) {
                can(action, section);
                continue;
            }
            if (section === Sections.IMPORT_FROM_CHANNELS &&
                options.import_from_channels) {
                can(action, section);
            }
        }
        return build({
            detectSubjectType: (item) => 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            item.constructor,
        });
    }
};
exports.PermissionsService = PermissionsService;
exports.PermissionsService = PermissionsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [subscription_service_1.SubscriptionService,
        posts_service_1.PostsService,
        integration_service_1.IntegrationService,
        webhooks_service_1.WebhooksService])
], PermissionsService);


/***/ }),
/* 156 */
/***/ ((module) => {

module.exports = require("@casl/ability");

/***/ }),
/* 157 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDetailDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const media_dto_1 = __webpack_require__(158);
const class_validator_1 = __webpack_require__(134);
class UserDetailDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { fullname: { required: true, type: () => String, minLength: 3 }, bio: { required: true, type: () => String }, picture: { required: true, type: () => (__webpack_require__(158).MediaDto) } };
    }
}
exports.UserDetailDto = UserDetailDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    tslib_1.__metadata("design:type", String)
], UserDetailDto.prototype, "fullname", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UserDetailDto.prototype, "bio", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    tslib_1.__metadata("design:type", media_dto_1.MediaDto)
], UserDetailDto.prototype, "picture", void 0);


/***/ }),
/* 158 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class MediaDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, path: { required: true, type: () => String } };
    }
}
exports.MediaDto = MediaDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], MediaDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], MediaDto.prototype, "path", void 0);


/***/ }),
/* 159 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = exports.HttpForbiddenException = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const auth_middleware_1 = __webpack_require__(160);
class HttpForbiddenException extends common_1.HttpException {
    constructor() {
        super('Forbidden', 403);
    }
}
exports.HttpForbiddenException = HttpForbiddenException;
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        (0, auth_middleware_1.removeAuth)(response);
        return response.status(401).send();
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = tslib_1.__decorate([
    (0, common_1.Catch)(HttpForbiddenException)
], HttpExceptionFilter);


/***/ }),
/* 160 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthMiddleware = exports.removeAuth = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const auth_service_1 = __webpack_require__(12);
const organization_service_1 = __webpack_require__(17);
const users_service_1 = __webpack_require__(33);
const subdomain_management_1 = __webpack_require__(147);
const exception_filter_1 = __webpack_require__(159);
const removeAuth = (res) => {
    res.cookie('auth', '', {
        domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
        ...(!process.env.NOT_SECURED
            ? {
                secure: true,
                httpOnly: true,
                sameSite: 'none',
            }
            : {}),
        expires: new Date(0),
        maxAge: -1,
    });
    res.header('logout', 'true');
};
exports.removeAuth = removeAuth;
let AuthMiddleware = class AuthMiddleware {
    constructor(_organizationService, _userService) {
        this._organizationService = _organizationService;
        this._userService = _userService;
    }
    async use(req, res, next) {
        const auth = req.headers.auth || req.cookies.auth;
        if (!auth) {
            throw new exception_filter_1.HttpForbiddenException();
        }
        try {
            let user = auth_service_1.AuthService.verifyJWT(auth);
            const orgHeader = req.cookies.showorg || req.headers.showorg;
            if (!user) {
                throw new exception_filter_1.HttpForbiddenException();
            }
            if (!user.activated) {
                throw new exception_filter_1.HttpForbiddenException();
            }
            const impersonate = req.cookies.impersonate || req.headers.impersonate;
            if (user?.isSuperAdmin && impersonate) {
                const loadImpersonate = await this._organizationService.getUserOrg(impersonate);
                if (loadImpersonate) {
                    user = loadImpersonate.user;
                    user.isSuperAdmin = true;
                    delete user.password;
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    req.user = user;
                    // @ts-ignore
                    loadImpersonate.organization.users =
                        loadImpersonate.organization.users.filter((f) => f.userId === user.id);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    req.org = loadImpersonate.organization;
                    next();
                    return;
                }
            }
            delete user.password;
            const organization = (await this._organizationService.getOrgsByUserId(user.id)).filter((f) => !f.users[0].disabled);
            const setOrg = organization.find((org) => org.id === orgHeader) || organization[0];
            if (!organization) {
                throw new exception_filter_1.HttpForbiddenException();
            }
            if (!setOrg.apiKey) {
                await this._organizationService.updateApiKey(setOrg.id);
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            req.user = user;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            req.org = setOrg;
        }
        catch (err) {
            throw new exception_filter_1.HttpForbiddenException();
        }
        next();
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [organization_service_1.OrganizationService,
        users_service_1.UsersService])
], AuthMiddleware);


/***/ }),
/* 161 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StripeController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const stripe_service_1 = __webpack_require__(106);
const swagger_1 = __webpack_require__(3);
const codes_service_1 = __webpack_require__(162);
let StripeController = class StripeController {
    constructor(_stripeService, _codesService) {
        this._stripeService = _stripeService;
        this._codesService = _codesService;
    }
    stripeConnect(req) {
        const event = this._stripeService.validateRequest(req.rawBody, req.headers['stripe-signature'], process.env.STRIPE_SIGNING_KEY_CONNECT);
        // Maybe it comes from another stripe webhook
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (event?.data?.object?.metadata?.service !== 'gitroom') {
            return { ok: true };
        }
        switch (event.type) {
            case 'checkout.session.completed':
                return this._stripeService.updateOrder(event);
            case 'account.updated':
                return this._stripeService.updateAccount(event);
            default:
                return { ok: true };
        }
    }
    stripe(req) {
        const event = this._stripeService.validateRequest(req.rawBody, req.headers['stripe-signature'], process.env.STRIPE_SIGNING_KEY);
        // Maybe it comes from another stripe webhook
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (event?.data?.object?.metadata?.service !== 'gitroom' && event.type !== 'invoice.payment_succeeded') {
            return { ok: true };
        }
        switch (event.type) {
            case 'invoice.payment_succeeded':
                return this._stripeService.paymentSucceeded(event);
            case 'checkout.session.completed':
                return this._stripeService.updateOrder(event);
            case 'account.updated':
                return this._stripeService.updateAccount(event);
            case 'customer.subscription.created':
                return this._stripeService.createSubscription(event);
            case 'customer.subscription.updated':
                return this._stripeService.updateSubscription(event);
            case 'customer.subscription.deleted':
                return this._stripeService.deleteSubscription(event);
            default:
                return { ok: true };
        }
    }
    async getStripeCodes(providerToken) {
        return this._codesService.generateCodes(providerToken);
    }
};
exports.StripeController = StripeController;
tslib_1.__decorate([
    (0, common_1.Post)('/connect'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StripeController.prototype, "stripeConnect", null);
tslib_1.__decorate([
    (0, common_1.Post)('/'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StripeController.prototype, "stripe", null);
tslib_1.__decorate([
    (0, common_1.Get)('/lifetime-deal-codes/:provider'),
    (0, common_1.Header)('Content-disposition', 'attachment; filename=codes.csv'),
    (0, common_1.Header)('Content-type', 'text/csv'),
    openapi.ApiResponse({ status: 200, type: String }),
    tslib_1.__param(0, (0, common_1.Param)('provider')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], StripeController.prototype, "getStripeCodes", null);
exports.StripeController = StripeController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Stripe'),
    (0, common_1.Controller)('/stripe'),
    tslib_1.__metadata("design:paramtypes", [stripe_service_1.StripeService,
        codes_service_1.CodesService])
], StripeController);


/***/ }),
/* 162 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodesService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const auth_service_1 = __webpack_require__(12);
let CodesService = class CodesService {
    generateCodes(providerToken) {
        try {
            const decrypt = auth_service_1.AuthService.fixedDecryption(providerToken);
            return [...new Array(10000)].map((_, index) => {
                return auth_service_1.AuthService.fixedEncryption(`${decrypt}:${index}`);
            }).join('\n');
        }
        catch (error) {
            return '';
        }
    }
};
exports.CodesService = CodesService;
exports.CodesService = CodesService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CodesService);


/***/ }),
/* 163 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnalyticsController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const org_from_request_1 = __webpack_require__(153);
const stars_service_1 = __webpack_require__(36);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const stars_list_dto_1 = __webpack_require__(164);
const swagger_1 = __webpack_require__(3);
const integration_service_1 = __webpack_require__(43);
let AnalyticsController = class AnalyticsController {
    constructor(_starsService, _integrationService) {
        this._starsService = _starsService;
        this._integrationService = _integrationService;
    }
    async getStars(org) {
        return this._starsService.getStars(org.id);
    }
    async getTrending() {
        const todayTrending = (0, dayjs_1.default)((0, dayjs_1.default)().format('YYYY-MM-DDT12:00:00'));
        const last = todayTrending.isAfter((0, dayjs_1.default)())
            ? todayTrending.subtract(1, 'day')
            : todayTrending;
        const nextTrending = last.add(1, 'day');
        return {
            last: last.format('YYYY-MM-DD HH:mm:ss'),
            predictions: nextTrending.format('YYYY-MM-DD HH:mm:ss'),
        };
    }
    async getStarsFilter(org, starsFilter) {
        return {
            stars: await this._starsService.getStarsFilter(org.id, starsFilter),
        };
    }
    async getIntegration(org, integration, date) {
        return this._integrationService.checkAnalytics(org, integration, date);
    }
};
exports.AnalyticsController = AnalyticsController;
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getStars", null);
tslib_1.__decorate([
    (0, common_1.Get)('/trending'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getTrending", null);
tslib_1.__decorate([
    (0, common_1.Post)('/stars'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, stars_list_dto_1.StarsListDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getStarsFilter", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:integration'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('integration')),
    tslib_1.__param(2, (0, common_1.Query)('date')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getIntegration", null);
exports.AnalyticsController = AnalyticsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Analytics'),
    (0, common_1.Controller)('/analytics'),
    tslib_1.__metadata("design:paramtypes", [stars_service_1.StarsService,
        integration_service_1.IntegrationService])
], AnalyticsController);


/***/ }),
/* 164 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StarsListDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class StarsListDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { page: { required: true, type: () => Number }, key: { required: true, type: () => Object, enum: ['login', 'totalStars', 'stars', 'date', 'forks', 'totalForks'] }, state: { required: true, type: () => Object, enum: ['desc', 'asc'] } };
    }
}
exports.StarsListDto = StarsListDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", Number)
], StarsListDto.prototype, "page", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['login', 'totalStars', 'stars', 'date', 'forks', 'totalForks']),
    tslib_1.__metadata("design:type", String)
], StarsListDto.prototype, "key", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['desc', 'asc']),
    tslib_1.__metadata("design:type", String)
], StarsListDto.prototype, "state", void 0);


/***/ }),
/* 165 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PoliciesGuard = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const core_1 = __webpack_require__(6);
const permissions_service_1 = __webpack_require__(155);
const permissions_ability_1 = __webpack_require__(154);
const subscription_exception_1 = __webpack_require__(166);
let PoliciesGuard = class PoliciesGuard {
    constructor(_reflector, _authorizationService) {
        this._reflector = _reflector;
        this._authorizationService = _authorizationService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (request.path.indexOf('/auth') > -1 || request.path.indexOf('/stripe') > -1) {
            return true;
        }
        const policyHandlers = this._reflector.get(permissions_ability_1.CHECK_POLICIES_KEY, context.getHandler()) || [];
        if (!policyHandlers || !policyHandlers.length) {
            return true;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const { org } = request;
        // @ts-ignore
        const ability = await this._authorizationService.check(org.id, org.createdAt, org.users[0].role, policyHandlers);
        const item = policyHandlers.find((handler) => !this.execPolicyHandler(handler, ability));
        if (item) {
            throw new subscription_exception_1.SubscriptionException({
                section: item[1],
                action: item[0]
            });
        }
        return true;
    }
    execPolicyHandler(handler, ability) {
        return ability.can(handler[0], handler[1]);
    }
};
exports.PoliciesGuard = PoliciesGuard;
exports.PoliciesGuard = PoliciesGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [core_1.Reflector,
        permissions_service_1.PermissionsService])
], PoliciesGuard);


/***/ }),
/* 166 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscriptionExceptionFilter = exports.SubscriptionException = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const permissions_service_1 = __webpack_require__(155);
class SubscriptionException extends common_1.HttpException {
    constructor(message) {
        super(message, common_1.HttpStatus.PAYMENT_REQUIRED);
    }
}
exports.SubscriptionException = SubscriptionException;
let SubscriptionExceptionFilter = class SubscriptionExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const error = exception.getResponse();
        const message = getErrorMessage(error);
        response.status(status).json({
            statusCode: status,
            message,
            url: process.env.FRONTEND_URL + '/billing',
        });
    }
};
exports.SubscriptionExceptionFilter = SubscriptionExceptionFilter;
exports.SubscriptionExceptionFilter = SubscriptionExceptionFilter = tslib_1.__decorate([
    (0, common_1.Catch)(SubscriptionException)
], SubscriptionExceptionFilter);
const getErrorMessage = (error) => {
    switch (error.section) {
        case permissions_service_1.Sections.POSTS_PER_MONTH:
            switch (error.action) {
                default:
                    return 'You have reached the maximum number of posts for your subscription. Please upgrade your subscription to add more posts.';
            }
        case permissions_service_1.Sections.CHANNEL:
            switch (error.action) {
                default:
                    return 'You have reached the maximum number of channels for your subscription. Please upgrade your subscription to add more channels.';
            }
        case permissions_service_1.Sections.WEBHOOKS:
            switch (error.action) {
                default:
                    return 'You have reached the maximum number of webhooks for your subscription. Please upgrade your subscription to add more webhooks.';
            }
    }
};


/***/ }),
/* 167 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationsController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const redis_service_1 = __webpack_require__(29);
const connect_integration_dto_1 = __webpack_require__(168);
const integration_manager_1 = __webpack_require__(55);
const integration_service_1 = __webpack_require__(43);
const org_from_request_1 = __webpack_require__(153);
const api_key_dto_1 = __webpack_require__(169);
const integration_function_dto_1 = __webpack_require__(170);
const permissions_service_1 = __webpack_require__(155);
const permissions_ability_1 = __webpack_require__(154);
const pricing_1 = __webpack_require__(41);
const swagger_1 = __webpack_require__(3);
const user_from_request_1 = __webpack_require__(152);
const integration_missing_scopes_1 = __webpack_require__(171);
const posts_service_1 = __webpack_require__(99);
const integration_time_dto_1 = __webpack_require__(172);
const auth_service_1 = __webpack_require__(12);
const plug_dto_1 = __webpack_require__(174);
const social_abstract_1 = __webpack_require__(62);
const timer_1 = __webpack_require__(63);
const telegram_provider_1 = __webpack_require__(93);
let IntegrationsController = class IntegrationsController {
    constructor(_integrationManager, _integrationService, _postService) {
        this._integrationManager = _integrationManager;
        this._integrationService = _integrationService;
        this._postService = _postService;
    }
    getIntegration() {
        return this._integrationManager.getAllIntegrations();
    }
    getInternalPlugs(identifier) {
        return this._integrationManager.getInternalPlugs(identifier);
    }
    getCustomers(org) {
        return this._integrationService.customers(org.id);
    }
    async updateIntegrationGroup(org, id, body) {
        return this._integrationService.updateIntegrationGroup(org.id, id, body.group);
    }
    async updateOnCustomerName(org, id, body) {
        return this._integrationService.updateOnCustomerName(org.id, id, body.name);
    }
    async getIntegrationList(org) {
        return {
            integrations: await Promise.all((await this._integrationService.getIntegrationsList(org.id)).map(async (p) => {
                const findIntegration = this._integrationManager.getSocialIntegration(p.providerIdentifier);
                return {
                    name: p.name,
                    id: p.id,
                    internalId: p.internalId,
                    disabled: p.disabled,
                    picture: p.picture || '/no-picture.jpg',
                    identifier: p.providerIdentifier,
                    inBetweenSteps: p.inBetweenSteps,
                    refreshNeeded: p.refreshNeeded,
                    isCustomFields: !!findIntegration.customFields,
                    ...(findIntegration.customFields
                        ? { customFields: await findIntegration.customFields() }
                        : {}),
                    display: p.profile,
                    type: p.type,
                    time: JSON.parse(p.postingTimes),
                    changeProfilePicture: !!findIntegration?.changeProfilePicture,
                    changeNickName: !!findIntegration?.changeNickname,
                    customer: p.customer,
                    additionalSettings: p.additionalSettings || '[]',
                };
            })),
        };
    }
    async updateProviderSettings(org, id, body) {
        if (typeof body !== 'string') {
            throw new Error('Invalid body');
        }
        await this._integrationService.updateProviderSettings(org.id, id, body);
    }
    async setNickname(org, id, body) {
        const integration = await this._integrationService.getIntegrationById(org.id, id);
        if (!integration) {
            throw new Error('Invalid integration');
        }
        const manager = this._integrationManager.getSocialIntegration(integration.providerIdentifier);
        if (!manager.changeProfilePicture && !manager.changeNickname) {
            throw new Error('Invalid integration');
        }
        const { url } = manager.changeProfilePicture
            ? await manager.changeProfilePicture(integration.internalId, integration.token, body.picture)
            : { url: '' };
        const { name } = manager.changeNickname
            ? await manager.changeNickname(integration.internalId, integration.token, body.name)
            : { name: '' };
        return this._integrationService.updateNameAndUrl(id, name, url);
    }
    getSingleIntegration(id, order, user, org) {
        return this._integrationService.getIntegrationForOrder(id, order, user.id, org.id);
    }
    async getIntegrationUrl(integration, refresh, externalUrl) {
        if (!this._integrationManager
            .getAllowedSocialsIntegrations()
            .includes(integration)) {
            throw new Error('Integration not allowed');
        }
        const integrationProvider = this._integrationManager.getSocialIntegration(integration);
        if (integrationProvider.externalUrl && !externalUrl) {
            throw new Error('Missing external url');
        }
        try {
            const getExternalUrl = integrationProvider.externalUrl
                ? {
                    ...(await integrationProvider.externalUrl(externalUrl)),
                    instanceUrl: externalUrl,
                }
                : undefined;
            const { codeVerifier, state, url } = await integrationProvider.generateAuthUrl(getExternalUrl);
            if (refresh) {
                await redis_service_1.ioRedis.set(`refresh:${state}`, refresh, 'EX', 300);
            }
            await redis_service_1.ioRedis.set(`login:${state}`, codeVerifier, 'EX', 300);
            await redis_service_1.ioRedis.set(`external:${state}`, JSON.stringify(getExternalUrl), 'EX', 300);
            return { url };
        }
        catch (err) {
            return { err: true };
        }
    }
    async setTime(org, id, body) {
        return this._integrationService.setTimes(org.id, id, body);
    }
    async functionIntegration(org, body) {
        const getIntegration = await this._integrationService.getIntegrationById(org.id, body.id);
        if (!getIntegration) {
            throw new Error('Invalid integration');
        }
        if (getIntegration.type === 'social') {
            const integrationProvider = this._integrationManager.getSocialIntegration(getIntegration.providerIdentifier);
            if (!integrationProvider) {
                throw new Error('Invalid provider');
            }
            if (integrationProvider[body.name]) {
                try {
                    const load = await integrationProvider[body.name](getIntegration.token, body.data, getIntegration.internalId, getIntegration);
                    return load;
                }
                catch (err) {
                    if (err instanceof social_abstract_1.RefreshToken) {
                        const { accessToken, refreshToken, expiresIn, additionalSettings } = await integrationProvider.refreshToken(getIntegration.refreshToken);
                        if (accessToken) {
                            await this._integrationService.createOrUpdateIntegration(additionalSettings, !!integrationProvider.oneTimeToken, getIntegration.organizationId, getIntegration.name, getIntegration.picture, 'social', getIntegration.internalId, getIntegration.providerIdentifier, accessToken, refreshToken, expiresIn);
                            getIntegration.token = accessToken;
                            if (integrationProvider.refreshWait) {
                                await (0, timer_1.timer)(10000);
                            }
                            return this.functionIntegration(org, body);
                        }
                        else {
                            await this._integrationService.disconnectChannel(org.id, getIntegration);
                            return false;
                        }
                    }
                    return false;
                }
            }
            throw new Error('Function not found');
        }
        if (getIntegration.type === 'article') {
            const integrationProvider = this._integrationManager.getArticlesIntegration(getIntegration.providerIdentifier);
            if (!integrationProvider) {
                throw new Error('Invalid provider');
            }
            if (integrationProvider[body.name]) {
                return integrationProvider[body.name](getIntegration.token, body.data, getIntegration.internalId);
            }
            throw new Error('Function not found');
        }
    }
    async connectArticle(org, integration, api) {
        if (!this._integrationManager
            .getAllowedArticlesIntegrations()
            .includes(integration)) {
            throw new Error('Integration not allowed');
        }
        if (!api) {
            throw new Error('Missing api');
        }
        const integrationProvider = this._integrationManager.getArticlesIntegration(integration);
        const { id, name, token, picture, username } = await integrationProvider.authenticate(api.api);
        if (!id) {
            throw new Error('Invalid api key');
        }
        return this._integrationService.createOrUpdateIntegration(undefined, true, org.id, name, picture, 'article', String(id), integration, token, '', undefined, username, false);
    }
    async connectSocialMedia(org, integration, body) {
        if (!this._integrationManager
            .getAllowedSocialsIntegrations()
            .includes(integration)) {
            throw new Error('Integration not allowed');
        }
        const integrationProvider = this._integrationManager.getSocialIntegration(integration);
        const getCodeVerifier = integrationProvider.customFields
            ? 'none'
            : await redis_service_1.ioRedis.get(`login:${body.state}`);
        if (!getCodeVerifier) {
            throw new Error('Invalid state');
        }
        if (!integrationProvider.customFields) {
            await redis_service_1.ioRedis.del(`login:${body.state}`);
        }
        const details = integrationProvider.externalUrl
            ? await redis_service_1.ioRedis.get(`external:${body.state}`)
            : undefined;
        if (details) {
            await redis_service_1.ioRedis.del(`external:${body.state}`);
        }
        const refresh = await redis_service_1.ioRedis.get(`refresh:${body.state}`);
        if (refresh) {
            await redis_service_1.ioRedis.del(`refresh:${body.state}`);
        }
        const { error, accessToken, expiresIn, refreshToken, id, name, picture, username, additionalSettings,
        // eslint-disable-next-line no-async-promise-executor
         } = await new Promise(async (res) => {
            const auth = await integrationProvider.authenticate({
                code: body.code,
                codeVerifier: getCodeVerifier,
                refresh: body.refresh,
            }, details ? JSON.parse(details) : undefined);
            if (typeof auth === 'string') {
                return res({
                    error: auth,
                    accessToken: '',
                    id: '',
                    name: '',
                    picture: '',
                    username: '',
                    additionalSettings: [],
                });
            }
            if (refresh && integrationProvider.reConnect) {
                const newAuth = await integrationProvider.reConnect(auth.id, refresh, auth.accessToken);
                return res(newAuth);
            }
            return res(auth);
        });
        if (error) {
            throw new social_abstract_1.NotEnoughScopes(error);
        }
        if (!id) {
            throw new social_abstract_1.NotEnoughScopes('Invalid API key');
        }
        if (refresh && String(id) !== String(refresh)) {
            throw new social_abstract_1.NotEnoughScopes('Please refresh the channel that needs to be refreshed');
        }
        let validName = name;
        if (!validName) {
            if (username) {
                validName = username.split('.')[0] ?? username;
            }
            else {
                validName = `Channel_${String(id).slice(0, 8)}`;
            }
        }
        return this._integrationService.createOrUpdateIntegration(additionalSettings, !!integrationProvider.oneTimeToken, org.id, validName.trim(), picture, 'social', String(id), integration, accessToken, refreshToken, expiresIn, username, refresh ? false : integrationProvider.isBetweenSteps, body.refresh, +body.timezone, details
            ? auth_service_1.AuthService.fixedEncryption(details)
            : integrationProvider.customFields
                ? auth_service_1.AuthService.fixedEncryption(Buffer.from(body.code, 'base64').toString())
                : undefined);
    }
    disableChannel(org, id) {
        return this._integrationService.disableChannel(org.id, id);
    }
    async saveInstagram(id, body, org) {
        return this._integrationService.saveInstagram(org.id, id, body);
    }
    async saveFacebook(id, body, org) {
        return this._integrationService.saveFacebook(org.id, id, body.page);
    }
    async saveLinkedin(id, body, org) {
        return this._integrationService.saveLinkedin(org.id, id, body.page);
    }
    enableChannel(org, id) {
        return this._integrationService.enableChannel(org.id, 
        // @ts-ignore
        org?.subscription?.totalChannels || pricing_1.pricing.FREE.channel, id);
    }
    async deleteChannel(org, id) {
        const isTherePosts = await this._integrationService.getPostsForChannel(org.id, id);
        if (isTherePosts.length) {
            for (const post of isTherePosts) {
                await this._postService.deletePost(org.id, post.group);
            }
        }
        return this._integrationService.deleteChannel(org.id, id);
    }
    async getPlugList() {
        return { plugs: this._integrationManager.getAllPlugs() };
    }
    async getPlugsByIntegrationId(id, org) {
        return this._integrationService.getPlugsByIntegrationId(org.id, id);
    }
    async postPlugsByIntegrationId(id, org, body) {
        return this._integrationService.createOrUpdatePlug(org.id, id, body);
    }
    async changePlugActivation(id, org, status) {
        return this._integrationService.changePlugActivation(org.id, id, status);
    }
    async getUpdates(query) {
        return new telegram_provider_1.TelegramProvider().getBotId(query);
    }
};
exports.IntegrationsController = IntegrationsController;
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], IntegrationsController.prototype, "getIntegration", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:identifier/internal-plugs'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Param)('identifier')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], IntegrationsController.prototype, "getInternalPlugs", null);
tslib_1.__decorate([
    (0, common_1.Get)('/customers'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], IntegrationsController.prototype, "getCustomers", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id/group'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "updateIntegrationGroup", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id/customer-name'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "updateOnCustomerName", null);
tslib_1.__decorate([
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "getIntegrationList", null);
tslib_1.__decorate([
    (0, common_1.Post)('/:id/settings'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__param(2, (0, common_1.Body)('additionalSettings')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "updateProviderSettings", null);
tslib_1.__decorate([
    (0, common_1.Post)('/:id/nickname'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "setNickname", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Query)('order')),
    tslib_1.__param(2, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(3, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], IntegrationsController.prototype, "getSingleIntegration", null);
tslib_1.__decorate([
    (0, common_1.Get)('/social/:integration'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.CHANNEL]),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)('integration')),
    tslib_1.__param(1, (0, common_1.Query)('refresh')),
    tslib_1.__param(2, (0, common_1.Query)('externalUrl')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "getIntegrationUrl", null);
tslib_1.__decorate([
    (0, common_1.Post)('/:id/time'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, integration_time_dto_1.IntegrationTimeDto]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "setTime", null);
tslib_1.__decorate([
    (0, common_1.Post)('/function'),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, integration_function_dto_1.IntegrationFunctionDto]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "functionIntegration", null);
tslib_1.__decorate([
    (0, common_1.Post)('/article/:integration/connect'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.CHANNEL]),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('integration')),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, api_key_dto_1.ApiKeyDto]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "connectArticle", null);
tslib_1.__decorate([
    (0, common_1.Post)('/social/:integration/connect'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.CHANNEL]),
    (0, common_1.UseFilters)(new integration_missing_scopes_1.NotEnoughScopesFilter()),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('integration')),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, connect_integration_dto_1.ConnectIntegrationDto]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "connectSocialMedia", null);
tslib_1.__decorate([
    (0, common_1.Post)('/disable'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", void 0)
], IntegrationsController.prototype, "disableChannel", null);
tslib_1.__decorate([
    (0, common_1.Post)('/instagram/:id'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "saveInstagram", null);
tslib_1.__decorate([
    (0, common_1.Post)('/facebook/:id'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "saveFacebook", null);
tslib_1.__decorate([
    (0, common_1.Post)('/linkedin-page/:id'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "saveLinkedin", null);
tslib_1.__decorate([
    (0, common_1.Post)('/enable'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", void 0)
], IntegrationsController.prototype, "enableChannel", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "deleteChannel", null);
tslib_1.__decorate([
    (0, common_1.Get)('/plug/list'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "getPlugList", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:id/plugs'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "getPlugsByIntegrationId", null);
tslib_1.__decorate([
    (0, common_1.Post)('/:id/plugs'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, plug_dto_1.PlugDto]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "postPlugsByIntegrationId", null);
tslib_1.__decorate([
    (0, common_1.Put)('/plugs/:id/activate'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(2, (0, common_1.Body)('status')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Boolean]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "changePlugActivation", null);
tslib_1.__decorate([
    (0, common_1.Get)('/telegram/updates'),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsController.prototype, "getUpdates", null);
exports.IntegrationsController = IntegrationsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Integrations'),
    (0, common_1.Controller)('/integrations'),
    tslib_1.__metadata("design:paramtypes", [integration_manager_1.IntegrationManager,
        integration_service_1.IntegrationService,
        posts_service_1.PostsService])
], IntegrationsController);


/***/ }),
/* 168 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectIntegrationDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class ConnectIntegrationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { state: { required: true, type: () => String }, code: { required: true, type: () => String }, timezone: { required: true, type: () => String }, refresh: { required: false, type: () => String } };
    }
}
exports.ConnectIntegrationDto = ConnectIntegrationDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], ConnectIntegrationDto.prototype, "state", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], ConnectIntegrationDto.prototype, "code", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], ConnectIntegrationDto.prototype, "timezone", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], ConnectIntegrationDto.prototype, "refresh", void 0);


/***/ }),
/* 169 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiKeyDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class ApiKeyDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { api: { required: true, type: () => String, minLength: 4 } };
    }
}
exports.ApiKeyDto = ApiKeyDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4, {
        message: 'Must be at least 4 characters'
    }),
    tslib_1.__metadata("design:type", String)
], ApiKeyDto.prototype, "api", void 0);


/***/ }),
/* 170 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationFunctionDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class IntegrationFunctionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, id: { required: true, type: () => String }, data: { required: true, type: () => Object } };
    }
}
exports.IntegrationFunctionDto = IntegrationFunctionDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], IntegrationFunctionDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], IntegrationFunctionDto.prototype, "id", void 0);


/***/ }),
/* 171 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotEnoughScopesFilter = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const social_abstract_1 = __webpack_require__(62);
const axios_1 = __webpack_require__(51);
let NotEnoughScopesFilter = class NotEnoughScopesFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.status(axios_1.HttpStatusCode.NotAcceptable).json({ msg: exception.message });
    }
};
exports.NotEnoughScopesFilter = NotEnoughScopesFilter;
exports.NotEnoughScopesFilter = NotEnoughScopesFilter = tslib_1.__decorate([
    (0, common_1.Catch)(social_abstract_1.NotEnoughScopes)
], NotEnoughScopesFilter);


/***/ }),
/* 172 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationTimeDto = exports.IntegrationValidateTimeDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const class_transformer_1 = __webpack_require__(173);
class IntegrationValidateTimeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { time: { required: true, type: () => Number } };
    }
}
exports.IntegrationValidateTimeDto = IntegrationValidateTimeDto;
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], IntegrationValidateTimeDto.prototype, "time", void 0);
class IntegrationTimeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { time: { required: true, type: () => [(__webpack_require__(172).IntegrationValidateTimeDto)] } };
    }
}
exports.IntegrationTimeDto = IntegrationTimeDto;
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => IntegrationValidateTimeDto),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], IntegrationTimeDto.prototype, "time", void 0);


/***/ }),
/* 173 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 174 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlugDto = exports.FieldsDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const class_transformer_1 = __webpack_require__(173);
class FieldsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, value: { required: true, type: () => String } };
    }
}
exports.FieldsDto = FieldsDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], FieldsDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], FieldsDto.prototype, "value", void 0);
class PlugDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { func: { required: true, type: () => String }, fields: { required: true, type: () => [(__webpack_require__(174).FieldsDto)] } };
    }
}
exports.PlugDto = PlugDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], PlugDto.prototype, "func", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => FieldsDto),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", Array)
], PlugDto.prototype, "fields", void 0);


/***/ }),
/* 175 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const org_from_request_1 = __webpack_require__(153);
const stars_service_1 = __webpack_require__(36);
const permissions_ability_1 = __webpack_require__(154);
const permissions_service_1 = __webpack_require__(155);
const organization_service_1 = __webpack_require__(17);
const add_team_member_dto_1 = __webpack_require__(176);
const swagger_1 = __webpack_require__(3);
let SettingsController = class SettingsController {
    constructor(_starsService, _organizationService) {
        this._starsService = _starsService;
        this._organizationService = _organizationService;
    }
    async getConnectedGithubAccounts(org) {
        return {
            github: (await this._starsService.getGitHubRepositoriesByOrgId(org.id)).map((repo) => ({
                id: repo.id,
                login: repo.login,
            })),
        };
    }
    async addGitHub(org, code) {
        if (!code) {
            throw new Error('No code provided');
        }
        await this._starsService.addGitHub(org.id, code);
    }
    authUrl() {
        return {
            url: `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=${encodeURIComponent('user:email')}&redirect_uri=${encodeURIComponent(`${process.env.FRONTEND_URL}/settings`)}`,
        };
    }
    async getOrganizations(org, id) {
        return {
            organizations: await this._starsService.getOrganizations(org.id, id),
        };
    }
    async getRepositories(org, id, github) {
        return {
            repositories: await this._starsService.getRepositoriesOfOrganization(org.id, id, github),
        };
    }
    async updateGitHubLogin(org, id, login) {
        return this._starsService.updateGitHubLogin(org.id, id, login);
    }
    async deleteRepository(org, id) {
        return this._starsService.deleteRepository(org.id, id);
    }
    async getTeam(org) {
        return this._organizationService.getTeam(org.id);
    }
    async inviteTeamMember(org, body) {
        return this._organizationService.inviteTeamMember(org.id, body);
    }
    deleteTeamMember(org, id) {
        return this._organizationService.deleteTeamMember(org, id);
    }
};
exports.SettingsController = SettingsController;
tslib_1.__decorate([
    (0, common_1.Get)('/github'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.ADMIN]),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsController.prototype, "getConnectedGithubAccounts", null);
tslib_1.__decorate([
    (0, common_1.Post)('/github'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.ADMIN]),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)('code')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsController.prototype, "addGitHub", null);
tslib_1.__decorate([
    (0, common_1.Get)('/github/url'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.ADMIN]),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsController.prototype, "authUrl", null);
tslib_1.__decorate([
    (0, common_1.Get)('/organizations/:id'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.ADMIN]),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsController.prototype, "getOrganizations", null);
tslib_1.__decorate([
    (0, common_1.Get)('/organizations/:id/:github'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.ADMIN]),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__param(2, (0, common_1.Param)('github')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsController.prototype, "getRepositories", null);
tslib_1.__decorate([
    (0, common_1.Post)('/organizations/:id'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.ADMIN]),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__param(2, (0, common_1.Body)('login')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsController.prototype, "updateGitHubLogin", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/repository/:id'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.ADMIN]),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsController.prototype, "deleteRepository", null);
tslib_1.__decorate([
    (0, common_1.Get)('/team'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.TEAM_MEMBERS], [permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.ADMIN]),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsController.prototype, "getTeam", null);
tslib_1.__decorate([
    (0, common_1.Post)('/team'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.TEAM_MEMBERS], [permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.ADMIN]),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, add_team_member_dto_1.AddTeamMemberDto]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsController.prototype, "inviteTeamMember", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/team/:id'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.TEAM_MEMBERS], [permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.ADMIN]),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsController.prototype, "deleteTeamMember", null);
exports.SettingsController = SettingsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Settings'),
    (0, common_1.Controller)('/settings'),
    tslib_1.__metadata("design:paramtypes", [stars_service_1.StarsService,
        organization_service_1.OrganizationService])
], SettingsController);


/***/ }),
/* 176 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddTeamMemberDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class AddTeamMemberDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, role: { required: true, type: () => String, enum: ['USER', 'ADMIN'] }, sendEmail: { required: true, type: () => Boolean } };
    }
}
exports.AddTeamMemberDto = AddTeamMemberDto;
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.ValidateIf)((o) => o.sendEmail),
    tslib_1.__metadata("design:type", String)
], AddTeamMemberDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['USER', 'ADMIN']),
    tslib_1.__metadata("design:type", String)
], AddTeamMemberDto.prototype, "role", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], AddTeamMemberDto.prototype, "sendEmail", void 0);


/***/ }),
/* 177 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const posts_service_1 = __webpack_require__(99);
const org_from_request_1 = __webpack_require__(153);
const create_post_dto_1 = __webpack_require__(178);
const get_posts_dto_1 = __webpack_require__(191);
const stars_service_1 = __webpack_require__(36);
const permissions_ability_1 = __webpack_require__(154);
const permissions_service_1 = __webpack_require__(155);
const swagger_1 = __webpack_require__(3);
const messages_service_1 = __webpack_require__(104);
const generator_dto_1 = __webpack_require__(192);
const create_generated_posts_dto_1 = __webpack_require__(193);
const agent_graph_service_1 = __webpack_require__(194);
const user_from_request_1 = __webpack_require__(152);
const short_link_service_1 = __webpack_require__(117);
const create_tag_dto_1 = __webpack_require__(201);
let PostsController = class PostsController {
    constructor(_postsService, _starsService, _messagesService, _agentGraphService, _shortLinkService) {
        this._postsService = _postsService;
        this._starsService = _starsService;
        this._messagesService = _messagesService;
        this._agentGraphService = _agentGraphService;
        this._shortLinkService = _shortLinkService;
    }
    async getStatistics(org, id) {
        return this._postsService.getStatistics(org.id, id);
    }
    async shouldShortlink(body) {
        return { ask: this._shortLinkService.askShortLinkedin(body.messages) };
    }
    async getMarketplacePosts(org, id) {
        return this._messagesService.getMarketplaceAvailableOffers(org.id, id);
    }
    async createComment(org, user, id, body) {
        return this._postsService.createComment(org.id, user.id, id, body.comment);
    }
    async getTags(org) {
        return { tags: await this._postsService.getTags(org.id) };
    }
    async createTag(org, body) {
        return this._postsService.createTag(org.id, body);
    }
    async editTag(org, body, id) {
        return this._postsService.editTag(id, org.id, body);
    }
    async getPosts(org, query) {
        const posts = await this._postsService.getPosts(org.id, query);
        return {
            posts,
        };
    }
    async findSlot(org) {
        return { date: await this._postsService.findFreeDateTime(org.id) };
    }
    predictTrending() {
        return this._starsService.predictTrending();
    }
    oldPosts(org, date) {
        return this._postsService.getOldPosts(org.id, date);
    }
    getPost(org, id) {
        return this._postsService.getPost(org.id, id);
    }
    createPost(org, body) {
        console.log(JSON.stringify(body, null, 2));
        return this._postsService.createPost(org.id, body);
    }
    generatePostsDraft(org, body) {
        return this._postsService.generatePostsDraft(org.id, body);
    }
    async generatePosts(org, body, res) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        for await (const event of this._agentGraphService.start(org.id, body)) {
            res.write(JSON.stringify(event) + '\n');
        }
        res.end();
    }
    deletePost(org, group) {
        return this._postsService.deletePost(org.id, group);
    }
    changeDate(org, id, date) {
        return this._postsService.changeDate(org.id, id, date);
    }
};
exports.PostsController = PostsController;
tslib_1.__decorate([
    (0, common_1.Get)('/:id/statistics'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsController.prototype, "getStatistics", null);
tslib_1.__decorate([
    (0, common_1.Post)('/should-shortlink'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsController.prototype, "shouldShortlink", null);
tslib_1.__decorate([
    (0, common_1.Get)('/marketplace/:id?'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsController.prototype, "getMarketplacePosts", null);
tslib_1.__decorate([
    (0, common_1.Post)('/:id/comments'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(2, (0, common_1.Param)('id')),
    tslib_1.__param(3, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsController.prototype, "createComment", null);
tslib_1.__decorate([
    (0, common_1.Get)('/tags'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsController.prototype, "getTags", null);
tslib_1.__decorate([
    (0, common_1.Post)('/tags'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, create_tag_dto_1.CreateTagDto]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsController.prototype, "createTag", null);
tslib_1.__decorate([
    (0, common_1.Put)('/tags/:id'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, create_tag_dto_1.CreateTagDto, String]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsController.prototype, "editTag", null);
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, get_posts_dto_1.GetPostsDto]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsController.prototype, "getPosts", null);
tslib_1.__decorate([
    (0, common_1.Get)('/find-slot'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsController.prototype, "findSlot", null);
tslib_1.__decorate([
    (0, common_1.Get)('/predict-trending'),
    openapi.ApiResponse({ status: 200, type: [String] }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], PostsController.prototype, "predictTrending", null);
tslib_1.__decorate([
    (0, common_1.Get)('/old'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Query)('date')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", void 0)
], PostsController.prototype, "oldPosts", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", void 0)
], PostsController.prototype, "getPost", null);
tslib_1.__decorate([
    (0, common_1.Post)('/'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.POSTS_PER_MONTH]),
    openapi.ApiResponse({ status: 201, type: [Object] }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, create_post_dto_1.CreatePostDto]),
    tslib_1.__metadata("design:returntype", void 0)
], PostsController.prototype, "createPost", null);
tslib_1.__decorate([
    (0, common_1.Post)('/generator/draft'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.POSTS_PER_MONTH]),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, create_generated_posts_dto_1.CreateGeneratedPostsDto]),
    tslib_1.__metadata("design:returntype", void 0)
], PostsController.prototype, "generatePostsDraft", null);
tslib_1.__decorate([
    (0, common_1.Post)('/generator'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.POSTS_PER_MONTH]),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Res)({ passthrough: false })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, generator_dto_1.GeneratorDto, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostsController.prototype, "generatePosts", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:group'),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('group')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", void 0)
], PostsController.prototype, "deletePost", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id/date'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__param(2, (0, common_1.Body)('date')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, String]),
    tslib_1.__metadata("design:returntype", void 0)
], PostsController.prototype, "changeDate", null);
exports.PostsController = PostsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Posts'),
    (0, common_1.Controller)('/posts'),
    tslib_1.__metadata("design:paramtypes", [posts_service_1.PostsService,
        stars_service_1.StarsService,
        messages_service_1.MessagesService,
        agent_graph_service_1.AgentGraphService,
        short_link_service_1.ShortLinkService])
], PostsController);


/***/ }),
/* 178 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePostDto = exports.Post = exports.PostContent = exports.Integration = exports.EmptySettings = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const class_transformer_1 = __webpack_require__(173);
const dev_to_settings_dto_1 = __webpack_require__(179);
const media_dto_1 = __webpack_require__(158);
const medium_settings_dto_1 = __webpack_require__(181);
const hashnode_settings_dto_1 = __webpack_require__(182);
const reddit_dto_1 = __webpack_require__(183);
const youtube_settings_dto_1 = __webpack_require__(184);
const pinterest_dto_1 = __webpack_require__(185);
const dribbble_dto_1 = __webpack_require__(186);
const tiktok_dto_1 = __webpack_require__(187);
const discord_dto_1 = __webpack_require__(188);
const slack_dto_1 = __webpack_require__(189);
const lemmy_dto_1 = __webpack_require__(190);
class EmptySettings {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.EmptySettings = EmptySettings;
class Integration {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String } };
    }
}
exports.Integration = Integration;
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], Integration.prototype, "id", void 0);
class PostContent {
    static _OPENAPI_METADATA_FACTORY() {
        return { content: { required: true, type: () => String, minLength: 6 }, id: { required: true, type: () => String }, image: { required: true, type: () => [(__webpack_require__(158).MediaDto)] } };
    }
}
exports.PostContent = PostContent;
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    tslib_1.__metadata("design:type", String)
], PostContent.prototype, "content", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PostContent.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => media_dto_1.MediaDto),
    (0, class_validator_1.ValidateNested)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], PostContent.prototype, "image", void 0);
class Post {
    static _OPENAPI_METADATA_FACTORY() {
        return { integration: { required: true, type: () => (__webpack_require__(178).Integration) }, value: { required: true, type: () => [(__webpack_require__(178).PostContent)] }, group: { required: true, type: () => String }, settings: { required: true, type: () => Object } };
    }
}
exports.Post = Post;
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => Integration),
    (0, class_validator_1.ValidateNested)(),
    tslib_1.__metadata("design:type", Integration)
], Post.prototype, "integration", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => PostContent),
    (0, class_validator_1.ValidateNested)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], Post.prototype, "value", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "group", void 0);
tslib_1.__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => EmptySettings, {
        keepDiscriminatorProperty: false,
        discriminator: {
            property: '__type',
            subTypes: [
                { value: dev_to_settings_dto_1.DevToSettingsDto, name: 'devto' },
                { value: medium_settings_dto_1.MediumSettingsDto, name: 'medium' },
                { value: hashnode_settings_dto_1.HashnodeSettingsDto, name: 'hashnode' },
                { value: reddit_dto_1.RedditSettingsDto, name: 'reddit' },
                { value: lemmy_dto_1.LemmySettingsDto, name: 'lemmy' },
                { value: youtube_settings_dto_1.YoutubeSettingsDto, name: 'youtube' },
                { value: pinterest_dto_1.PinterestSettingsDto, name: 'pinterest' },
                { value: dribbble_dto_1.DribbbleDto, name: 'dribbble' },
                { value: tiktok_dto_1.TikTokDto, name: 'tiktok' },
                { value: discord_dto_1.DiscordDto, name: 'discord' },
                { value: slack_dto_1.SlackDto, name: 'slack' },
            ],
        },
    }),
    tslib_1.__metadata("design:type", Object)
], Post.prototype, "settings", void 0);
class Tags {
    static _OPENAPI_METADATA_FACTORY() {
        return { value: { required: true, type: () => String }, label: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], Tags.prototype, "value", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], Tags.prototype, "label", void 0);
class CreatePostDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => Object, enum: ['draft', 'schedule', 'now'] }, order: { required: true, type: () => String }, shortLink: { required: true, type: () => Boolean }, inter: { required: false, type: () => Number }, date: { required: true, type: () => String }, tags: { required: true, type: () => [Tags] }, posts: { required: true, type: () => [(__webpack_require__(178).Post)] } };
    }
}
exports.CreatePostDto = CreatePostDto;
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsIn)(['draft', 'schedule', 'now']),
    tslib_1.__metadata("design:type", String)
], CreatePostDto.prototype, "type", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreatePostDto.prototype, "order", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], CreatePostDto.prototype, "shortLink", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreatePostDto.prototype, "inter", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", String)
], CreatePostDto.prototype, "date", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], CreatePostDto.prototype, "tags", void 0);
tslib_1.__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.type !== 'draft'),
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => Post),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    tslib_1.__metadata("design:type", Array)
], CreatePostDto.prototype, "posts", void 0);


/***/ }),
/* 179 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DevToSettingsDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const media_dto_1 = __webpack_require__(158);
const class_transformer_1 = __webpack_require__(173);
class DevToSettingsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String, minLength: 2 }, main_image: { required: false, type: () => (__webpack_require__(158).MediaDto) }, canonical: { required: false, type: () => String, pattern: "/^(|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})$/" }, organization: { required: false, type: () => String }, tags: { required: true, type: () => [(__webpack_require__(180).DevToTagsSettingsDto)] } };
    }
}
exports.DevToSettingsDto = DevToSettingsDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], DevToSettingsDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => media_dto_1.MediaDto),
    tslib_1.__metadata("design:type", media_dto_1.MediaDto)
], DevToSettingsDto.prototype, "main_image", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.canonical && o.canonical.indexOf('(post:') === -1),
    (0, class_validator_1.Matches)(/^(|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/, {
        message: 'Invalid URL',
    }),
    tslib_1.__metadata("design:type", String)
], DevToSettingsDto.prototype, "canonical", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], DevToSettingsDto.prototype, "organization", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(4),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Array)
], DevToSettingsDto.prototype, "tags", void 0);


/***/ }),
/* 180 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DevToTagsSettingsDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class DevToTagsSettingsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { value: { required: true, type: () => Number }, label: { required: true, type: () => String } };
    }
}
exports.DevToTagsSettingsDto = DevToTagsSettingsDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], DevToTagsSettingsDto.prototype, "value", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], DevToTagsSettingsDto.prototype, "label", void 0);


/***/ }),
/* 181 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediumSettingsDto = exports.MediumTagsSettings = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class MediumTagsSettings {
    static _OPENAPI_METADATA_FACTORY() {
        return { value: { required: true, type: () => String }, label: { required: true, type: () => String } };
    }
}
exports.MediumTagsSettings = MediumTagsSettings;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], MediumTagsSettings.prototype, "value", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], MediumTagsSettings.prototype, "label", void 0);
class MediumSettingsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String, minLength: 2 }, subtitle: { required: true, type: () => String, minLength: 2 }, canonical: { required: false, type: () => String, pattern: "/^(|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})$/" }, publication: { required: false, type: () => String }, tags: { required: true, type: () => [(__webpack_require__(181).MediumTagsSettings)] } };
    }
}
exports.MediumSettingsDto = MediumSettingsDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], MediumSettingsDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], MediumSettingsDto.prototype, "subtitle", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.canonical && o.canonical.indexOf('(post:') === -1),
    (0, class_validator_1.Matches)(/^(|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/, {
        message: 'Invalid URL',
    }),
    tslib_1.__metadata("design:type", String)
], MediumSettingsDto.prototype, "canonical", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], MediumSettingsDto.prototype, "publication", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(4),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Array)
], MediumSettingsDto.prototype, "tags", void 0);


/***/ }),
/* 182 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HashnodeSettingsDto = exports.HashnodeTagsSettings = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const class_transformer_1 = __webpack_require__(173);
const media_dto_1 = __webpack_require__(158);
class HashnodeTagsSettings {
    static _OPENAPI_METADATA_FACTORY() {
        return { value: { required: true, type: () => String }, label: { required: true, type: () => String } };
    }
}
exports.HashnodeTagsSettings = HashnodeTagsSettings;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], HashnodeTagsSettings.prototype, "value", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], HashnodeTagsSettings.prototype, "label", void 0);
class HashnodeSettingsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String, minLength: 6 }, subtitle: { required: true, type: () => String, minLength: 2 }, main_image: { required: false, type: () => (__webpack_require__(158).MediaDto) }, canonical: { required: false, type: () => String, pattern: "/^(|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})$/" }, publication: { required: false, type: () => String }, tags: { required: true, type: () => [(__webpack_require__(182).HashnodeTagsSettings)] } };
    }
}
exports.HashnodeSettingsDto = HashnodeSettingsDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], HashnodeSettingsDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], HashnodeSettingsDto.prototype, "subtitle", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => media_dto_1.MediaDto),
    tslib_1.__metadata("design:type", media_dto_1.MediaDto)
], HashnodeSettingsDto.prototype, "main_image", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => o.canonical && o.canonical.indexOf('(post:') === -1),
    (0, class_validator_1.Matches)(/^(|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/, {
        message: 'Invalid URL',
    }),
    tslib_1.__metadata("design:type", String)
], HashnodeSettingsDto.prototype, "canonical", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], HashnodeSettingsDto.prototype, "publication", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    tslib_1.__metadata("design:type", Array)
], HashnodeSettingsDto.prototype, "tags", void 0);


/***/ }),
/* 183 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedditSettingsDto = exports.RedditSettingsValueDto = exports.RedditSettingsDtoInner = exports.RedditFlairDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const media_dto_1 = __webpack_require__(158);
const class_transformer_1 = __webpack_require__(173);
class RedditFlairDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String } };
    }
}
exports.RedditFlairDto = RedditFlairDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], RedditFlairDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], RedditFlairDto.prototype, "name", void 0);
class RedditSettingsDtoInner {
    static _OPENAPI_METADATA_FACTORY() {
        return { subreddit: { required: true, type: () => String, minLength: 2 }, title: { required: true, type: () => String, minLength: 2 }, type: { required: true, type: () => String, minLength: 2 }, url: { required: true, type: () => String, pattern: "/^(|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})$/" }, is_flair_required: { required: true, type: () => Boolean }, flair: { required: true, type: () => (__webpack_require__(183).RedditFlairDto) }, media: { required: true, type: () => [(__webpack_require__(158).MediaDto)] } };
    }
}
exports.RedditSettingsDtoInner = RedditSettingsDtoInner;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], RedditSettingsDtoInner.prototype, "subreddit", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], RedditSettingsDtoInner.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], RedditSettingsDtoInner.prototype, "type", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateIf)((o) => o.type === 'link' && o?.url?.indexOf('(post:') === -1),
    (0, class_validator_1.Matches)(/^(|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/, {
        message: 'Invalid URL',
    }),
    tslib_1.__metadata("design:type", String)
], RedditSettingsDtoInner.prototype, "url", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", Boolean)
], RedditSettingsDtoInner.prototype, "is_flair_required", void 0);
tslib_1.__decorate([
    (0, class_validator_1.ValidateIf)((e) => e.is_flair_required),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    tslib_1.__metadata("design:type", RedditFlairDto)
], RedditSettingsDtoInner.prototype, "flair", void 0);
tslib_1.__decorate([
    (0, class_validator_1.ValidateIf)((e) => e.type === 'media'),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => media_dto_1.MediaDto),
    (0, class_validator_1.ArrayMinSize)(1),
    tslib_1.__metadata("design:type", Array)
], RedditSettingsDtoInner.prototype, "media", void 0);
class RedditSettingsValueDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { value: { required: true, type: () => (__webpack_require__(183).RedditSettingsDtoInner) } };
    }
}
exports.RedditSettingsValueDto = RedditSettingsValueDto;
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => RedditSettingsDtoInner),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    tslib_1.__metadata("design:type", RedditSettingsDtoInner)
], RedditSettingsValueDto.prototype, "value", void 0);
class RedditSettingsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { subreddit: { required: true, type: () => [(__webpack_require__(183).RedditSettingsValueDto)] } };
    }
}
exports.RedditSettingsDto = RedditSettingsDto;
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => RedditSettingsValueDto),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    tslib_1.__metadata("design:type", Array)
], RedditSettingsDto.prototype, "subreddit", void 0);


/***/ }),
/* 184 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YoutubeSettingsDto = exports.YoutubeTagsSettings = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const media_dto_1 = __webpack_require__(158);
const class_transformer_1 = __webpack_require__(173);
class YoutubeTagsSettings {
    static _OPENAPI_METADATA_FACTORY() {
        return { value: { required: true, type: () => String }, label: { required: true, type: () => String } };
    }
}
exports.YoutubeTagsSettings = YoutubeTagsSettings;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], YoutubeTagsSettings.prototype, "value", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], YoutubeTagsSettings.prototype, "label", void 0);
class YoutubeSettingsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String, minLength: 2 }, type: { required: true, type: () => String, enum: ['public', 'private', 'unlisted'] }, thumbnail: { required: false, type: () => (__webpack_require__(158).MediaDto) }, tags: { required: true, type: () => [(__webpack_require__(184).YoutubeTagsSettings)] } };
    }
}
exports.YoutubeSettingsDto = YoutubeSettingsDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], YoutubeSettingsDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsIn)(['public', 'private', 'unlisted']),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], YoutubeSettingsDto.prototype, "type", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => media_dto_1.MediaDto),
    tslib_1.__metadata("design:type", media_dto_1.MediaDto)
], YoutubeSettingsDto.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Array)
], YoutubeSettingsDto.prototype, "tags", void 0);


/***/ }),
/* 185 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PinterestSettingsDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class PinterestSettingsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, link: { required: true, type: () => String }, dominant_color: { required: true, type: () => String }, board: { required: true, type: () => String, minLength: 1 } };
    }
}
exports.PinterestSettingsDto = PinterestSettingsDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], PinterestSettingsDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], PinterestSettingsDto.prototype, "link", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], PinterestSettingsDto.prototype, "dominant_color", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)({
        message: 'Board is required'
    }),
    (0, class_validator_1.IsString)({
        message: 'Board is required'
    }),
    (0, class_validator_1.MinLength)(1, {
        message: 'Board is required'
    }),
    tslib_1.__metadata("design:type", String)
], PinterestSettingsDto.prototype, "board", void 0);


/***/ }),
/* 186 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DribbbleDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class DribbbleDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String, minLength: 1 }, team: { required: true, type: () => String } };
    }
}
exports.DribbbleDto = DribbbleDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.MinLength)(1, {
        message: 'Title is required',
    }),
    tslib_1.__metadata("design:type", String)
], DribbbleDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], DribbbleDto.prototype, "team", void 0);


/***/ }),
/* 187 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TikTokDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class TikTokDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { privacy_level: { required: true, type: () => Object, enum: [
                    'PUBLIC_TO_EVERYONE',
                    'MUTUAL_FOLLOW_FRIENDS',
                    'FOLLOWER_OF_CREATOR',
                    'SELF_ONLY',
                ] }, duet: { required: true, type: () => Boolean }, stitch: { required: true, type: () => Boolean }, comment: { required: true, type: () => Boolean }, brand_content_toggle: { required: true, type: () => Boolean }, brand_organic_toggle: { required: true, type: () => Boolean }, isValidVideo: { required: true, type: () => Boolean, enum: ['true'] }, content_posting_method: { required: true, type: () => Object, enum: ['DIRECT_POST', 'UPLOAD'] } };
    }
}
exports.TikTokDto = TikTokDto;
tslib_1.__decorate([
    (0, class_validator_1.IsIn)([
        'PUBLIC_TO_EVERYONE',
        'MUTUAL_FOLLOW_FRIENDS',
        'FOLLOWER_OF_CREATOR',
        'SELF_ONLY',
    ]),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], TikTokDto.prototype, "privacy_level", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], TikTokDto.prototype, "duet", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], TikTokDto.prototype, "stitch", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], TikTokDto.prototype, "comment", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], TikTokDto.prototype, "brand_content_toggle", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], TikTokDto.prototype, "brand_organic_toggle", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsIn)(['true']),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", Boolean)
], TikTokDto.prototype, "isValidVideo", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsIn)(['DIRECT_POST', 'UPLOAD']),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], TikTokDto.prototype, "content_posting_method", void 0);


/***/ }),
/* 188 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiscordDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class DiscordDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { channel: { required: true, type: () => String, minLength: 1 } };
    }
}
exports.DiscordDto = DiscordDto;
tslib_1.__decorate([
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], DiscordDto.prototype, "channel", void 0);


/***/ }),
/* 189 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SlackDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class SlackDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { channel: { required: true, type: () => String, minLength: 1 } };
    }
}
exports.SlackDto = SlackDto;
tslib_1.__decorate([
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], SlackDto.prototype, "channel", void 0);


/***/ }),
/* 190 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LemmySettingsDto = exports.LemmySettingsValueDto = exports.LemmySettingsDtoInner = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const class_transformer_1 = __webpack_require__(173);
class LemmySettingsDtoInner {
    static _OPENAPI_METADATA_FACTORY() {
        return { subreddit: { required: true, type: () => String, minLength: 2 }, id: { required: true, type: () => String }, title: { required: true, type: () => String, minLength: 2 }, url: { required: true, type: () => String } };
    }
}
exports.LemmySettingsDtoInner = LemmySettingsDtoInner;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], LemmySettingsDtoInner.prototype, "subreddit", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], LemmySettingsDtoInner.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], LemmySettingsDtoInner.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.url),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], LemmySettingsDtoInner.prototype, "url", void 0);
class LemmySettingsValueDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { value: { required: true, type: () => (__webpack_require__(190).LemmySettingsDtoInner) } };
    }
}
exports.LemmySettingsValueDto = LemmySettingsValueDto;
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => LemmySettingsDtoInner),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    tslib_1.__metadata("design:type", LemmySettingsDtoInner)
], LemmySettingsValueDto.prototype, "value", void 0);
class LemmySettingsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { subreddit: { required: true, type: () => [(__webpack_require__(190).LemmySettingsValueDto)] } };
    }
}
exports.LemmySettingsDto = LemmySettingsDto;
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => LemmySettingsValueDto),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    tslib_1.__metadata("design:type", Array)
], LemmySettingsDto.prototype, "subreddit", void 0);


/***/ }),
/* 191 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetPostsDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_transformer_1 = __webpack_require__(173);
const class_validator_1 = __webpack_require__(134);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
class GetPostsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { week: { required: true, type: () => Number, minimum: 1, maximum: 52 }, day: { required: true, type: () => Number, minimum: 0, maximum: 6 }, display: { required: true, type: () => Object, enum: ['day', 'week', 'month'] }, month: { required: true, type: () => Number, minimum: 1, maximum: 12 }, year: { required: true, type: () => Number, minimum: 2022, maximum: (0, dayjs_1.default)().add(10, 'year').year() }, customer: { required: true, type: () => String } };
    }
}
exports.GetPostsDto = GetPostsDto;
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(52),
    (0, class_validator_1.Min)(1),
    tslib_1.__metadata("design:type", Number)
], GetPostsDto.prototype, "week", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(6),
    (0, class_validator_1.Min)(0),
    tslib_1.__metadata("design:type", Number)
], GetPostsDto.prototype, "day", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsIn)(['day', 'week', 'month']),
    tslib_1.__metadata("design:type", String)
], GetPostsDto.prototype, "display", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(12),
    (0, class_validator_1.Min)(1),
    tslib_1.__metadata("design:type", Number)
], GetPostsDto.prototype, "month", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)((0, dayjs_1.default)().add(10, 'year').year()),
    (0, class_validator_1.Min)(2022),
    tslib_1.__metadata("design:type", Number)
], GetPostsDto.prototype, "year", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetPostsDto.prototype, "customer", void 0);


/***/ }),
/* 192 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeneratorDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class GeneratorDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { research: { required: true, type: () => String, minLength: 10 }, isPicture: { required: true, type: () => Boolean }, format: { required: true, type: () => Object, enum: ['one_short', 'one_long', 'thread_short', 'thread_long'] }, tone: { required: true, type: () => Object, enum: ['personal', 'company'] } };
    }
}
exports.GeneratorDto = GeneratorDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10),
    tslib_1.__metadata("design:type", String)
], GeneratorDto.prototype, "research", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], GeneratorDto.prototype, "isPicture", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['one_short', 'one_long', 'thread_short', 'thread_long']),
    tslib_1.__metadata("design:type", String)
], GeneratorDto.prototype, "format", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['personal', 'company']),
    tslib_1.__metadata("design:type", String)
], GeneratorDto.prototype, "tone", void 0);


/***/ }),
/* 193 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateGeneratedPostsDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const class_transformer_1 = __webpack_require__(173);
class InnerPost {
    static _OPENAPI_METADATA_FACTORY() {
        return { post: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], InnerPost.prototype, "post", void 0);
class PostGroup {
    static _OPENAPI_METADATA_FACTORY() {
        return { list: { required: true, type: () => [InnerPost] } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => InnerPost),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", Array)
], PostGroup.prototype, "list", void 0);
class CreateGeneratedPostsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { posts: { required: true, type: () => [PostGroup] }, week: { required: true, type: () => Number }, year: { required: true, type: () => Number }, url: { required: true, type: () => String }, postId: { required: true, type: () => String } };
    }
}
exports.CreateGeneratedPostsDto = CreateGeneratedPostsDto;
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PostGroup),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", Array)
], CreateGeneratedPostsDto.prototype, "posts", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", Number)
], CreateGeneratedPostsDto.prototype, "week", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", Number)
], CreateGeneratedPostsDto.prototype, "year", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateIf)((o) => !o.url),
    tslib_1.__metadata("design:type", String)
], CreateGeneratedPostsDto.prototype, "url", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateIf)((o) => !o.url),
    tslib_1.__metadata("design:type", String)
], CreateGeneratedPostsDto.prototype, "postId", void 0);


/***/ }),
/* 194 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AgentGraphService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgentGraphService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const messages_1 = __webpack_require__(195);
const langgraph_1 = __webpack_require__(196);
const openai_1 = __webpack_require__(197);
const tavily_search_1 = __webpack_require__(198);
const prebuilt_1 = __webpack_require__(199);
const prompts_1 = __webpack_require__(200);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(32));
const posts_service_1 = __webpack_require__(99);
const zod_1 = __webpack_require__(116);
const media_service_1 = __webpack_require__(111);
const upload_factory_1 = __webpack_require__(45);
const tools = !process.env.TAVILY_API_KEY ? [] : [new tavily_search_1.TavilySearchResults({ maxResults: 3 })];
const toolNode = new prebuilt_1.ToolNode(tools);
const model = new openai_1.ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'sk-proj-',
    model: 'gpt-4o-2024-08-06',
    temperature: 0.7,
});
const dalle = new openai_1.DallEAPIWrapper({
    apiKey: process.env.OPENAI_API_KEY || 'sk-proj-',
    model: 'dall-e-3',
});
const category = zod_1.z.object({
    category: zod_1.z.string().describe('The category for the post'),
});
const topic = zod_1.z.object({
    topic: zod_1.z.string().describe('The topic for the post'),
});
const hook = zod_1.z.object({
    hook: zod_1.z
        .string()
        .describe('Hook for the new post, don\'t take it from "the request of the user"'),
});
const contentZod = (isPicture, format) => {
    const content = zod_1.z.object({
        content: zod_1.z.string().describe('Content for the new post'),
        website: zod_1.z
            .string()
            .optional()
            .describe("Website for the new post if exists, If one of the post present a brand, website link must be to the root domain of the brand or don't include it, website url should contain the brand name"),
        ...(isPicture
            ? {
                prompt: zod_1.z
                    .string()
                    .describe("Prompt to generate a picture for this post later, make sure it doesn't contain brand names and make it very descriptive in terms of style"),
            }
            : {}),
    });
    return zod_1.z.object({
        content: format === 'one_short' || format === 'one_long'
            ? content
            : zod_1.z.array(content).min(2).describe(`Content for the new post`),
    });
};
let AgentGraphService = AgentGraphService_1 = class AgentGraphService {
    constructor(_postsService, _mediaService) {
        this._postsService = _postsService;
        this._mediaService = _mediaService;
        this.storage = upload_factory_1.UploadFactory.createStorage();
    }
    async startCall(state) {
        const runTools = model.bindTools(tools);
        const response = await prompts_1.ChatPromptTemplate.fromTemplate(`
    Today is ${(0, dayjs_1.default)().format()}, You are an assistant that gets a social media post or requests for a social media post.
    You research should be on the most possible recent data.
    You concat the text of the request together with an internet research based on the text.
    {text}
    `)
            .pipe(runTools)
            .invoke({
            text: state.messages[state.messages.length - 1].content,
        });
        return { messages: [response] };
    }
    async saveResearch(state) {
        const content = state.messages.filter((f) => f instanceof messages_1.ToolMessage);
        return { fresearch: content };
    }
    async findCategories(state) {
        const allCategories = await this._postsService.findAllExistingCategories();
        const structuredOutput = model.withStructuredOutput(category);
        const { category: outputCategory } = await prompts_1.ChatPromptTemplate.fromTemplate(`
        You are an assistant that gets a text that will be later summarized into a social media post
        and classify it to one of the following categories: {categories}
        text: {text}
      `)
            .pipe(structuredOutput)
            .invoke({
            categories: allCategories.map((p) => p.category).join(', '),
            text: state.fresearch,
        });
        return {
            category: outputCategory,
        };
    }
    async findTopic(state) {
        const allTopics = await this._postsService.findAllExistingTopicsOfCategory(state?.category);
        if (allTopics.length === 0) {
            return { topic: null };
        }
        const structuredOutput = model.withStructuredOutput(topic);
        const { topic: outputTopic } = await prompts_1.ChatPromptTemplate.fromTemplate(`
        You are an assistant that gets a text that will be later summarized into a social media post
        and classify it to one of the following topics: {topics}
        text: {text}
      `)
            .pipe(structuredOutput)
            .invoke({
            topics: allTopics.map((p) => p.topic).join(', '),
            text: state.fresearch,
        });
        return {
            topic: outputTopic,
        };
    }
    async findPopularPosts(state) {
        const popularPosts = await this._postsService.findPopularPosts(state.category, state.topic);
        return { popularPosts };
    }
    async generateHook(state) {
        const structuredOutput = model.withStructuredOutput(hook);
        const { hook: outputHook } = await prompts_1.ChatPromptTemplate.fromTemplate(`
        You are an assistant that gets content for a social media post, and generate only the hook.
        The hook is the 1-2 sentences of the post that will be used to grab the attention of the reader.
        You will be provided existing hooks you should use as inspiration.
        - Avoid weird hook that starts with "Discover the secret...", "The best...", "The most...", "The top..."
        - Make sure it sounds ${state.tone}
        - Use ${state.tone === 'personal' ? '1st' : '3rd'} person mode
        - Make sure it's engaging
        - Don't be cringy
        - Use simple english
        - Make sure you add "\n" between the lines
        - Don't take the hook from "request of the user"

        <!-- BEGIN request of the user -->
        {request}
        <!-- END request of the user -->
        
        <!-- BEGIN existing hooks -->
        {hooks}
        <!-- END existing hooks -->
        
        <!-- BEGIN current content -->
        {text}
        <!-- END current content -->
       
      `)
            .pipe(structuredOutput)
            .invoke({
            request: state.messages[0].content,
            hooks: state.popularPosts.map((p) => p.hook).join('\n'),
            text: state.fresearch,
        });
        return {
            hook: outputHook,
        };
    }
    async generateContent(state) {
        const structuredOutput = model.withStructuredOutput(contentZod(!!state.isPicture, state.format));
        const { content: outputContent } = await prompts_1.ChatPromptTemplate.fromTemplate(`
        You are an assistant that gets existing hook of a social media, content and generate only the content.
        - Don't add any hashtags
        - Make sure it sounds ${state.tone}
        - Use ${state.tone === 'personal' ? '1st' : '3rd'} person mode
        - ${state.format === 'one_short' || state.format === 'thread_short'
            ? 'Post should be maximum 200 chars to fit twitter'
            : 'Post should be long'}
        - ${state.format === 'one_short' || state.format === 'one_long'
            ? 'Post should have only 1 item'
            : 'Post should have minimum 2 items'}
        - Use the hook as inspiration
        - Make sure it's engaging
        - Don't be cringy
        - Use simple english
        - The Content should not contain the hook
        - Try to put some call to action at the end of the post
        - Make sure you add "\n" between the lines
        - Add "\n" after every "."
        
        Hook:
        {hook}
        
        User request:
        {request}
        
        current content information:
        {information}
      `)
            .pipe(structuredOutput)
            .invoke({
            hook: state.hook,
            request: state.messages[0].content,
            information: state.fresearch,
        });
        return {
            content: outputContent,
        };
    }
    async fixArray(state) {
        if (state.format === 'one_short' || state.format === 'one_long') {
            return {
                content: [state.content],
            };
        }
        return {};
    }
    async generatePictures(state) {
        if (!state.isPicture) {
            return {};
        }
        const newContent = await Promise.all((state.content || []).map(async (p) => {
            const image = await dalle.invoke(p.prompt);
            return {
                ...p,
                image,
            };
        }));
        return {
            content: newContent,
        };
    }
    async uploadPictures(state) {
        const all = await Promise.all((state.content || []).map(async (p) => {
            if (p.image) {
                const upload = await this.storage.uploadSimple(p.image);
                const name = upload.split('/').pop();
                const uploadWithId = await this._mediaService.saveFile(state.orgId, name, upload);
                return {
                    ...p,
                    image: uploadWithId,
                };
            }
            return p;
        }));
        return { content: all };
    }
    async isGeneratePicture(state) {
        if (state.isPicture) {
            return 'generate-picture';
        }
        return 'post-time';
    }
    async postDateTime(state) {
        return { date: await this._postsService.findFreeDateTime(state.orgId) };
    }
    start(orgId, body) {
        const state = AgentGraphService_1.state();
        const workflow = state
            .addNode('agent', this.startCall.bind(this))
            .addNode('research', toolNode)
            .addNode('save-research', this.saveResearch.bind(this))
            .addNode('find-category', this.findCategories.bind(this))
            .addNode('find-topic', this.findTopic.bind(this))
            .addNode('find-popular-posts', this.findPopularPosts.bind(this))
            .addNode('generate-hook', this.generateHook.bind(this))
            .addNode('generate-content', this.generateContent.bind(this))
            .addNode('generate-content-fix', this.fixArray.bind(this))
            .addNode('generate-picture', this.generatePictures.bind(this))
            .addNode('upload-pictures', this.uploadPictures.bind(this))
            .addNode('post-time', this.postDateTime.bind(this))
            .addEdge(langgraph_1.START, 'agent')
            .addEdge('agent', 'research')
            .addEdge('research', 'save-research')
            .addEdge('save-research', 'find-category')
            .addEdge('find-category', 'find-topic')
            .addEdge('find-topic', 'find-popular-posts')
            .addEdge('find-popular-posts', 'generate-hook')
            .addEdge('generate-hook', 'generate-content')
            .addEdge('generate-content', 'generate-content-fix')
            .addConditionalEdges('generate-content-fix', this.isGeneratePicture.bind(this))
            .addEdge('generate-picture', 'upload-pictures')
            .addEdge('upload-pictures', 'post-time')
            .addEdge('post-time', langgraph_1.END);
        const app = workflow.compile();
        return app.streamEvents({
            messages: [new messages_1.HumanMessage(body.research)],
            isPicture: body.isPicture,
            format: body.format,
            tone: body.tone,
            orgId,
        }, {
            streamMode: 'values',
            version: 'v2',
        });
    }
};
exports.AgentGraphService = AgentGraphService;
AgentGraphService.state = () => new langgraph_1.StateGraph({
    channels: {
        messages: {
            reducer: (currentState, updateValue) => currentState.concat(updateValue),
            default: () => [],
        },
        fresearch: null,
        format: null,
        tone: null,
        question: null,
        orgId: null,
        hook: null,
        content: null,
        date: null,
        category: null,
        popularPosts: null,
        topic: null,
        isPicture: null,
    },
});
exports.AgentGraphService = AgentGraphService = AgentGraphService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [posts_service_1.PostsService,
        media_service_1.MediaService])
], AgentGraphService);


/***/ }),
/* 195 */
/***/ ((module) => {

module.exports = require("@langchain/core/messages");

/***/ }),
/* 196 */
/***/ ((module) => {

module.exports = require("@langchain/langgraph");

/***/ }),
/* 197 */
/***/ ((module) => {

module.exports = require("@langchain/openai");

/***/ }),
/* 198 */
/***/ ((module) => {

module.exports = require("@langchain/community/tools/tavily_search");

/***/ }),
/* 199 */
/***/ ((module) => {

module.exports = require("@langchain/langgraph/prebuilt");

/***/ }),
/* 200 */
/***/ ((module) => {

module.exports = require("@langchain/core/prompts");

/***/ }),
/* 201 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTagDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class CreateTagDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, color: { required: true, type: () => String } };
    }
}
exports.CreateTagDto = CreateTagDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTagDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTagDto.prototype, "color", void 0);


/***/ }),
/* 202 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const org_from_request_1 = __webpack_require__(153);
const media_service_1 = __webpack_require__(111);
const swagger_1 = __webpack_require__(3);
const r2_uploader_1 = tslib_1.__importDefault(__webpack_require__(203));
const platform_express_1 = __webpack_require__(205);
const custom_upload_validation_1 = __webpack_require__(206);
const subscription_service_1 = __webpack_require__(40);
const upload_factory_1 = __webpack_require__(45);
let MediaController = class MediaController {
    constructor(_mediaService, _subscriptionService) {
        this._mediaService = _mediaService;
        this._subscriptionService = _subscriptionService;
        this.storage = upload_factory_1.UploadFactory.createStorage();
    }
    deleteMedia(org, id) {
        return this._mediaService.deleteMedia(org.id, id);
    }
    async generateImage(org, req, prompt, isPicturePrompt = false) {
        const total = await this._subscriptionService.checkCredits(org);
        if (process.env.STRIPE_PUBLISHABLE_KEY && total.credits <= 0) {
            return false;
        }
        return {
            output: (isPicturePrompt ? '' : 'data:image/png;base64,') +
                (await this._mediaService.generateImage(prompt, org, isPicturePrompt)),
        };
    }
    async generateImageFromText(org, req, prompt) {
        const image = await this.generateImage(org, req, prompt, true);
        if (!image) {
            return false;
        }
        const file = await this.storage.uploadSimple(image.output);
        return this._mediaService.saveFile(org.id, file.split('/').pop(), file);
    }
    async uploadServer(org, file) {
        const uploadedFile = await this.storage.uploadFile(file);
        return this._mediaService.saveFile(org.id, uploadedFile.originalname, uploadedFile.path);
    }
    async uploadSimple(org, file) {
        const getFile = await this.storage.uploadFile(file);
        return this._mediaService.saveFile(org.id, getFile.originalname, getFile.path);
    }
    async uploadFile(org, req, res, endpoint) {
        const upload = await (0, r2_uploader_1.default)(endpoint, req, res);
        if (endpoint !== 'complete-multipart-upload') {
            return upload;
        }
        // @ts-ignore
        const name = upload.Location.split('/').pop();
        const saveFile = await this._mediaService.saveFile(org.id, name, 
        // @ts-ignore
        upload.Location);
        res.status(200).json({ ...upload, saved: saveFile });
    }
    getMedia(org, page) {
        return this._mediaService.getMedia(org.id, page);
    }
};
exports.MediaController = MediaController;
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", void 0)
], MediaController.prototype, "deleteMedia", null);
tslib_1.__decorate([
    (0, common_1.Post)('/generate-image'),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__param(2, (0, common_1.Body)('prompt')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "generateImage", null);
tslib_1.__decorate([
    (0, common_1.Post)('/generate-image-with-prompt'),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__param(2, (0, common_1.Body)('prompt')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "generateImageFromText", null);
tslib_1.__decorate([
    (0, common_1.Post)('/upload-server'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.UsePipes)(new custom_upload_validation_1.CustomFileValidationPipe()),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.UploadedFile)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "uploadServer", null);
tslib_1.__decorate([
    (0, common_1.Post)('/upload-simple'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.UploadedFile)('file')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "uploadSimple", null);
tslib_1.__decorate([
    (0, common_1.Post)('/:endpoint'),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__param(3, (0, common_1.Param)('endpoint')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "uploadFile", null);
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Query)('page')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Number]),
    tslib_1.__metadata("design:returntype", void 0)
], MediaController.prototype, "getMedia", null);
exports.MediaController = MediaController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Media'),
    (0, common_1.Controller)('/media'),
    tslib_1.__metadata("design:paramtypes", [media_service_1.MediaService,
        subscription_service_1.SubscriptionService])
], MediaController);


/***/ }),
/* 203 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = handleR2Upload;
exports.simpleUpload = simpleUpload;
exports.createMultipartUpload = createMultipartUpload;
exports.prepareUploadParts = prepareUploadParts;
exports.listParts = listParts;
exports.completeMultipartUpload = completeMultipartUpload;
exports.abortMultipartUpload = abortMultipartUpload;
exports.signPart = signPart;
const tslib_1 = __webpack_require__(1);
const client_s3_1 = __webpack_require__(47);
const s3_request_presigner_1 = __webpack_require__(204);
const path_1 = tslib_1.__importDefault(__webpack_require__(54));
const make_is_1 = __webpack_require__(16);
const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_ACCESS_KEY, CLOUDFLARE_SECRET_ACCESS_KEY, CLOUDFLARE_BUCKETNAME, CLOUDFLARE_BUCKET_URL } = process.env;
const R2 = new client_s3_1.S3Client({
    region: 'auto',
    endpoint: `https://${CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: CLOUDFLARE_ACCESS_KEY,
        secretAccessKey: CLOUDFLARE_SECRET_ACCESS_KEY,
    },
});
// Function to generate a random string
function generateRandomString() {
    return (0, make_is_1.makeId)(20);
}
async function handleR2Upload(endpoint, req, res) {
    switch (endpoint) {
        case 'create-multipart-upload':
            return createMultipartUpload(req, res);
        case 'prepare-upload-parts':
            return prepareUploadParts(req, res);
        case 'complete-multipart-upload':
            return completeMultipartUpload(req, res);
        case 'list-parts':
            return listParts(req, res);
        case 'abort-multipart-upload':
            return abortMultipartUpload(req, res);
        case 'sign-part':
            return signPart(req, res);
    }
    return res.status(404).end();
}
async function simpleUpload(data, originalFilename, contentType) {
    const fileExtension = path_1.default.extname(originalFilename); // Extract extension
    const randomFilename = generateRandomString() + fileExtension; // Append extension
    const params = {
        Bucket: CLOUDFLARE_BUCKETNAME,
        Key: randomFilename,
        Body: data,
        ContentType: contentType,
    };
    const command = new client_s3_1.PutObjectCommand({ ...params });
    await R2.send(command);
    return CLOUDFLARE_BUCKET_URL + '/' + randomFilename;
}
async function createMultipartUpload(req, res) {
    const { file, fileHash, contentType } = req.body;
    const fileExtension = path_1.default.extname(file.name); // Extract extension
    const randomFilename = generateRandomString() + fileExtension; // Append extension
    try {
        const params = {
            Bucket: CLOUDFLARE_BUCKETNAME,
            Key: `${randomFilename}`,
            ContentType: contentType,
            Metadata: {
                'x-amz-meta-file-hash': fileHash,
            },
        };
        const command = new client_s3_1.CreateMultipartUploadCommand({ ...params });
        const response = await R2.send(command);
        return res.status(200).json({
            uploadId: response.UploadId,
            key: response.Key,
        });
    }
    catch (err) {
        console.log('Error', err);
        return res.status(500).json({ source: { status: 500 } });
    }
}
async function prepareUploadParts(req, res) {
    const { partData } = req.body;
    const parts = partData.parts;
    const response = {
        presignedUrls: {},
    };
    for (const part of parts) {
        try {
            const params = {
                Bucket: CLOUDFLARE_BUCKETNAME,
                Key: partData.key,
                PartNumber: part.number,
                UploadId: partData.uploadId,
            };
            const command = new client_s3_1.UploadPartCommand({ ...params });
            const url = await (0, s3_request_presigner_1.getSignedUrl)(R2, command, { expiresIn: 3600 });
            // @ts-ignore
            response.presignedUrls[part.number] = url;
        }
        catch (err) {
            console.log('Error', err);
            return res.status(500).json(err);
        }
    }
    return res.status(200).json(response);
}
async function listParts(req, res) {
    const { key, uploadId } = req.body;
    try {
        const params = {
            Bucket: CLOUDFLARE_BUCKETNAME,
            Key: key,
            UploadId: uploadId,
        };
        const command = new client_s3_1.ListPartsCommand({ ...params });
        const response = await R2.send(command);
        return res.status(200).json(response['Parts']);
    }
    catch (err) {
        console.log('Error', err);
        return res.status(500).json(err);
    }
}
async function completeMultipartUpload(req, res) {
    const { key, uploadId, parts } = req.body;
    try {
        const params = {
            Bucket: CLOUDFLARE_BUCKETNAME,
            Key: key,
            UploadId: uploadId,
            MultipartUpload: { Parts: parts },
        };
        const command = new client_s3_1.CompleteMultipartUploadCommand({
            Bucket: CLOUDFLARE_BUCKETNAME,
            Key: key,
            UploadId: uploadId,
            MultipartUpload: { Parts: parts },
        });
        const response = await R2.send(command);
        response.Location = process.env.CLOUDFLARE_BUCKET_URL + '/' + response?.Location?.split('/').at(-1);
        return response;
    }
    catch (err) {
        console.log('Error', err);
        return res.status(500).json(err);
    }
}
async function abortMultipartUpload(req, res) {
    const { key, uploadId } = req.body;
    try {
        const params = {
            Bucket: CLOUDFLARE_BUCKETNAME,
            Key: key,
            UploadId: uploadId,
        };
        const command = new client_s3_1.AbortMultipartUploadCommand({ ...params });
        const response = await R2.send(command);
        return res.status(200).json(response);
    }
    catch (err) {
        console.log('Error', err);
        return res.status(500).json(err);
    }
}
async function signPart(req, res) {
    const { key, uploadId } = req.body;
    const partNumber = parseInt(req.body.partNumber);
    const params = {
        Bucket: CLOUDFLARE_BUCKETNAME,
        Key: key,
        PartNumber: partNumber,
        UploadId: uploadId,
        Expires: 3600
    };
    const command = new client_s3_1.UploadPartCommand({ ...params });
    const url = await (0, s3_request_presigner_1.getSignedUrl)(R2, command, { expiresIn: 3600 });
    return res.status(200).json({
        url: url,
    });
}


/***/ }),
/* 204 */
/***/ ((module) => {

module.exports = require("@aws-sdk/s3-request-presigner");

/***/ }),
/* 205 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 206 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomFileValidationPipe = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
let CustomFileValidationPipe = class CustomFileValidationPipe {
    async transform(value) {
        if (!value) {
            throw 'No file provided.';
        }
        if (!value.mimetype) {
            return value;
        }
        // Set the maximum file size based on the MIME type
        const maxSize = this.getMaxSize(value.mimetype);
        const validation = (value.mimetype.startsWith('image/') ||
            value.mimetype.startsWith('video/mp4')) &&
            value.size <= maxSize;
        if (validation) {
            return value;
        }
        throw new common_1.BadRequestException(`File size exceeds the maximum allowed size of ${maxSize} bytes.`);
    }
    getMaxSize(mimeType) {
        if (mimeType.startsWith('image/')) {
            return 10 * 1024 * 1024; // 10 MB
        }
        else if (mimeType.startsWith('video/')) {
            return 1024 * 1024 * 1024; // 1 GB
        }
        else {
            throw new common_1.BadRequestException('Unsupported file type.');
        }
    }
};
exports.CustomFileValidationPipe = CustomFileValidationPipe;
exports.CustomFileValidationPipe = CustomFileValidationPipe = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CustomFileValidationPipe);


/***/ }),
/* 207 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const upload_factory_1 = __webpack_require__(45);
const custom_upload_validation_1 = __webpack_require__(206);
let UploadModule = class UploadModule {
};
exports.UploadModule = UploadModule;
exports.UploadModule = UploadModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [upload_factory_1.UploadFactory, custom_upload_validation_1.CustomFileValidationPipe],
        exports: [upload_factory_1.UploadFactory, custom_upload_validation_1.CustomFileValidationPipe],
    })
], UploadModule);


/***/ }),
/* 208 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BillingController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const subscription_service_1 = __webpack_require__(40);
const stripe_service_1 = __webpack_require__(106);
const org_from_request_1 = __webpack_require__(153);
const billing_subscribe_dto_1 = __webpack_require__(209);
const swagger_1 = __webpack_require__(3);
const user_from_request_1 = __webpack_require__(152);
const notification_service_1 = __webpack_require__(18);
const nowpayments_1 = __webpack_require__(210);
let BillingController = class BillingController {
    constructor(_subscriptionService, _stripeService, _notificationService, _nowpayments) {
        this._subscriptionService = _subscriptionService;
        this._stripeService = _stripeService;
        this._notificationService = _notificationService;
        this._nowpayments = _nowpayments;
    }
    async checkId(org, body) {
        return {
            status: await this._stripeService.checkSubscription(org.id, body),
        };
    }
    subscribe(org, user, body, req) {
        const uniqueId = req?.cookies?.track;
        return this._stripeService.subscribe(uniqueId, org.id, user.id, body, org.allowTrial);
    }
    async modifyPayment(org) {
        const customer = await this._stripeService.getCustomerByOrganizationId(org.id);
        const { url } = await this._stripeService.createBillingPortalLink(customer);
        return {
            portal: url,
        };
    }
    getCurrentBilling(org) {
        return this._subscriptionService.getSubscriptionByOrganizationId(org.id);
    }
    async cancel(org, user, body) {
        await this._notificationService.sendEmail(process.env.EMAIL_FROM_ADDRESS, 'Subscription Cancelled', `Organization ${org.name} has cancelled their subscription because: ${body.feedback}`, user.email);
        return this._stripeService.setToCancel(org.id);
    }
    prorate(org, body) {
        return this._stripeService.prorate(org.id, body);
    }
    async lifetime(org, body) {
        return this._stripeService.lifetimeDeal(org.id, body.code);
    }
    async addSubscription(body, user, org) {
        if (!user.isSuperAdmin) {
            throw new Error('Unauthorized');
        }
        await this._subscriptionService.addSubscription(org.id, user.id, body.subscription);
    }
    async crypto(org) {
        return this._nowpayments.createPaymentPage(org.id);
    }
};
exports.BillingController = BillingController;
tslib_1.__decorate([
    (0, common_1.Get)('/check/:id'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingController.prototype, "checkId", null);
tslib_1.__decorate([
    (0, common_1.Post)('/subscribe'),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__param(3, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, billing_subscribe_dto_1.BillingSubscribeDto, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BillingController.prototype, "subscribe", null);
tslib_1.__decorate([
    (0, common_1.Get)('/portal'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingController.prototype, "modifyPayment", null);
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BillingController.prototype, "getCurrentBilling", null);
tslib_1.__decorate([
    (0, common_1.Post)('/cancel'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingController.prototype, "cancel", null);
tslib_1.__decorate([
    (0, common_1.Post)('/prorate'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, billing_subscribe_dto_1.BillingSubscribeDto]),
    tslib_1.__metadata("design:returntype", void 0)
], BillingController.prototype, "prorate", null);
tslib_1.__decorate([
    (0, common_1.Post)('/lifetime'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingController.prototype, "lifetime", null);
tslib_1.__decorate([
    (0, common_1.Post)('/add-subscription'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(2, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingController.prototype, "addSubscription", null);
tslib_1.__decorate([
    (0, common_1.Get)('/crypto'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BillingController.prototype, "crypto", null);
exports.BillingController = BillingController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Billing'),
    (0, common_1.Controller)('/billing'),
    tslib_1.__metadata("design:paramtypes", [subscription_service_1.SubscriptionService,
        stripe_service_1.StripeService,
        notification_service_1.NotificationService,
        nowpayments_1.Nowpayments])
], BillingController);


/***/ }),
/* 209 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BillingSubscribeDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class BillingSubscribeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { period: { required: true, type: () => Object, enum: ['MONTHLY', 'YEARLY'] }, billing: { required: true, type: () => Object, enum: ['STANDARD', 'PRO', 'TEAM', 'ULTIMATE'] }, utm: { required: true, type: () => String }, tolt: { required: true, type: () => String } };
    }
}
exports.BillingSubscribeDto = BillingSubscribeDto;
tslib_1.__decorate([
    (0, class_validator_1.IsIn)(['MONTHLY', 'YEARLY']),
    tslib_1.__metadata("design:type", String)
], BillingSubscribeDto.prototype, "period", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsIn)(['STANDARD', 'PRO', 'TEAM', 'ULTIMATE']),
    tslib_1.__metadata("design:type", String)
], BillingSubscribeDto.prototype, "billing", void 0);


/***/ }),
/* 210 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Nowpayments = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const make_is_1 = __webpack_require__(16);
const auth_service_1 = __webpack_require__(12);
const subscription_service_1 = __webpack_require__(40);
let Nowpayments = class Nowpayments {
    constructor(_subscriptionService) {
        this._subscriptionService = _subscriptionService;
    }
    async processPayment(path, body) {
        const decrypt = auth_service_1.AuthService.verifyJWT(path);
        if (!decrypt || !decrypt.order_id) {
            return;
        }
        if (body.payment_status !== 'confirmed' &&
            body.payment_status !== 'finished') {
            return;
        }
        const [org, make] = body.order_id.split('_');
        await this._subscriptionService.lifeTime(org, make, 'PRO');
        return body;
    }
    async createPaymentPage(orgId) {
        const onlyId = (0, make_is_1.makeId)(5);
        const make = orgId + '_' + onlyId;
        const signRequest = auth_service_1.AuthService.signJWT({ order_id: make });
        const { id, invoice_url } = await (await fetch('https://api.nowpayments.io/v1/invoice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.NOWPAYMENTS_API_KEY,
            },
            body: JSON.stringify({
                price_amount: process.env.NOWPAYMENTS_AMOUNT,
                price_currency: 'USD',
                order_id: make,
                pay_currency: 'SOL',
                order_description: 'Lifetime deal account for Postiz',
                ipn_callback_url: process.env.NEXT_PUBLIC_BACKEND_URL +
                    `/public/crypto/${signRequest}`,
                success_url: process.env.FRONTEND_URL + `/launches?check=${onlyId}`,
                cancel_url: process.env.FRONTEND_URL,
            }),
        })).json();
        return {
            id,
            invoice_url,
        };
    }
};
exports.Nowpayments = Nowpayments;
exports.Nowpayments = Nowpayments = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [subscription_service_1.SubscriptionService])
], Nowpayments);


/***/ }),
/* 211 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationsController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const user_from_request_1 = __webpack_require__(152);
const org_from_request_1 = __webpack_require__(153);
const notification_service_1 = __webpack_require__(18);
const swagger_1 = __webpack_require__(3);
let NotificationsController = class NotificationsController {
    constructor(_notificationsService) {
        this._notificationsService = _notificationsService;
    }
    async mainPageList(user, organization) {
        return this._notificationsService.getMainPageCount(organization.id, user.id);
    }
    async notifications(user, organization) {
        return this._notificationsService.getNotifications(organization.id, user.id);
    }
};
exports.NotificationsController = NotificationsController;
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationsController.prototype, "mainPageList", null);
tslib_1.__decorate([
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationsController.prototype, "notifications", null);
exports.NotificationsController = NotificationsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Notifications'),
    (0, common_1.Controller)('/notifications'),
    tslib_1.__metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationsController);


/***/ }),
/* 212 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MarketplaceController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const user_from_request_1 = __webpack_require__(152);
const item_user_service_1 = __webpack_require__(124);
const add_remove_item_dto_1 = __webpack_require__(213);
const stripe_service_1 = __webpack_require__(106);
const users_service_1 = __webpack_require__(33);
const change_active_dto_1 = __webpack_require__(214);
const items_dto_1 = __webpack_require__(215);
const org_from_request_1 = __webpack_require__(153);
const audience_dto_1 = __webpack_require__(216);
const new_conversation_dto_1 = __webpack_require__(217);
const messages_service_1 = __webpack_require__(104);
const create_offer_dto_1 = __webpack_require__(218);
const posts_service_1 = __webpack_require__(99);
let MarketplaceController = class MarketplaceController {
    constructor(_itemUserService, _stripeService, _userService, _messagesService, _postsService) {
        this._itemUserService = _itemUserService;
        this._stripeService = _stripeService;
        this._userService = _userService;
        this._messagesService = _messagesService;
        this._postsService = _postsService;
    }
    getInfluencers(organization, user, body) {
        return this._userService.getMarketplacePeople(organization.id, user.id, body);
    }
    createConversation(user, organization, body) {
        return this._messagesService.createConversation(user.id, organization.id, body);
    }
    connectBankAccount(user, country) {
        return this._stripeService.createAccountProcess(user.id, user.email, country);
    }
    async addItems(user, body) {
        return this._itemUserService.addOrRemoveItem(body.state, user.id, body.key);
    }
    async changeActive(user, body) {
        await this._userService.changeMarketplaceActive(user.id, body.active);
    }
    async changeAudience(user, body) {
        await this._userService.changeAudienceSize(user.id, body.audience);
    }
    async getItems(user) {
        return this._itemUserService.getItems(user.id);
    }
    async getOrders(user, organization, type) {
        return this._messagesService.getOrders(user.id, organization.id, type);
    }
    async getAccount(user) {
        const { account, marketplace, connectedAccount, name, picture, audience } = await this._userService.getUserByEmail(user.email);
        return {
            account,
            marketplace,
            connectedAccount,
            fullname: name,
            audience,
            picture,
        };
    }
    async createOffer(user, body) {
        return this._messagesService.createOffer(user.id, body);
    }
    async post(user, organization, id) {
        const getPost = await this._messagesService.getPost(user.id, organization.id, id);
        if (!getPost) {
            return;
        }
        return { ...await this._postsService.getPost(getPost.organizationId, id), providerId: getPost.integration.providerIdentifier };
    }
    async revision(user, organization, id, message) {
        return this._messagesService.requestRevision(user.id, organization.id, id, message);
    }
    async approve(user, organization, id, message) {
        return this._messagesService.requestApproved(user.id, organization.id, id, message);
    }
    async cancel(organization, id) {
        return this._messagesService.requestCancel(organization.id, id);
    }
    async completeOrder(organization, id) {
        const order = await this._messagesService.completeOrderAndPay(organization.id, id);
        if (!order) {
            return;
        }
        try {
            await this._stripeService.payout(id, order.charge, order.account, order.price);
        }
        catch (e) {
            await this._messagesService.payoutProblem(id, order.sellerId, order.price);
        }
        await this._messagesService.completeOrder(id);
    }
    async payOrder(user, organization, id) {
        const orderDetails = await this._messagesService.getOrderDetails(user.id, organization.id, id);
        const payment = await this._stripeService.payAccountStepOne(user.id, organization, orderDetails.seller, orderDetails.order.id, orderDetails.order.ordersItems.map((p) => ({
            quantity: p.quantity,
            integrationType: p.integration.providerIdentifier,
            price: p.price,
        })), orderDetails.order.messageGroupId);
        return payment;
    }
};
exports.MarketplaceController = MarketplaceController;
tslib_1.__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, items_dto_1.ItemsDto]),
    tslib_1.__metadata("design:returntype", void 0)
], MarketplaceController.prototype, "getInfluencers", null);
tslib_1.__decorate([
    (0, common_1.Post)('/conversation'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, new_conversation_dto_1.NewConversationDto]),
    tslib_1.__metadata("design:returntype", void 0)
], MarketplaceController.prototype, "createConversation", null);
tslib_1.__decorate([
    (0, common_1.Get)('/bank'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, common_1.Query)('country')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", void 0)
], MarketplaceController.prototype, "connectBankAccount", null);
tslib_1.__decorate([
    (0, common_1.Post)('/item'),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, add_remove_item_dto_1.AddRemoveItemDto]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketplaceController.prototype, "addItems", null);
tslib_1.__decorate([
    (0, common_1.Post)('/active'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, change_active_dto_1.ChangeActiveDto]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketplaceController.prototype, "changeActive", null);
tslib_1.__decorate([
    (0, common_1.Post)('/audience'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, audience_dto_1.AudienceDto]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketplaceController.prototype, "changeAudience", null);
tslib_1.__decorate([
    (0, common_1.Get)('/item'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketplaceController.prototype, "getItems", null);
tslib_1.__decorate([
    (0, common_1.Get)('/orders'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(2, (0, common_1.Query)('type')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketplaceController.prototype, "getOrders", null);
tslib_1.__decorate([
    (0, common_1.Get)('/account'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketplaceController.prototype, "getAccount", null);
tslib_1.__decorate([
    (0, common_1.Post)('/offer'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, create_offer_dto_1.CreateOfferDto]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketplaceController.prototype, "createOffer", null);
tslib_1.__decorate([
    (0, common_1.Get)('/posts/:id'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(2, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketplaceController.prototype, "post", null);
tslib_1.__decorate([
    (0, common_1.Post)('/posts/:id/revision'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(2, (0, common_1.Param)('id')),
    tslib_1.__param(3, (0, common_1.Body)('message')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketplaceController.prototype, "revision", null);
tslib_1.__decorate([
    (0, common_1.Post)('/posts/:id/approve'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(2, (0, common_1.Param)('id')),
    tslib_1.__param(3, (0, common_1.Body)('message')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketplaceController.prototype, "approve", null);
tslib_1.__decorate([
    (0, common_1.Post)('/posts/:id/cancel'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketplaceController.prototype, "cancel", null);
tslib_1.__decorate([
    (0, common_1.Post)('/offer/:id/complete'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketplaceController.prototype, "completeOrder", null);
tslib_1.__decorate([
    (0, common_1.Post)('/orders/:id/payment'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(2, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketplaceController.prototype, "payOrder", null);
exports.MarketplaceController = MarketplaceController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Marketplace'),
    (0, common_1.Controller)('/marketplace'),
    tslib_1.__metadata("design:paramtypes", [item_user_service_1.ItemUserService,
        stripe_service_1.StripeService,
        users_service_1.UsersService,
        messages_service_1.MessagesService,
        posts_service_1.PostsService])
], MarketplaceController);


/***/ }),
/* 213 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddRemoveItemDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const tags_list_1 = __webpack_require__(35);
class AddRemoveItemDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { key: { required: true, type: () => String, enum: tags_list_1.allTagsOptions.map(p => p.key) }, state: { required: true, type: () => Boolean } };
    }
}
exports.AddRemoveItemDto = AddRemoveItemDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(tags_list_1.allTagsOptions.map(p => p.key)),
    tslib_1.__metadata("design:type", String)
], AddRemoveItemDto.prototype, "key", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], AddRemoveItemDto.prototype, "state", void 0);


/***/ }),
/* 214 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChangeActiveDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class ChangeActiveDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { active: { required: true, type: () => Boolean } };
    }
}
exports.ChangeActiveDto = ChangeActiveDto;
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], ChangeActiveDto.prototype, "active", void 0);


/***/ }),
/* 215 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemsDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const tags_list_1 = __webpack_require__(35);
class ItemsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { items: { required: true, type: () => [String], enum: tags_list_1.allTagsOptions.map(p => p.key) }, page: { required: true, type: () => Number, minimum: 1 } };
    }
}
exports.ItemsDto = ItemsDto;
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsIn)(tags_list_1.allTagsOptions.map(p => p.key), { each: true }),
    tslib_1.__metadata("design:type", Array)
], ItemsDto.prototype, "items", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    tslib_1.__metadata("design:type", Number)
], ItemsDto.prototype, "page", void 0);


/***/ }),
/* 216 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudienceDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class AudienceDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { audience: { required: true, type: () => Number, minimum: 1, maximum: 99999999 } };
    }
}
exports.AudienceDto = AudienceDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(99999999),
    (0, class_validator_1.Min)(1),
    tslib_1.__metadata("design:type", Number)
], AudienceDto.prototype, "audience", void 0);


/***/ }),
/* 217 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewConversationDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class NewConversationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { to: { required: true, type: () => String }, message: { required: true, type: () => String, minLength: 50 } };
    }
}
exports.NewConversationDto = NewConversationDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], NewConversationDto.prototype, "to", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(50),
    tslib_1.__metadata("design:type", String)
], NewConversationDto.prototype, "message", void 0);


/***/ }),
/* 218 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateOfferDto = exports.SocialMedia = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const class_transformer_1 = __webpack_require__(173);
class SocialMedia {
    static _OPENAPI_METADATA_FACTORY() {
        return { total: { required: true, type: () => Number }, value: { required: true, type: () => String }, price: { required: true, type: () => Number } };
    }
}
exports.SocialMedia = SocialMedia;
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], SocialMedia.prototype, "total", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], SocialMedia.prototype, "value", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], SocialMedia.prototype, "price", void 0);
class CreateOfferDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { group: { required: true, type: () => String }, socialMedia: { required: true, type: () => [(__webpack_require__(218).SocialMedia)] } };
    }
}
exports.CreateOfferDto = CreateOfferDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateOfferDto.prototype, "group", void 0);
tslib_1.__decorate([
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SocialMedia),
    tslib_1.__metadata("design:type", Array)
], CreateOfferDto.prototype, "socialMedia", void 0);


/***/ }),
/* 219 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const messages_service_1 = __webpack_require__(104);
const user_from_request_1 = __webpack_require__(152);
const add_message_1 = __webpack_require__(220);
const org_from_request_1 = __webpack_require__(153);
let MessagesController = class MessagesController {
    constructor(_messagesService) {
        this._messagesService = _messagesService;
    }
    getMessagesGroup(user, organization) {
        return this._messagesService.getMessagesGroup(user.id, organization.id);
    }
    getMessages(user, organization, groupId, page) {
        return this._messagesService.getMessages(user.id, organization.id, groupId, +page);
    }
    createMessage(user, organization, groupId, message) {
        return this._messagesService.createMessage(user.id, organization.id, groupId, message);
    }
};
exports.MessagesController = MessagesController;
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MessagesController.prototype, "getMessagesGroup", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:groupId/:page'),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(2, (0, common_1.Param)('groupId')),
    tslib_1.__param(3, (0, common_1.Param)('page')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String, String]),
    tslib_1.__metadata("design:returntype", void 0)
], MessagesController.prototype, "getMessages", null);
tslib_1.__decorate([
    (0, common_1.Post)('/:groupId'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(2, (0, common_1.Param)('groupId')),
    tslib_1.__param(3, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String, add_message_1.AddMessageDto]),
    tslib_1.__metadata("design:returntype", void 0)
], MessagesController.prototype, "createMessage", null);
exports.MessagesController = MessagesController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Messages'),
    (0, common_1.Controller)('/messages'),
    tslib_1.__metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesController);


/***/ }),
/* 220 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddMessageDto = void 0;
const tslib_1 = __webpack_require__(1);
const class_validator_1 = __webpack_require__(134);
class AddMessageDto {
}
exports.AddMessageDto = AddMessageDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    tslib_1.__metadata("design:type", String)
], AddMessageDto.prototype, "message", void 0);


/***/ }),
/* 221 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CopilotController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const runtime_1 = __webpack_require__(222);
const org_from_request_1 = __webpack_require__(153);
const subscription_service_1 = __webpack_require__(40);
let CopilotController = class CopilotController {
    constructor(_subscriptionService) {
        this._subscriptionService = _subscriptionService;
    }
    chat(req, res) {
        if (process.env.OPENAI_API_KEY === undefined || process.env.OPENAI_API_KEY === '') {
            common_1.Logger.warn('OpenAI API key not set, chat functionality will not work');
            return;
        }
        const copilotRuntimeHandler = (0, runtime_1.copilotRuntimeNestEndpoint)({
            endpoint: '/copilot/chat',
            runtime: new runtime_1.CopilotRuntime(),
            serviceAdapter: new runtime_1.OpenAIAdapter({
                model: 
                // @ts-ignore
                req?.body?.variables?.data?.metadata?.requestType ===
                    'TextareaCompletion'
                    ? 'gpt-4o-mini'
                    : 'gpt-4o-2024-08-06',
            }),
        });
        // @ts-ignore
        return copilotRuntimeHandler(req, res);
    }
    calculateCredits(organization) {
        return this._subscriptionService.checkCredits(organization);
    }
};
exports.CopilotController = CopilotController;
tslib_1.__decorate([
    (0, common_1.Post)('/chat'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Request, Response]),
    tslib_1.__metadata("design:returntype", void 0)
], CopilotController.prototype, "chat", null);
tslib_1.__decorate([
    (0, common_1.Get)('/credits'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CopilotController.prototype, "calculateCredits", null);
exports.CopilotController = CopilotController = tslib_1.__decorate([
    (0, common_1.Controller)('/copilot'),
    tslib_1.__metadata("design:paramtypes", [subscription_service_1.SubscriptionService])
], CopilotController);


/***/ }),
/* 222 */
/***/ ((module) => {

module.exports = require("@copilotkit/runtime");

/***/ }),
/* 223 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgenciesController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const agencies_service_1 = __webpack_require__(127);
const user_from_request_1 = __webpack_require__(152);
const create_agency_dto_1 = __webpack_require__(224);
let AgenciesController = class AgenciesController {
    constructor(_agenciesService) {
        this._agenciesService = _agenciesService;
    }
    async getAgencyByUser(user) {
        return (await this._agenciesService.getAgencyByUser(user)) || {};
    }
    async createAgency(user, body) {
        return this._agenciesService.createAgency(user, body);
    }
    async updateAgency(user, action, id) {
        if (!user.isSuperAdmin) {
            return 400;
        }
        return this._agenciesService.approveOrDecline(user.email, action, id);
    }
};
exports.AgenciesController = AgenciesController;
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgenciesController.prototype, "getAgencyByUser", null);
tslib_1.__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, create_agency_dto_1.CreateAgencyDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AgenciesController.prototype, "createAgency", null);
tslib_1.__decorate([
    (0, common_1.Post)('/action/:action/:id'),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, user_from_request_1.GetUserFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('action')),
    tslib_1.__param(2, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AgenciesController.prototype, "updateAgency", null);
exports.AgenciesController = AgenciesController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Agencies'),
    (0, common_1.Controller)('/agencies'),
    tslib_1.__metadata("design:paramtypes", [agencies_service_1.AgenciesService])
], AgenciesController);


/***/ }),
/* 224 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAgencyDto = exports.CreateAgencyLogoDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const class_transformer_1 = __webpack_require__(173);
class CreateAgencyLogoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, path: { required: true, type: () => String } };
    }
}
exports.CreateAgencyLogoDto = CreateAgencyLogoDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], CreateAgencyLogoDto.prototype, "id", void 0);
class CreateAgencyDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, minLength: 3 }, website: { required: true, type: () => String }, facebook: { required: true, type: () => String }, instagram: { required: true, type: () => String }, twitter: { required: true, type: () => String }, linkedIn: { required: true, type: () => String }, youtube: { required: true, type: () => String }, tiktok: { required: true, type: () => String }, logo: { required: true, type: () => (__webpack_require__(224).CreateAgencyLogoDto) }, shortDescription: { required: true, type: () => String }, description: { required: true, type: () => String }, niches: { required: true, type: () => [String], enum: [
                    'Real Estate',
                    'Fashion',
                    'Health and Fitness',
                    'Beauty',
                    'Travel',
                    'Food',
                    'Tech',
                    'Gaming',
                    'Parenting',
                    'Education',
                    'Business',
                    'Finance',
                    'DIY',
                    'Pets',
                    'Lifestyle',
                    'Sports',
                    'Entertainment',
                    'Art',
                    'Photography',
                    'Sustainability',
                ] } };
    }
}
exports.CreateAgencyDto = CreateAgencyDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    tslib_1.__metadata("design:type", String)
], CreateAgencyDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], CreateAgencyDto.prototype, "website", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.ValidateIf)((o) => o.facebook),
    tslib_1.__metadata("design:type", String)
], CreateAgencyDto.prototype, "facebook", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateAgencyDto.prototype, "instagram", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateAgencyDto.prototype, "twitter", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.ValidateIf)((o) => o.linkedIn),
    tslib_1.__metadata("design:type", String)
], CreateAgencyDto.prototype, "linkedIn", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.ValidateIf)((o) => o.youtube),
    tslib_1.__metadata("design:type", String)
], CreateAgencyDto.prototype, "youtube", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateAgencyDto.prototype, "tiktok", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => CreateAgencyLogoDto),
    tslib_1.__metadata("design:type", CreateAgencyLogoDto)
], CreateAgencyDto.prototype, "logo", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateAgencyDto.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateAgencyDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)({
        each: true,
    }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayMaxSize)(3),
    (0, class_validator_1.IsIn)([
        'Real Estate',
        'Fashion',
        'Health and Fitness',
        'Beauty',
        'Travel',
        'Food',
        'Tech',
        'Gaming',
        'Parenting',
        'Education',
        'Business',
        'Finance',
        'DIY',
        'Pets',
        'Lifestyle',
        'Sports',
        'Entertainment',
        'Art',
        'Photography',
        'Sustainability',
    ], {
        each: true,
    }),
    tslib_1.__metadata("design:type", Array)
], CreateAgencyDto.prototype, "niches", void 0);


/***/ }),
/* 225 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PublicController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const agencies_service_1 = __webpack_require__(127);
const posts_service_1 = __webpack_require__(99);
const track_service_1 = __webpack_require__(108);
const nestjs_real_ip_1 = __webpack_require__(149);
const user_agent_1 = __webpack_require__(150);
const make_is_1 = __webpack_require__(16);
const subdomain_management_1 = __webpack_require__(147);
const agent_graph_insert_service_1 = __webpack_require__(226);
const nowpayments_1 = __webpack_require__(210);
let PublicController = class PublicController {
    constructor(_agenciesService, _trackService, _agentGraphInsertService, _postsService, _nowpayments) {
        this._agenciesService = _agenciesService;
        this._trackService = _trackService;
        this._agentGraphInsertService = _agentGraphInsertService;
        this._postsService = _postsService;
        this._nowpayments = _nowpayments;
    }
    async createAgent(body) {
        if (!body.apiKey ||
            !process.env.AGENT_API_KEY ||
            body.apiKey !== process.env.AGENT_API_KEY) {
            return;
        }
        return this._agentGraphInsertService.newPost(body.text);
    }
    async getAgencyByUser() {
        return this._agenciesService.getAllAgencies();
    }
    async getAgencySlug() {
        return this._agenciesService.getAllAgenciesSlug();
    }
    async getAgencyInformation(agency) {
        return this._agenciesService.getAgencyInformation(agency);
    }
    async getAgenciesCount() {
        return this._agenciesService.getCount();
    }
    async getPreview(id) {
        return (await this._postsService.getPostsRecursively(id, true)).map(({ childrenPost, ...p }) => ({
            ...p,
            ...(p.integration
                ? {
                    integration: {
                        id: p.integration.id,
                        name: p.integration.name,
                        picture: p.integration.picture,
                        providerIdentifier: p.integration.providerIdentifier,
                        profile: p.integration.profile,
                    },
                }
                : {}),
        }));
    }
    async getComments(postId) {
        return { comments: await this._postsService.getComments(postId) };
    }
    async trackEvent(res, req, ip, userAgent, body) {
        const uniqueId = req?.cookies?.track || (0, make_is_1.makeId)(10);
        const fbclid = req?.cookies?.fbclid || body.fbclid;
        await this._trackService.track(uniqueId, ip, userAgent, body.tt, body.additional, fbclid);
        if (!req.cookies.track) {
            res.cookie('track', uniqueId, {
                domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
                ...(!process.env.NOT_SECURED
                    ? {
                        secure: true,
                        httpOnly: true,
                    }
                    : {}),
                sameSite: 'none',
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
            });
        }
        if (body.fbclid && !req.cookies.fbclid) {
            res.cookie('fbclid', body.fbclid, {
                domain: (0, subdomain_management_1.getCookieUrlFromDomain)(process.env.FRONTEND_URL),
                ...(!process.env.NOT_SECURED
                    ? {
                        secure: true,
                        httpOnly: true,
                    }
                    : {}),
                sameSite: 'none',
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
            });
        }
        res.status(200).json({
            track: uniqueId,
        });
    }
    async cryptoPost(body, path) {
        console.log('cryptoPost', body, path);
        return this._nowpayments.processPayment(path, body);
    }
};
exports.PublicController = PublicController;
tslib_1.__decorate([
    (0, common_1.Post)('/agent'),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicController.prototype, "createAgent", null);
tslib_1.__decorate([
    (0, common_1.Get)('/agencies-list'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], PublicController.prototype, "getAgencyByUser", null);
tslib_1.__decorate([
    (0, common_1.Get)('/agencies-list-slug'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], PublicController.prototype, "getAgencySlug", null);
tslib_1.__decorate([
    (0, common_1.Get)('/agencies-information/:agency'),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)('agency')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicController.prototype, "getAgencyInformation", null);
tslib_1.__decorate([
    (0, common_1.Get)('/agencies-list-count'),
    openapi.ApiResponse({ status: 200, type: Number }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], PublicController.prototype, "getAgenciesCount", null);
tslib_1.__decorate([
    (0, common_1.Get)(`/posts/:id`),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicController.prototype, "getPreview", null);
tslib_1.__decorate([
    (0, common_1.Get)(`/posts/:id/comments`),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicController.prototype, "getComments", null);
tslib_1.__decorate([
    (0, common_1.Post)('/t'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__param(2, (0, nestjs_real_ip_1.RealIP)()),
    tslib_1.__param(3, (0, user_agent_1.UserAgent)()),
    tslib_1.__param(4, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicController.prototype, "trackEvent", null);
tslib_1.__decorate([
    (0, common_1.Post)('/crypto/:path'),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('path')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicController.prototype, "cryptoPost", null);
exports.PublicController = PublicController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Public'),
    (0, common_1.Controller)('/public'),
    tslib_1.__metadata("design:paramtypes", [agencies_service_1.AgenciesService,
        track_service_1.TrackService,
        agent_graph_insert_service_1.AgentGraphInsertService,
        posts_service_1.PostsService,
        nowpayments_1.Nowpayments])
], PublicController);


/***/ }),
/* 226 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AgentGraphInsertService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgentGraphInsertService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const messages_1 = __webpack_require__(195);
const langgraph_1 = __webpack_require__(196);
const openai_1 = __webpack_require__(197);
const prompts_1 = __webpack_require__(200);
const agent_categories_1 = __webpack_require__(227);
const zod_1 = __webpack_require__(116);
const agent_topics_1 = __webpack_require__(228);
const posts_service_1 = __webpack_require__(99);
const model = new openai_1.ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'sk-proj-',
    model: 'gpt-4o-2024-08-06',
    temperature: 0,
});
const category = zod_1.z.object({
    category: zod_1.z.string().describe('The category for the post'),
});
const topic = zod_1.z.object({
    topic: zod_1.z.string().describe('The topic of the post'),
});
const hook = zod_1.z.object({
    hook: zod_1.z.string().describe('The hook of the post'),
});
let AgentGraphInsertService = AgentGraphInsertService_1 = class AgentGraphInsertService {
    constructor(_postsService) {
        this._postsService = _postsService;
    }
    async findCategory(state) {
        const { messages } = state;
        const structuredOutput = model.withStructuredOutput(category);
        return prompts_1.ChatPromptTemplate.fromTemplate(`
You are an assistant that get a social media post and categorize it into to one from the following categories:
{categories}
Here is the post:
{post}
    `)
            .pipe(structuredOutput)
            .invoke({
            post: messages[0].content,
            categories: agent_categories_1.agentCategories.join(', '),
        });
    }
    findTopic(state) {
        const { messages } = state;
        const structuredOutput = model.withStructuredOutput(topic);
        return prompts_1.ChatPromptTemplate.fromTemplate(`
You are an assistant that get a social media post and categorize it into one of the following topics:
{topics}
Here is the post:
{post}
    `)
            .pipe(structuredOutput)
            .invoke({
            post: messages[0].content,
            topics: agent_topics_1.agentTopics.join(', '),
        });
    }
    findHook(state) {
        const { messages } = state;
        const structuredOutput = model.withStructuredOutput(hook);
        return prompts_1.ChatPromptTemplate.fromTemplate(`
You are an assistant that get a social media post and extract the hook, the hook is usually the first or second of both sentence of the post, but can be in a different place, make sure you don't change the wording of the post use the exact text:
{post}
    `)
            .pipe(structuredOutput)
            .invoke({
            post: messages[0].content,
        });
    }
    async savePost(state) {
        await this._postsService.createPopularPosts({
            category: state.category,
            topic: state.topic,
            hook: state.hook,
            content: state.messages[0].content
        });
        return {};
    }
    newPost(post) {
        const state = AgentGraphInsertService_1.state();
        const workflow = state
            .addNode('find-category', this.findCategory)
            .addNode('find-topic', this.findTopic)
            .addNode('find-hook', this.findHook)
            .addNode('save-post', this.savePost.bind(this))
            .addEdge(langgraph_1.START, 'find-category')
            .addEdge('find-category', 'find-topic')
            .addEdge('find-topic', 'find-hook')
            .addEdge('find-hook', 'save-post')
            .addEdge('save-post', langgraph_1.END);
        const app = workflow.compile();
        return app.invoke({
            messages: [new messages_1.HumanMessage(post)],
        });
    }
};
exports.AgentGraphInsertService = AgentGraphInsertService;
AgentGraphInsertService.state = () => new langgraph_1.StateGraph({
    channels: {
        messages: {
            reducer: (currentState, updateValue) => currentState.concat(updateValue),
            default: () => [],
        },
        topic: null,
        category: null,
        hook: null,
        content: null,
    },
});
exports.AgentGraphInsertService = AgentGraphInsertService = AgentGraphInsertService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [posts_service_1.PostsService])
], AgentGraphInsertService);


/***/ }),
/* 227 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.agentCategories = void 0;
exports.agentCategories = [
    'Educational',
    'Inspirational',
    'Promotional',
    'Entertaining',
    'Interactive',
    'Behind The Scenes',
    'Testimonial',
    'Informative',
    'Humorous',
    'Seasonal',
    'News',
    'Challenge',
    'Contest',
    'Tips',
    'Tutorial',
    'Poll',
    'Survey',
    'Quote',
    'Event',
    'FAQ',
    'Story',
    'Meme',
    'Review',
    'Announcement',
    'Highlight',
    'Celebration',
    'Reminder',
    'Debate',
    'Update',
    'Trend',
];


/***/ }),
/* 228 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.agentTopics = void 0;
exports.agentTopics = [
    'Business',
    'Marketing',
    'Finance',
    'Startups',
    'Networking',
    'Leadership',
    'Strategy',
    'Branding',
    'Analytics',
    'Growth',
    'Drawing',
    'Painting',
    'Design',
    'Photography',
    'Writing',
    'Sculpting',
    'Animation',
    'Sketching',
    'Crafting',
    'Calligraphy',
    'Mindset',
    'Productivity',
    'Motivation',
    'Education',
    'Learning',
    'Skills',
    'Success',
    'Wellness',
    'Goals',
    'Inspiration',
    'Fashion',
    'Travel',
    'Food',
    'Fitness',
    'Health',
    'Beauty',
    'Home',
    'Decor',
    'Hobbies',
    'Parenting',
    'Tech',
    'Gadgets',
    'AI',
    'Coding',
    'Software',
    'Innovation',
    'Apps',
    'Gaming',
    'Robotics',
    'Security',
    'Music',
    'Movies',
    'Sports',
    'Books',
    'Theater',
    'Comedy',
    'Dance',
    'Celebrities',
    'Culture',
    'Gaming',
    'Environment',
    'Equality',
    'Activism',
    'Justice',
    'Diversity',
    'Sustainability',
    'Inclusion',
    'Awareness',
    'Charity',
    'Peace',
    'Holidays',
    'Festivities',
    'Seasons',
    'Trends',
    'Celebrations',
    'Anniversaries',
    'Milestones',
    'Memories',
    'Promotions',
    'Updates',
];


/***/ }),
/* 229 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RootController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
let RootController = class RootController {
    getRoot() {
        return 'App is running!';
    }
};
exports.RootController = RootController;
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200, type: String }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", String)
], RootController.prototype, "getRoot", null);
exports.RootController = RootController = tslib_1.__decorate([
    (0, common_1.Controller)('/')
], RootController);


/***/ }),
/* 230 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebhookController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const org_from_request_1 = __webpack_require__(153);
const swagger_1 = __webpack_require__(3);
const webhooks_service_1 = __webpack_require__(121);
const permissions_ability_1 = __webpack_require__(154);
const permissions_service_1 = __webpack_require__(155);
const webhooks_dto_1 = __webpack_require__(231);
let WebhookController = class WebhookController {
    constructor(_webhooksService) {
        this._webhooksService = _webhooksService;
    }
    async getStatistics(org) {
        return this._webhooksService.getWebhooks(org.id);
    }
    async createAWebhook(org, body) {
        return this._webhooksService.createWebhook(org.id, body);
    }
    async updateWebhook(org, body) {
        return this._webhooksService.createWebhook(org.id, body);
    }
    async deleteWebhook(org, id) {
        return this._webhooksService.deleteWebhook(org.id, id);
    }
    async sendWebhook(body, url) {
        try {
            await fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            });
        }
        catch (err) {
            /** sent **/
        }
        return { send: true };
    }
};
exports.WebhookController = WebhookController;
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhookController.prototype, "getStatistics", null);
tslib_1.__decorate([
    (0, common_1.Post)('/'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.WEBHOOKS]),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, webhooks_dto_1.WebhooksDto]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhookController.prototype, "createAWebhook", null);
tslib_1.__decorate([
    (0, common_1.Put)('/'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, webhooks_dto_1.UpdateDto]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhookController.prototype, "updateWebhook", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhookController.prototype, "deleteWebhook", null);
tslib_1.__decorate([
    (0, common_1.Post)('/send'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Query)('url')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhookController.prototype, "sendWebhook", null);
exports.WebhookController = WebhookController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Webhooks'),
    (0, common_1.Controller)('/webhooks'),
    tslib_1.__metadata("design:paramtypes", [webhooks_service_1.WebhooksService])
], WebhookController);


/***/ }),
/* 231 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDto = exports.WebhooksDto = exports.WebhooksIntegrationDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
const class_transformer_1 = __webpack_require__(173);
class WebhooksIntegrationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String } };
    }
}
exports.WebhooksIntegrationDto = WebhooksIntegrationDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], WebhooksIntegrationDto.prototype, "id", void 0);
class WebhooksDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, url: { required: true, type: () => String }, integrations: { required: true, type: () => [(__webpack_require__(231).WebhooksIntegrationDto)] } };
    }
}
exports.WebhooksDto = WebhooksDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], WebhooksDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], WebhooksDto.prototype, "url", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => WebhooksIntegrationDto),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", Array)
], WebhooksDto.prototype, "integrations", void 0);
class UpdateDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, url: { required: true, type: () => String }, integrations: { required: true, type: () => [(__webpack_require__(231).WebhooksIntegrationDto)] } };
    }
}
exports.UpdateDto = UpdateDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], UpdateDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], UpdateDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], UpdateDto.prototype, "url", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => WebhooksIntegrationDto),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", Array)
], UpdateDto.prototype, "integrations", void 0);


/***/ }),
/* 232 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignatureController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const org_from_request_1 = __webpack_require__(153);
const swagger_1 = __webpack_require__(3);
const signature_service_1 = __webpack_require__(130);
const signature_dto_1 = __webpack_require__(233);
let SignatureController = class SignatureController {
    constructor(_signatureService) {
        this._signatureService = _signatureService;
    }
    async getSignatures(org) {
        return this._signatureService.getSignaturesByOrgId(org.id);
    }
    async getDefaultSignature(org) {
        return (await this._signatureService.getDefaultSignature(org.id)) || {};
    }
    async createSignature(org, body) {
        return this._signatureService.createOrUpdateSignature(org.id, body);
    }
    async updateSignature(id, org, body) {
        return this._signatureService.createOrUpdateSignature(org.id, body, id);
    }
};
exports.SignatureController = SignatureController;
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SignatureController.prototype, "getSignatures", null);
tslib_1.__decorate([
    (0, common_1.Get)('/default'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SignatureController.prototype, "getDefaultSignature", null);
tslib_1.__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, signature_dto_1.SignatureDto]),
    tslib_1.__metadata("design:returntype", Promise)
], SignatureController.prototype, "createSignature", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, signature_dto_1.SignatureDto]),
    tslib_1.__metadata("design:returntype", Promise)
], SignatureController.prototype, "updateSignature", null);
exports.SignatureController = SignatureController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Signatures'),
    (0, common_1.Controller)('/signatures'),
    tslib_1.__metadata("design:paramtypes", [signature_service_1.SignatureService])
], SignatureController);


/***/ }),
/* 233 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignatureDto = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const class_validator_1 = __webpack_require__(134);
class SignatureDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { content: { required: true, type: () => String }, autoAdd: { required: true, type: () => Boolean } };
    }
}
exports.SignatureDto = SignatureDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", String)
], SignatureDto.prototype, "content", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsDefined)(),
    tslib_1.__metadata("design:type", Boolean)
], SignatureDto.prototype, "autoAdd", void 0);


/***/ }),
/* 234 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BullMqModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const client_1 = __webpack_require__(26);
let BullMqModule = class BullMqModule {
};
exports.BullMqModule = BullMqModule;
exports.BullMqModule = BullMqModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [client_1.BullMqClient],
        exports: [client_1.BullMqClient],
    })
], BullMqModule);


/***/ }),
/* 235 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PluginModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const plugins_1 = tslib_1.__importDefault(__webpack_require__(236));
let PluginModule = class PluginModule {
};
exports.PluginModule = PluginModule;
exports.PluginModule = PluginModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [...plugins_1.default],
        controllers: [],
        providers: [],
        get exports() {
            return [...this.imports];
        }
    })
], PluginModule);


/***/ }),
/* 236 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = [];


/***/ }),
/* 237 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PublicApiModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const auth_service_1 = __webpack_require__(136);
const stripe_service_1 = __webpack_require__(106);
const permissions_guard_1 = __webpack_require__(165);
const permissions_service_1 = __webpack_require__(155);
const integration_manager_1 = __webpack_require__(55);
const upload_module_1 = __webpack_require__(207);
const openai_service_1 = __webpack_require__(113);
const extract_content_service_1 = __webpack_require__(125);
const codes_service_1 = __webpack_require__(162);
const public_integrations_controller_1 = __webpack_require__(238);
const public_auth_middleware_1 = __webpack_require__(239);
const authenticatedController = [
    public_integrations_controller_1.PublicIntegrationsController
];
let PublicApiModule = class PublicApiModule {
    configure(consumer) {
        consumer.apply(public_auth_middleware_1.PublicAuthMiddleware).forRoutes(...authenticatedController);
    }
};
exports.PublicApiModule = PublicApiModule;
exports.PublicApiModule = PublicApiModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            upload_module_1.UploadModule,
        ],
        controllers: [
            ...authenticatedController,
        ],
        providers: [
            auth_service_1.AuthService,
            stripe_service_1.StripeService,
            openai_service_1.OpenaiService,
            extract_content_service_1.ExtractContentService,
            permissions_guard_1.PoliciesGuard,
            permissions_service_1.PermissionsService,
            codes_service_1.CodesService,
            integration_manager_1.IntegrationManager,
        ],
        get exports() {
            return [...this.imports, ...this.providers];
        },
    })
], PublicApiModule);


/***/ }),
/* 238 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PublicIntegrationsController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(3);
const org_from_request_1 = __webpack_require__(153);
const integration_service_1 = __webpack_require__(43);
const permissions_ability_1 = __webpack_require__(154);
const permissions_service_1 = __webpack_require__(155);
const create_post_dto_1 = __webpack_require__(178);
const posts_service_1 = __webpack_require__(99);
const platform_express_1 = __webpack_require__(205);
const upload_factory_1 = __webpack_require__(45);
const media_service_1 = __webpack_require__(111);
const get_posts_dto_1 = __webpack_require__(191);
let PublicIntegrationsController = class PublicIntegrationsController {
    constructor(_integrationService, _postsService, _mediaService) {
        this._integrationService = _integrationService;
        this._postsService = _postsService;
        this._mediaService = _mediaService;
        this.storage = upload_factory_1.UploadFactory.createStorage();
    }
    async uploadSimple(org, file) {
        if (!file) {
            throw new common_1.HttpException({ msg: 'No file provided' }, 400);
        }
        const getFile = await this.storage.uploadFile(file);
        return this._mediaService.saveFile(org.id, getFile.originalname, getFile.path);
    }
    async getPosts(org, query) {
        const posts = await this._postsService.getPosts(org.id, query);
        return {
            posts,
            // comments,
        };
    }
    createPost(org, body) {
        console.log(JSON.stringify(body, null, 2));
        return this._postsService.createPost(org.id, body);
    }
    async deletePost(org, body) {
        const getPostById = await this._postsService.getPost(org.id, body.id);
        return this._postsService.deletePost(org.id, getPostById.group);
    }
    async listIntegration(org) {
        return (await this._integrationService.getIntegrationsList(org.id)).map((org) => ({
            id: org.id,
            name: org.name,
            identifier: org.providerIdentifier,
            picture: org.picture,
            disabled: org.disabled,
            profile: org.profile,
            customer: org.customer
                ? {
                    id: org.customer.id,
                    name: org.customer.name,
                }
                : undefined,
        }));
    }
};
exports.PublicIntegrationsController = PublicIntegrationsController;
tslib_1.__decorate([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.UploadedFile)('file')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicIntegrationsController.prototype, "uploadSimple", null);
tslib_1.__decorate([
    (0, common_1.Get)('/posts'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, get_posts_dto_1.GetPostsDto]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicIntegrationsController.prototype, "getPosts", null);
tslib_1.__decorate([
    (0, common_1.Post)('/posts'),
    (0, permissions_ability_1.CheckPolicies)([permissions_service_1.AuthorizationActions.Create, permissions_service_1.Sections.POSTS_PER_MONTH]),
    openapi.ApiResponse({ status: 201, type: [Object] }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, create_post_dto_1.CreatePostDto]),
    tslib_1.__metadata("design:returntype", void 0)
], PublicIntegrationsController.prototype, "createPost", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/posts/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicIntegrationsController.prototype, "deletePost", null);
tslib_1.__decorate([
    (0, common_1.Get)('/integrations'),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, org_from_request_1.GetOrgFromRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicIntegrationsController.prototype, "listIntegration", null);
exports.PublicIntegrationsController = PublicIntegrationsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Public API'),
    (0, common_1.Controller)('/public/v1'),
    tslib_1.__metadata("design:paramtypes", [integration_service_1.IntegrationService,
        posts_service_1.PostsService,
        media_service_1.MediaService])
], PublicIntegrationsController);


/***/ }),
/* 239 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PublicAuthMiddleware = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const organization_service_1 = __webpack_require__(17);
const exception_filter_1 = __webpack_require__(159);
let PublicAuthMiddleware = class PublicAuthMiddleware {
    constructor(_organizationService) {
        this._organizationService = _organizationService;
    }
    async use(req, res, next) {
        const auth = (req.headers.authorization ||
            req.headers.Authorization);
        if (!auth) {
            res.status(common_1.HttpStatus.UNAUTHORIZED).json({ msg: 'No API Key found' });
            return;
        }
        try {
            const org = await this._organizationService.getOrgByApiKey(auth);
            if (!org) {
                res.status(common_1.HttpStatus.UNAUTHORIZED).json({ msg: 'Invalid API key' });
                return;
            }
            if (!!process.env.STRIPE_SECRET_KEY && !org.subscription) {
                res.status(common_1.HttpStatus.UNAUTHORIZED).json({ msg: 'No subscription found' });
                return;
            }
            // @ts-ignore
            req.org = { ...org, users: [{ users: { role: 'SUPERADMIN' } }] };
        }
        catch (err) {
            throw new exception_filter_1.HttpForbiddenException();
        }
        next();
    }
};
exports.PublicAuthMiddleware = PublicAuthMiddleware;
exports.PublicAuthMiddleware = PublicAuthMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [organization_service_1.OrganizationService])
], PublicAuthMiddleware);


/***/ }),
/* 240 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThrottlerBehindProxyGuard = void 0;
const tslib_1 = __webpack_require__(1);
const throttler_1 = __webpack_require__(241);
const common_1 = __webpack_require__(5);
let ThrottlerBehindProxyGuard = class ThrottlerBehindProxyGuard extends throttler_1.ThrottlerGuard {
    async canActivate(context) {
        if (context.switchToHttp().getRequest().url.includes('/public/v1')) {
            return super.canActivate(context);
        }
        return true;
    }
    async getTracker(req) {
        return req.org.id;
    }
};
exports.ThrottlerBehindProxyGuard = ThrottlerBehindProxyGuard;
exports.ThrottlerBehindProxyGuard = ThrottlerBehindProxyGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ThrottlerBehindProxyGuard);


/***/ }),
/* 241 */
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),
/* 242 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgentModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(5);
const agent_graph_service_1 = __webpack_require__(194);
const agent_graph_insert_service_1 = __webpack_require__(226);
let AgentModule = class AgentModule {
};
exports.AgentModule = AgentModule;
exports.AgentModule = AgentModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [agent_graph_service_1.AgentGraphService, agent_graph_insert_service_1.AgentGraphInsertService],
        get exports() {
            return this.providers;
        },
    })
], AgentModule);


/***/ }),
/* 243 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigurationChecker = void 0;
const tslib_1 = __webpack_require__(1);
const fs_1 = __webpack_require__(53);
const dotenv = tslib_1.__importStar(__webpack_require__(244));
const path_1 = __webpack_require__(54);
class ConfigurationChecker {
    constructor() {
        this.issues = [];
    }
    readEnvFromFile() {
        const envFile = (0, path_1.resolve)(__dirname, '../../../.env');
        if (!(0, fs_1.existsSync)(envFile)) {
            console.error('Env file not found!: ', envFile);
            return;
        }
        const handle = (0, fs_1.readFileSync)(envFile, 'utf-8');
        this.cfg = dotenv.parse(handle);
    }
    readEnvFromProcess() {
        this.cfg = process.env;
    }
    check() {
        this.checkDatabaseServers();
        this.checkNonEmpty('JWT_SECRET');
        this.checkIsValidUrl('MAIN_URL');
        this.checkIsValidUrl('FRONTEND_URL');
        this.checkIsValidUrl('NEXT_PUBLIC_BACKEND_URL');
        this.checkIsValidUrl('BACKEND_INTERNAL_URL');
        this.checkNonEmpty('STORAGE_PROVIDER', 'Needed to setup storage.');
    }
    checkNonEmpty(key, description) {
        const v = this.get(key);
        if (!description) {
            description = '';
        }
        if (!v) {
            this.issues.push(key + ' not set. ' + description);
            return false;
        }
        if (v.length === 0) {
            this.issues.push(key + ' is empty.' + description);
            return false;
        }
        return true;
    }
    get(key) {
        return this.cfg[key];
    }
    checkDatabaseServers() {
        this.checkRedis();
        this.checkIsValidUrl('DATABASE_URL');
    }
    checkRedis() {
        if (!this.cfg.REDIS_URL) {
            this.issues.push('REDIS_URL not set');
        }
        try {
            const redisUrl = new URL(this.cfg.REDIS_URL);
            if (redisUrl.protocol !== 'redis:') {
                this.issues.push('REDIS_URL must start with redis://');
            }
        }
        catch (error) {
            this.issues.push('REDIS_URL is not a valid URL');
        }
    }
    checkIsValidUrl(key) {
        if (!this.checkNonEmpty(key)) {
            return;
        }
        const urlString = this.get(key);
        try {
            new URL(urlString);
        }
        catch (error) {
            this.issues.push(key + ' is not a valid URL');
        }
        if (urlString.endsWith('/')) {
            this.issues.push(key + ' should not end with /');
        }
    }
    hasIssues() {
        return this.issues.length > 0;
    }
    getIssues() {
        return this.issues;
    }
    getIssuesCount() {
        return this.issues.length;
    }
}
exports.ConfigurationChecker = ConfigurationChecker;


/***/ }),
/* 244 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
const load_swagger_1 = __webpack_require__(2);
process.env.TZ = 'UTC';
const cookie_parser_1 = tslib_1.__importDefault(__webpack_require__(4));
const common_1 = __webpack_require__(5);
const core_1 = __webpack_require__(6);
const app_module_1 = __webpack_require__(7);
const subscription_exception_1 = __webpack_require__(166);
const exception_filter_1 = __webpack_require__(159);
const configuration_checker_1 = __webpack_require__(243);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        rawBody: true,
        cors: {
            origin: [
                process.env.FRONTEND_URL,
                ...(process.env.MAIN_URL ? [process.env.MAIN_URL] : []),
            ],
            credentials: true,
            exposedHeaders: [
                'reload',
                'onboarding',
                'activate',
                ...(process.env.NOT_SECURED ? ['auth', 'showorg', 'impersonate'] : []),
            ],
        },
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    app.use((0, cookie_parser_1.default)());
    app.useGlobalFilters(new subscription_exception_1.SubscriptionExceptionFilter());
    app.useGlobalFilters(new exception_filter_1.HttpExceptionFilter());
    (0, load_swagger_1.loadSwagger)(app);
    const port = process.env.PORT || 3000;
    try {
        await app.listen(port);
        checkConfiguration(); // Do this last, so that users will see obvious issues at the end of the startup log without having to scroll up.
        common_1.Logger.log(`🚀 Backend is running on: http://localhost:${port}`);
    }
    catch (e) {
        common_1.Logger.error(`Backend failed to start on port ${port}`, e);
    }
}
function checkConfiguration() {
    const checker = new configuration_checker_1.ConfigurationChecker();
    checker.readEnvFromProcess();
    checker.check();
    if (checker.hasIssues()) {
        for (const issue of checker.getIssues()) {
            common_1.Logger.warn(issue, 'Configuration issue');
        }
        common_1.Logger.warn('Configuration issues found: ' + checker.getIssuesCount());
    }
    else {
        common_1.Logger.log('Configuration check completed without any issues.');
    }
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;