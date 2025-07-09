"use client";

import Styles from "./page.module.scss";
import Button from "@/components/Button";
import { useSignOut } from "@/hooks/useUserSession";

const Dashboards = () => {
  const { mutate } = useSignOut();

  return (
    <div className={Styles.Container}>
      <p className={Styles.Text}>Você está autenticado!</p>
      <Button
        label="Deslogar-se"
        leftIcon="exit"
        onClick={() => {
          mutate();
        }}
      />
    </div>
  );
};

export default Dashboards;
