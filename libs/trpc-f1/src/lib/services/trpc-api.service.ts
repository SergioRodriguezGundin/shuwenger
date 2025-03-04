import { Injectable } from '@angular/core';
import { CreateTRPCProxyClient, createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { F1Router } from '@gunsrf1/api-contracts';
import { environment } from '../../../../../apps/shuwenger/src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class TrpcApiService {
  private readonly trpc: CreateTRPCProxyClient<F1Router>;

  constructor() {
    this.trpc = createTRPCProxyClient<F1Router>({
      links: [httpBatchLink({ url: `${environment.apiUrl}/f1`, 
        headers: () => ({
          'Content-Type': 'application/json',
        }),
        fetch(url, options) {
          return fetch(url, {
            ...options,
            credentials: 'include',
          });
        },
      })],
    });
  }

  getF1Trpc(): CreateTRPCProxyClient<F1Router> {
    return this.trpc;
  }
}

