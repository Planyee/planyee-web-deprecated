"use client";
import { textState } from "@/state/states";
import { Group, Stack } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import Link from "next/link";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function Day() {
  // const [value, setValue] = useState<Date | null>(null);

  return (
    <>
      <div className="h-screen relative flex flex-col justify-center items-center w-full">
        {/* <DatePicker value={value} onChange={setValue} /> */}

        <Stack className="flex flex-col gap-4">
          <div className="bg-[#FFF2F2] w-full h-12 rounded-xl">
            <Group className="flex justify-between items-center h-full px-4">
              <p>Date</p>
              <p>|</p>
              <p>서울 중구 - 서울 종로구</p>
            </Group>
          </div>
          <div className="bg-[#E3F0F4] w-full h-12 rounded-xl">
            <Group className="flex justify-between items-center h-full px-4">
              <p>Date</p>
              <p>|</p>
              <p>서울 중구 - 서울 종로구</p>
            </Group>
          </div>
          <div className="bg-[#E3F0F4] w-full h-12 rounded-xl">
            <Group className="flex justify-between items-center h-full px-4">
              <p>Date</p>
              <p>|</p>
              <p>서울 중구 - 서울 종로구</p>
            </Group>
          </div>
        </Stack>

        <div className="absolute bottom-5 w-full">
          <Link href="/plan">
            <button className="bg-[#2C7488] text-white w-full h-10">
              일정 등록
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
