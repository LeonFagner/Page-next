"use client";
import Link from "next/link";
import axios from "axios";
import { useFormik } from "formik"; // formik é um lib utilizada para criar validações no formúlario.
import * as Yup from "yup";

import Button from "../Button/Button";
import Styles from "./Contatos.module.scss";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Loading from "../Loading/Loading";
import SucessModal from "../SucessModal/SucessModal";
import FailModal from "../FailModal/FailModal";

import { useState } from "react";

export default function Contatos() {
    const [isLoading, setLoading] = useState(false);
    const [sucessModal, setSucessModal] = useState(false);
    const [failModal, setFailModal] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            website: "",
            midia: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Campo Obrigatório"),
            email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
            phone: Yup.string().matches(
                "^[+]*[{]{0,1}[0-9]{1,4}[)]{0,1}[=\\s./0-9]*$",
                "Digite um telefone válido"
            ).required("Campo obrigatório"),
            website: Yup.string().required("Campo obrigatório"),
            midia: Yup.string().required("Campo obrigatório"),
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => handleSubmitForm(values),
    });

    const handleSubmitForm = async (values) => {
        setLoading(true);

        await axios.post("/api/sendEmail", {
            messageBody: `Nome: ${values.name}, Email: ${values.email}, Telefone: ${values.phone}, Site: ${values.website}, Midia: ${values.midia}`,
        })
        .then(() => {
            formik.resetForm();
            setLoading(false);
            setSucessModal(true);
        })
        .catch(() => {
            setLoading(false);
            setFailModal(true);
        });
    };

    const closeModal = () => {
        setFailModal(false);
        setSucessModal(false);
    };

    return (
        <>
            {sucessModal && <SucessModal closeModal={closeModal} />}
            {failModal && <FailModal closeModal={closeModal} />}
            {isLoading && <Loading />}
            <div className={Styles.container}>
                <div className={Styles.text}>
                    <span>ENTRE EM CONTATO</span>
                    <h1>Aumente seu resultado de vendas e performance</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>
                <div className={Styles.form}>
                    <h1>Fale com um especialista</h1>
                    <form id="formulario" onSubmit={formik.handleSubmit}>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Nome completo"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            required
                        />
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="E-mail profissional"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            required
                        />
                        <Input
                            id="phone"
                            name="phone"
                            type="text"
                            placeholder="Celular/Whatsapp"
                            pattern="^[+]*[{]{0,1}[0-9]{1,4}[)]{0,1}[=\\s./0-9]*$"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            required
                        />
                        <Input
                            id="website"
                            name="website"
                            type="text"
                            placeholder="Site"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.website}
                            required
                        />
                        <Select
                            id="midia"
                            name="midia"
                            type="text"
                            placeholder="Orçamento para midia"
                            options={[
                                { label: "Instagram", value: "instagram" },
                                { label: "Facebook", value: "facebook" },
                            ]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.midia}
                            required
                        />
                        <Button
                            type="submit"
                            title="Enviar"
                            kind="full"
                        />
                    </form>
                </div>
                <div className={Styles.footer}>
                    <p>
                        Ao enviar esse formulário, você reconhece que leu e concorda com a nossa 
                        <Link href="/" className={Styles.none}>
                            <span> Política de Privacidade</span>
                        </Link>.
                    </p>
                </div>
            </div>
        </>
    );
}
