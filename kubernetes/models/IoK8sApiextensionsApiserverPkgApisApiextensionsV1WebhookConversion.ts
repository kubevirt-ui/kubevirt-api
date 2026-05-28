import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig';

export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion {
  /** clientConfig is the instructions for how to call the webhook if strategy is `Webhook`. */
  clientConfig?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig;
  /** conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. */
  conversionReviewVersions: string[];
}
