import { Controller, Get, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller()
export class HelloController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    return response.status(200).json({
      message: 'aaaaa',
    });
  }
}
