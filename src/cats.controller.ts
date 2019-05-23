import { Controller, Get, Req, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { Request } from 'express';

class CreateCatDto {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}

@Controller('cats')
export class CatsController {
    // http的post请求方法
    @Post()
    create(): string {
        return 'This action adds a new cat';
    }
    @Post()
    create2(@Body() createCatDto: CreateCatDto): string {
        return 'This action adds a new cat';
    }

    // 带参数的get请求(所有的参数可选，限定参数的方法应该优先于不限定参数的方法)
    @Get(':id')
    findOne(@Param('id') id: number): string {
        return `This action returns a #${id} cat`
    }
    @Get(':id')
    findOne2(@Param() params): string {
        return `This action returns a #${params.id} cat`
    }

    // http的get请求方法
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }

    // 异步处理
    // @Get()
    // async findAll1(): Promise<any[]> {
    //     return [];
    // }

    // @Get()
    // findAll2(): Observable<any[]> {
    //     return of([]);
    // }

    // http的put请求
    @Put(':id')
    update(@Param('id') id: number, @Body() createCatDto: CreateCatDto) {
        return `This action updates a #${id} cat`;
    }

    // http的delete请求
    @Delete(':id')
    deleteCat(@Param('id') id: number) {
        return `This action removes a #${id} cat`;
    }
}