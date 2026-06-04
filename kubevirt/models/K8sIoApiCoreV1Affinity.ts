import type { K8sIoApiCoreV1NodeAffinity } from './K8sIoApiCoreV1NodeAffinity';
import type { K8sIoApiCoreV1PodAffinity } from './K8sIoApiCoreV1PodAffinity';
import type { K8sIoApiCoreV1PodAntiAffinity } from './K8sIoApiCoreV1PodAntiAffinity';

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
/** Affinity is a group of affinity scheduling rules. */
export interface K8sIoApiCoreV1Affinity {
  /** Describes node affinity scheduling rules for the pod. */
  nodeAffinity?: K8sIoApiCoreV1NodeAffinity;
  /** Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)). */
  podAffinity?: K8sIoApiCoreV1PodAffinity;
  /** Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)). */
  podAntiAffinity?: K8sIoApiCoreV1PodAntiAffinity;
}
