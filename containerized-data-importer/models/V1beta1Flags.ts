/** Flags will create a patch that will replace all flags for the container's command field. The only flags that will be used are those define. There are no guarantees around forward/backward compatibility.  If set incorrectly this will cause the resource when rolled out to error until flags are updated. */
export interface V1beta1Flags {
  api?: Record<string, string>;
  controller?: Record<string, string>;
  uploadProxy?: Record<string, string>;
}
