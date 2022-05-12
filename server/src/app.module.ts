import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { TemplateModule } from "./template/template.module";
import { GroupModule } from "./group/group.module";
import { MyidentityModule } from "./myidentity/myidentity.module";
import { CategoryModule } from "./category/category.module";
import { TemplatecategoryModule } from "./templatecategory/templatecategory.module";
import { DatasuggestionModule } from "./datasuggestion/datasuggestion.module";
import { DatarequestModule } from "./datarequest/datarequest.module";
import { ProfileviewModule } from "./profileview/profileview.module";
import { ProfileModule } from "./profile/profile.module";
import { LinksharingModule } from "./linksharing/linksharing.module";
import { LinkcategoryModule } from "./linkcategory/linkcategory.module";
import { FileprofileModule } from "./fileprofile/fileprofile.module";
import { LinkprofileModule } from "./linkprofile/linkprofile.module";
import { EnumblockuserModule } from "./enumblockuser/enumblockuser.module";
import { MembergroupModule } from "./membergroup/membergroup.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    TemplateModule,
    GroupModule,
    MyidentityModule,
    CategoryModule,
    TemplatecategoryModule,
    DatasuggestionModule,
    DatarequestModule,
    ProfileviewModule,
    ProfileModule,
    LinksharingModule,
    LinkcategoryModule,
    FileprofileModule,
    LinkprofileModule,
    EnumblockuserModule,
    MembergroupModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
