import type { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiHelper {
  constructor(private readonly request: APIRequestContext) {}

  async get(path: string): Promise<APIResponse> {
    return this.request.get(path);
  }

  async postForm(
    path: string,
    form: Record<string, string>,
  ): Promise<APIResponse> {
    return this.request.post(path, { form });
  }

  async deleteForm(
    path: string,
    form: Record<string, string>,
  ): Promise<APIResponse> {
    return this.request.delete(path, { form });
  }
}