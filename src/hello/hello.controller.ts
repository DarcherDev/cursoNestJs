import {
  Controller,
  Get,
  Req,
  Res,
  HttpCode,
  Param,
  ParseIntPipe,
  ParseBoolPipe, Query, UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    return response.status(200).json({
      message: 'aaaaa',
    });
  }

  @Get('/notFound')
  @HttpCode(404)
  notFoundPage(){
    return '404 not found'
  }

  @Get('/erro')
  @HttpCode(500)
  errorPage(){
    return 'Error Route!!!'
  }

  @Get('/new')
  @HttpCode(201)
  somethingNew(){
    return 'somethingNew'
  }

  @Get('ticket/:num')
  getNumberString(@Param('num')num: number){
    return num + 14;
  }

  @Get('algo/:number')
  getNumber(@Param('number', ParseIntPipe)num: number){
    return num + 14;
  }

  @Get('active/:status')
  isUserActive(@Param('status', ParseBoolPipe)status: boolean){
    return status;
  }

  // ejemplo de peticion: http://localhost:3000/greet?name=fazt&age=100
  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateUserPipe) query: {name: string, age: number}){
    return  `hello ${query.name}, you are ${query.age} years old`;
  }

}
