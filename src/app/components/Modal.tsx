"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  // 포털 대상 노드 준비
  useEffect(() => {
    setContainer(document.getElementById("modal-root"));
  }, []);

  // 열고 스크롤 잠금
  useEffect(() => {
    if (!container) return;
    const el = dialogRef.current;
    if (!el) return;

    // showModal은 열린 상태에서 다시 호출하면 DOMException
    if (!el.open) {
      try {
        el.showModal();
      } catch {
        // Safari 구버전 등 예외 대비
        el.setAttribute("open", "");
      }
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      // 닫기 & 스크롤 복원
      if (el.open) el.close();
      document.body.style.overflow = overflow;
    };
  }, [container]);

  const safeClose = () => {
    // 히스토리가 없으면 백 대신 세이프 라우트로 이동
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/"); // 필요 시 원하는 경로로 변경
    }
  };

  const onBackdropClick: React.MouseEventHandler<HTMLDialogElement> = (e) => {
    if (e.target === e.currentTarget) {
      safeClose();
    }
  };

  const onCancel: React.FormEventHandler<HTMLDialogElement> = (e) => {
    e.preventDefault(); // 기본 close 막기
    safeClose();
  };

  if (!container) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      className="max-w-[32rem] w-[90vw] h-[40vh]  rounded-lg p-10 absolute left-1/2 top-1/2 -translate-1/2 "
      aria-labelledby="modal-title"
      onClick={onBackdropClick}
      onCancel={onCancel}
      onClose={safeClose}
    >
      <h2>모달 제목</h2>
      {children}
      <form method="dialog">
        <button>닫기</button>
      </form>
    </dialog>,
    container
  );
}
