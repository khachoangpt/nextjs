/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginDTO } from '../models/LoginDTO'
import type { LoginParams } from '../models/LoginParams'
import type { SignUpDTO } from '../models/SignUpDTO'
import type { SignUpParams } from '../models/SignUpParams'

import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'

export class ShopService {
  /**
   * Login
   * Customer login
   * @returns LoginDTO A shop
   * @throws ApiError
   */
  public static postCustomerLogin({
    xApiKey,
    requestBody,
  }: {
    xApiKey: string
    requestBody?: LoginParams
  }): CancelablePromise<LoginDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/login',
      headers: {
        'x-api-key': xApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * Sign up
   * Customer sign up
   * @returns SignUpDTO A shop
   * @throws ApiError
   */
  public static postCustomerSignup({
    xApiKey,
    requestBody,
  }: {
    xApiKey: string
    requestBody?: SignUpParams
  }): CancelablePromise<SignUpDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/signup',
      headers: {
        'x-api-key': xApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
