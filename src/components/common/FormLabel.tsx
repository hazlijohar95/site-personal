
import React from 'react';
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface FormLabelProps extends React.ComponentPropsWithoutRef<typeof Label> {
  children: React.ReactNode;
}

const FormLabel: React.FC<FormLabelProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Label
      className={cn("block text-sm mb-1 font-mono", className)}
      {...props}
    >
      {children}
    </Label>
  );
};

export default FormLabel;
