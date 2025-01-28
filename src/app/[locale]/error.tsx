'use client';

import  GlobalError  from "@/src/error/GlobalError";
import  notFound  from "next/error";


export default function Error() {
  return (

    <GlobalError error={notFound} />

  );
}
