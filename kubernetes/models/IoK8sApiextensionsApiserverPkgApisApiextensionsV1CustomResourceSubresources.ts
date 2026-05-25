import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus';

export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources {
  /** scale indicates the custom resource should serve a `/scale` subresource that returns an `autoscaling/v1` Scale object. */
  scale?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale;
  /** status indicates the custom resource should serve a `/status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `/status` subresource ignore changes to anything other than the `status` stanza of the object. */
  status?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus;
}
