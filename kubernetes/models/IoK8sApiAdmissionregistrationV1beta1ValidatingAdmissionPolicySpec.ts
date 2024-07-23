/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
import {
  IoK8sApiAdmissionregistrationV1beta1AuditAnnotation,
  IoK8sApiAdmissionregistrationV1beta1AuditAnnotationFromJSON,
  IoK8sApiAdmissionregistrationV1beta1AuditAnnotationToJSON,
  IoK8sApiAdmissionregistrationV1beta1MatchCondition,
  IoK8sApiAdmissionregistrationV1beta1MatchConditionFromJSON,
  IoK8sApiAdmissionregistrationV1beta1MatchConditionToJSON,
  IoK8sApiAdmissionregistrationV1beta1MatchResources,
  IoK8sApiAdmissionregistrationV1beta1MatchResourcesFromJSON,
  IoK8sApiAdmissionregistrationV1beta1MatchResourcesToJSON,
  IoK8sApiAdmissionregistrationV1beta1ParamKind,
  IoK8sApiAdmissionregistrationV1beta1ParamKindFromJSON,
  IoK8sApiAdmissionregistrationV1beta1ParamKindToJSON,
  IoK8sApiAdmissionregistrationV1beta1Validation,
  IoK8sApiAdmissionregistrationV1beta1ValidationFromJSON,
  IoK8sApiAdmissionregistrationV1beta1ValidationToJSON,
  IoK8sApiAdmissionregistrationV1beta1Variable,
  IoK8sApiAdmissionregistrationV1beta1VariableFromJSON,
  IoK8sApiAdmissionregistrationV1beta1VariableToJSON,
} from './';

/**
 * ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec
 */
export interface IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec {
  /**
   * auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. validations and auditAnnotations may not both be empty; a least one of validations or auditAnnotations is required.
   * @type {Array<IoK8sApiAdmissionregistrationV1beta1AuditAnnotation>}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec
   */
  auditAnnotations?: Array<IoK8sApiAdmissionregistrationV1beta1AuditAnnotation>;
  /**
   * failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.
   *
   * A policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource.
   *
   * failurePolicy does not define how validations that evaluate to false are handled.
   *
   * When failurePolicy is set to Fail, ValidatingAdmissionPolicyBinding validationActions define how failures are enforced.
   *
   * Allowed values are Ignore or Fail. Defaults to Fail.
   * @type {string}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec
   */
  failurePolicy?: string;
  /**
   * MatchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.
   *
   * If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.
   *
   * The exact matching logic is (in order):
   *   1. If ANY matchCondition evaluates to FALSE, the policy is skipped.
   *   2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.
   *   3. If any matchCondition evaluates to an error (but none are FALSE):
   *      - If failurePolicy=Fail, reject the request
   *      - If failurePolicy=Ignore, the policy is skipped
   * @type {Array<IoK8sApiAdmissionregistrationV1beta1MatchCondition>}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec
   */
  matchConditions?: Array<IoK8sApiAdmissionregistrationV1beta1MatchCondition>;
  /**
   *
   * @type {IoK8sApiAdmissionregistrationV1beta1MatchResources}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec
   */
  matchConstraints?: IoK8sApiAdmissionregistrationV1beta1MatchResources;
  /**
   *
   * @type {IoK8sApiAdmissionregistrationV1beta1ParamKind}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec
   */
  paramKind?: IoK8sApiAdmissionregistrationV1beta1ParamKind;
  /**
   * Validations contain CEL expressions which is used to apply the validation. Validations and AuditAnnotations may not both be empty; a minimum of one Validations or AuditAnnotations is required.
   * @type {Array<IoK8sApiAdmissionregistrationV1beta1Validation>}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec
   */
  validations?: Array<IoK8sApiAdmissionregistrationV1beta1Validation>;
  /**
   * Variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except MatchConditions because MatchConditions are evaluated before the rest of the policy.
   *
   * The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, Variables must be sorted by the order of first appearance and acyclic.
   * @type {Array<IoK8sApiAdmissionregistrationV1beta1Variable>}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec
   */
  variables?: Array<IoK8sApiAdmissionregistrationV1beta1Variable>;
}

export function IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecFromJSON(
  json: any,
): IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec {
  return IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecFromJSONTyped(
    json,
    false,
  );
}

export function IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    auditAnnotations: !exists(json, 'auditAnnotations')
      ? undefined
      : (json['auditAnnotations'] as Array<any>).map(
          IoK8sApiAdmissionregistrationV1beta1AuditAnnotationFromJSON,
        ),
    failurePolicy: !exists(json, 'failurePolicy') ? undefined : json['failurePolicy'],
    matchConditions: !exists(json, 'matchConditions')
      ? undefined
      : (json['matchConditions'] as Array<any>).map(
          IoK8sApiAdmissionregistrationV1beta1MatchConditionFromJSON,
        ),
    matchConstraints: !exists(json, 'matchConstraints')
      ? undefined
      : IoK8sApiAdmissionregistrationV1beta1MatchResourcesFromJSON(json['matchConstraints']),
    paramKind: !exists(json, 'paramKind')
      ? undefined
      : IoK8sApiAdmissionregistrationV1beta1ParamKindFromJSON(json['paramKind']),
    validations: !exists(json, 'validations')
      ? undefined
      : (json['validations'] as Array<any>).map(
          IoK8sApiAdmissionregistrationV1beta1ValidationFromJSON,
        ),
    variables: !exists(json, 'variables')
      ? undefined
      : (json['variables'] as Array<any>).map(IoK8sApiAdmissionregistrationV1beta1VariableFromJSON),
  };
}

export function IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecToJSON(
  value?: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    auditAnnotations:
      value.auditAnnotations === undefined
        ? undefined
        : (value.auditAnnotations as Array<any>).map(
            IoK8sApiAdmissionregistrationV1beta1AuditAnnotationToJSON,
          ),
    failurePolicy: value.failurePolicy,
    matchConditions:
      value.matchConditions === undefined
        ? undefined
        : (value.matchConditions as Array<any>).map(
            IoK8sApiAdmissionregistrationV1beta1MatchConditionToJSON,
          ),
    matchConstraints: IoK8sApiAdmissionregistrationV1beta1MatchResourcesToJSON(
      value.matchConstraints,
    ),
    paramKind: IoK8sApiAdmissionregistrationV1beta1ParamKindToJSON(value.paramKind),
    validations:
      value.validations === undefined
        ? undefined
        : (value.validations as Array<any>).map(
            IoK8sApiAdmissionregistrationV1beta1ValidationToJSON,
          ),
    variables:
      value.variables === undefined
        ? undefined
        : (value.variables as Array<any>).map(IoK8sApiAdmissionregistrationV1beta1VariableToJSON),
  };
}
