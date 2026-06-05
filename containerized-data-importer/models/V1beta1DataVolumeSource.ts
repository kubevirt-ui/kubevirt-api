import type { V1beta1DataVolumeBlankImage } from './V1beta1DataVolumeBlankImage';
import type { V1beta1DataVolumeSourceGCS } from './V1beta1DataVolumeSourceGCS';
import type { V1beta1DataVolumeSourceHTTP } from './V1beta1DataVolumeSourceHTTP';
import type { V1beta1DataVolumeSourceImageIO } from './V1beta1DataVolumeSourceImageIO';
import type { V1beta1DataVolumeSourcePVC } from './V1beta1DataVolumeSourcePVC';
import type { V1beta1DataVolumeSourceRegistry } from './V1beta1DataVolumeSourceRegistry';
import type { V1beta1DataVolumeSourceS3 } from './V1beta1DataVolumeSourceS3';
import type { V1beta1DataVolumeSourceSnapshot } from './V1beta1DataVolumeSourceSnapshot';
import type { V1beta1DataVolumeSourceUpload } from './V1beta1DataVolumeSourceUpload';
import type { V1beta1DataVolumeSourceVDDK } from './V1beta1DataVolumeSourceVDDK';

/** DataVolumeSource represents the source for our Data Volume, this can be HTTP, Imageio, S3, GCS, Registry or an existing PVC */
export interface V1beta1DataVolumeSource {
  /** DataVolumeBlankImage provides the parameters to create a new raw blank image for the PVC */
  blank?: V1beta1DataVolumeBlankImage;
  /** DataVolumeSourceGCS provides the parameters to create a Data Volume from an GCS source */
  gcs?: V1beta1DataVolumeSourceGCS;
  /** DataVolumeSourceHTTP can be either an http or https endpoint, with an optional basic auth user name and password, and an optional configmap containing additional CAs */
  http?: V1beta1DataVolumeSourceHTTP;
  /** DataVolumeSourceImageIO provides the parameters to create a Data Volume from an imageio source */
  imageio?: V1beta1DataVolumeSourceImageIO;
  /** DataVolumeSourcePVC provides the parameters to create a Data Volume from an existing PVC */
  pvc?: V1beta1DataVolumeSourcePVC;
  /** DataVolumeSourceRegistry provides the parameters to create a Data Volume from an registry source */
  registry?: V1beta1DataVolumeSourceRegistry;
  /** DataVolumeSourceS3 provides the parameters to create a Data Volume from an S3 source */
  s3?: V1beta1DataVolumeSourceS3;
  /** DataVolumeSourceSnapshot provides the parameters to create a Data Volume from an existing VolumeSnapshot */
  snapshot?: V1beta1DataVolumeSourceSnapshot;
  /** DataVolumeSourceUpload provides the parameters to create a Data Volume by uploading the source */
  upload?: V1beta1DataVolumeSourceUpload;
  /** DataVolumeSourceVDDK provides the parameters to create a Data Volume from a Vmware source */
  vddk?: V1beta1DataVolumeSourceVDDK;
}
