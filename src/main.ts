// 入口文件
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// NestFactory用于创建应用实例
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
