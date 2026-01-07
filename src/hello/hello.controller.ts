import { Controller, Get, Req, Res,HttpCode } from '@nestjs/common';
import type { Request, Response } from 'express';

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

}
